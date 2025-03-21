# Makefile for deploying diallo.pro

# Variables
BUCKET_NAME = diallo-pro
DISTRIBUTION_ID = EMS4GAR97ZQY1

# Terraform main configuration path
TF_MAIN_PATH = terraform/main

# Colors
GREEN = \033[0;32m
BLUE = \033[0;34m
YELLOW = \033[0;33m
RED = \033[0;31m
RESET = \033[0m

.PHONY: help build deploy terraform-format terraform-validate terraform-plan terraform-apply clean all

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

# Build the application
build:
	@echo "$(BLUE)Building Next.js application...$(RESET)"
	npm run build

# Deploy to S3 and invalidate CloudFront
deploy: build
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