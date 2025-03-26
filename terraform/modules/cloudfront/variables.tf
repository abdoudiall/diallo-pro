variable "domain_name" {
  description = "Domain name for the CloudFront distribution"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "s3_bucket_id" {
  description = "ID of the primary S3 bucket"
  type        = string
}

variable "s3_bucket_regional_domain_name" {
  description = "Regional domain name of the primary S3 bucket"
  type        = string
}

variable "backup_s3_bucket_id" {
  description = "ID of the backup S3 bucket"
  type        = string
}

variable "backup_s3_bucket_regional_domain_name" {
  description = "Regional domain name of the backup S3 bucket"
  type        = string
}

variable "acm_certificate_arn" {
  description = "ARN of the ACM certificate"
  type        = string
}

variable "waf_web_acl_id" {
  description = "ID of the WAF Web ACL"
  type        = string
}
