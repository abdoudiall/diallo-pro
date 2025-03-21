# Makefile for deploying diallo.pro

# Terraform main configuration path
TF_MAIN_PATH = terraform/main

# Colors
GREEN = \033[0;32m
BLUE = \033[0;34m
YELLOW = \033[0;33m
RED = \033[0;31m
RESET = \033[0m

# Dynamic variables from Terraform outputs
BUCKET_NAME = $(shell cd $(TF_MAIN_PATH) && terraform output -no-color -raw website_bucket_name 2>/dev/null | tr -d '\n\r')
DISTRIBUTION_ID = $(shell cd $(TF_MAIN_PATH) && terraform output -no-color -raw cloudfront_distribution_id 2>/dev/null | tr -d '\n\r')

.PHONY: help build deploy terraform-format terraform-validate terraform-plan terraform-apply clean all show-vars terraform-refresh check-vars

help:
	@echo "$(BLUE)Available commands:$(RESET)"
	@echo "  $(GREEN)make build$(RESET)           - Build the Next.js application"
	@echo "  $(GREEN)make deploy$(RESET)          - Deploy to AWS (S3 + CloudFront)"
	@echo "  $(GREEN)make deploy-clean$(RESET)    - Deploy and clean up afterwards"
	@echo "  $(GREEN)make terraform-format$(RESET) - Format Terraform code"
	@echo "  $(GREEN)make terraform-validate$(RESET) - Validate Terraform configuration"
	@echo "  $(GREEN)make terraform-plan$(RESET)   - Show planned infrastructure changes"
	@echo "  $(GREEN)make terraform-apply$(RESET)  - Apply infrastructure changes"
	@echo "  $(GREEN)make clean$(RESET)           - Remove generated files"
	@echo "  $(GREEN)make all$(RESET)             - Run all steps (format, validate, plan, apply, build, deploy)"
	@echo "  $(GREEN)make all-clean$(RESET)       - Run all steps and clean up afterwards"
	@echo "  $(GREEN)make show-vars$(RESET)       - Display values of dynamic variables from Terraform"
	@echo "  $(GREEN)make check-vars$(RESET)      - Verify that Terraform variables are properly defined"
	@echo "  $(GREEN)make terraform-refresh$(RESET) - Refresh Terraform state"

# Display values of dynamic variables
show-vars: terraform-refresh
	@echo "$(BLUE)Dynamic variables from Terraform:$(RESET)"
	@if [ -z "$(BUCKET_NAME)" ]; then \
		echo "$(RED)ERREUR: BUCKET_NAME est vide. Vérifiez l'état Terraform.$(RESET)"; \
		exit 1; \
	fi
	@if [ -z "$(DISTRIBUTION_ID)" ]; then \
		echo "$(RED)ERREUR: DISTRIBUTION_ID est vide. Vérifiez l'état Terraform.$(RESET)"; \
		exit 1; \
	fi
	@echo "$(YELLOW)BUCKET_NAME$(RESET)     = $(GREEN)$(BUCKET_NAME)$(RESET)"
	@echo "$(YELLOW)DISTRIBUTION_ID$(RESET) = $(GREEN)$(DISTRIBUTION_ID)$(RESET)"

# Build the application
build:
	@echo "$(BLUE)Building Next.js application...$(RESET)"
	npm run build

# Vérification des variables avant déploiement
check-vars:
	@if [ -z "$(BUCKET_NAME)" ]; then \
		echo "$(RED)ERREUR: BUCKET_NAME est vide. Impossible de déployer.$(RESET)"; \
		exit 1; \
	fi
	@if [ -z "$(DISTRIBUTION_ID)" ]; then \
		echo "$(RED)ERREUR: DISTRIBUTION_ID est vide. Impossible de déployer.$(RESET)"; \
		exit 1; \
	fi

# Deploy to S3 and invalidate CloudFront
deploy: build check-vars
	@echo "$(BLUE)Deploying to S3...$(RESET)"
	cd out && aws s3 sync . s3://$(BUCKET_NAME) --delete
	@echo "$(BLUE)Invalidating CloudFront cache...$(RESET)"
	aws cloudfront create-invalidation --distribution-id $(DISTRIBUTION_ID) --paths "/*" --no-cli-pager
	@echo "$(GREEN)Deployment completed!$(RESET)"

# Deploy and clean up afterwards
deploy-clean: deploy
	@echo "$(BLUE)Cleaning up after deployment...$(RESET)"
	$(MAKE) clean
	@echo "$(GREEN)Cleanup completed!$(RESET)"

# Format Terraform code
terraform-format:
	@echo "$(BLUE)Formatting Terraform code...$(RESET)"
	cd $(TF_MAIN_PATH) && terraform fmt -recursive ..

# Validate Terraform configuration
terraform-validate: terraform-format
	@echo "$(BLUE)Validating Terraform configuration...$(RESET)"
	cd $(TF_MAIN_PATH) && terraform validate

# Plan Terraform changes
terraform-plan: terraform-validate
	@echo "$(BLUE)Planning infrastructure changes...$(RESET)"
	cd $(TF_MAIN_PATH) && terraform plan

# Apply Terraform changes
terraform-apply: terraform-validate
	@echo "$(YELLOW)Applying infrastructure changes...$(RESET)"
	cd $(TF_MAIN_PATH) && terraform apply -auto-approve

# Clean generated files
clean:
	@echo "$(BLUE)Cleaning generated files...$(RESET)"
	rm -rf .next
	rm -rf out
	rm -rf node_modules/.cache

# Execute all steps
all: terraform-format terraform-validate terraform-plan terraform-apply build deploy
	@echo "$(GREEN)All steps completed successfully!$(RESET)"

# Execute all steps and clean up
all-clean: all
	@echo "$(BLUE)Cleaning up after full deployment process...$(RESET)"
	$(MAKE) clean
	@echo "$(GREEN)Cleanup completed!$(RESET)"

# Refresh Terraform state
terraform-refresh:
	@echo "$(BLUE)Refreshing Terraform state...$(RESET)"
	cd $(TF_MAIN_PATH) && terraform refresh 