# Main configuration for AWS infrastructure
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.0.0"
}

provider "aws" {
  region = var.aws_region
}

module "s3" {
  source = "../modules/s3"

  bucket_name                 = var.bucket_name
  environment                 = var.environment
  cloudfront_distribution_arn = module.cloudfront.distribution_arn
}

module "cloudfront" {
  source = "../modules/cloudfront"

  domain_name                    = var.domain_name
  environment                    = var.environment
  s3_bucket_id                  = module.s3.bucket_name
  s3_bucket_regional_domain_name = module.s3.bucket_regional_domain_name
  acm_certificate_arn           = var.acm_certificate_arn
  waf_web_acl_id               = var.waf_web_acl_id
}

module "route53" {
  source = "../modules/route53"

  domain_name                        = var.domain_name
  cloudfront_distribution_domain_name = module.cloudfront.distribution_domain_name
  cloudfront_distribution_hosted_zone_id = "Z2FDTNDATAQYW2" # CloudFront hosted zone ID (constant)
} 