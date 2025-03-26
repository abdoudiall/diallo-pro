output "website_bucket_name" {
  value = module.s3.bucket_name
}

output "cloudfront_distribution_domain" {
  value = module.cloudfront.distribution_domain_name
}

output "cloudfront_distribution_id" {
  value = module.cloudfront.distribution_id
}

output "website_endpoint" {
  value = module.s3.website_endpoint
}
