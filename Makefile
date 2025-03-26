# Makefile for deploying diallo.pro

# Terraform main configuration path
TF_MAIN_PATH = terraform/main

# Version from GitVersion
VERSION := $(shell dotnet-gitversion /showvariable SemVer)

# Colors
GREEN = \033[0;32m
BLUE = \033[0;34m
YELLOW = \033[0;33m
RED = \033[0;31m
RESET = \033[0m

# Dynamic variables from Terraform outputs
BUCKET_NAME = $(shell cd $(TF_MAIN_PATH) && terraform output -no-color -raw website_bucket_name 2>/dev/null | tr -d '\n\r')
DISTRIBUTION_ID = $(shell cd $(TF_MAIN_PATH) && terraform output -no-color -raw cloudfront_distribution_id 2>/dev/null | tr -d '\n\r')

.PHONY: help build deploy terraform-format terraform-validate terraform-plan terraform-apply clean all show-vars terraform-refresh check-vars dev start lint format install version

help:
	@echo "$(BLUE)Available commands:$(RESET)"
	@echo "$(BLUE)Development commands:$(RESET)"
	@grep -E '^## DEV [a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)make %-15s$(RESET) %s\n", $$1, $$2}' | sed 's/## DEV //'
	@echo ""
	@echo "$(BLUE)Deployment commands:$(RESET)"
	@grep -E '^## DEPLOY [a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)make %-15s$(RESET) %s\n", $$1, $$2}' | sed 's/## DEPLOY //'
	@echo ""
	@echo "$(BLUE)Infrastructure commands:$(RESET)"
	@grep -E '^## INFRA [a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)make %-15s$(RESET) %s\n", $$1, $$2}' | sed 's/## INFRA //'

## DEV install: ## Install project dependencies
install:
	@echo "$(BLUE)Installing dependencies...$(RESET)"
	npm install

## DEV dev: ## Start development server
dev:
	@echo "$(BLUE)Starting development server...$(RESET)"
	npm run dev

## DEV start: ## Start production server
start:
	@echo "$(BLUE)Starting production server...$(RESET)"
	npm run start

## DEV lint: ## Run linting and format checks
lint:
	@echo "$(BLUE)Running linting and format checks...$(RESET)"
	npm run lint

## DEV format: ## Format code with Prettier
format:
	@echo "$(BLUE)Formatting code...$(RESET)"
	npm run format

## DEV version: ## Display current version
version:
	@echo "$(BLUE)Version:$(RESET) $(GREEN)$(VERSION)$(RESET)"

## DEPLOY build: ## Build the Next.js application
build:
	@echo "$(BLUE)Building Next.js application...$(RESET)"
	NEXT_PUBLIC_VERSION=$(VERSION) npm run build

## INFRA show-vars: ## Display values of dynamic variables from Terraform
show-vars: terraform-refresh
	@echo "$(BLUE)Dynamic variables from Terraform:$(RESET)"
	@if [ -z "$(BUCKET_NAME)" ]; then \
		echo "$(RED)ERROR: BUCKET_NAME is empty. Check Terraform state.$(RESET)"; \
		exit 1; \
	fi
	@if [ -z "$(DISTRIBUTION_ID)" ]; then \
		echo "$(RED)ERROR: DISTRIBUTION_ID is empty. Check Terraform state.$(RESET)"; \
		exit 1; \
	fi
	@echo "$(YELLOW)BUCKET_NAME$(RESET)     = $(GREEN)$(BUCKET_NAME)$(RESET)"
	@echo "$(YELLOW)DISTRIBUTION_ID$(RESET) = $(GREEN)$(DISTRIBUTION_ID)$(RESET)"

# Internal target, not displayed in help
check-vars:
	@if [ -z "$(BUCKET_NAME)" ]; then \
		echo "$(RED)ERROR: BUCKET_NAME is empty. Cannot deploy.$(RESET)"; \
		exit 1; \
	fi
	@if [ -z "$(DISTRIBUTION_ID)" ]; then \
		echo "$(RED)ERROR: DISTRIBUTION_ID is empty. Cannot deploy.$(RESET)"; \
		exit 1; \
	fi

## DEPLOY deploy: ## Deploy to AWS (S3 + CloudFront)
deploy: build check-vars
	@echo "$(BLUE)Deploying to S3...$(RESET)"
	cd out && aws s3 sync . s3://$(BUCKET_NAME) --delete
	@echo "$(BLUE)Invalidating CloudFront cache...$(RESET)"
	aws cloudfront create-invalidation --distribution-id $(DISTRIBUTION_ID) --paths "/*" --no-cli-pager
	@echo "$(GREEN)Deployment completed!$(RESET)"

## DEPLOY deploy-clean: ## Deploy and clean up afterwards
deploy-clean: deploy
	@echo "$(BLUE)Cleaning up after deployment...$(RESET)"
	$(MAKE) clean
	@echo "$(GREEN)Cleanup completed!$(RESET)"

## INFRA terraform-format: ## Format Terraform code
terraform-format:
	@echo "$(BLUE)Formatting Terraform code...$(RESET)"
	cd $(TF_MAIN_PATH) && terraform fmt -recursive ..

## INFRA terraform-validate: ## Validate Terraform configuration
terraform-validate: terraform-format
	@echo "$(BLUE)Validating Terraform configuration...$(RESET)"
	cd $(TF_MAIN_PATH) && terraform validate

## INFRA terraform-plan: ## Show planned infrastructure changes
terraform-plan: terraform-validate
	@echo "$(BLUE)Planning infrastructure changes...$(RESET)"
	cd $(TF_MAIN_PATH) && terraform plan

## INFRA terraform-apply: ## Apply infrastructure changes
terraform-apply: terraform-validate
	@echo "$(YELLOW)Applying infrastructure changes...$(RESET)"
	cd $(TF_MAIN_PATH) && terraform apply -auto-approve

## DEPLOY clean: ## Remove generated files
clean:
	@echo "$(BLUE)Cleaning generated files...$(RESET)"
	rm -rf .next
	rm -rf out
	rm -rf node_modules/.cache

## DEPLOY all: ## Run all steps (format, validate, plan, apply, build, deploy)
all: terraform-format terraform-validate terraform-plan terraform-apply build deploy
	@echo "$(GREEN)All steps completed successfully!$(RESET)"

## DEPLOY all-clean: ## Run all steps and clean up afterwards
all-clean: all
	@echo "$(BLUE)Cleaning up after full deployment process...$(RESET)"
	$(MAKE) clean
	@echo "$(GREEN)Cleanup completed!$(RESET)"

## INFRA terraform-refresh: ## Refresh Terraform state
terraform-refresh:
	@echo "$(BLUE)Refreshing Terraform state...$(RESET)"
	cd $(TF_MAIN_PATH) && terraform refresh

.PHONY: help build deploy terraform-format terraform-validate terraform-plan terraform-apply clean all show-vars terraform-refresh check-vars dev start lint format install version
