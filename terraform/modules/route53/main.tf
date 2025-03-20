# Get existing Route53 zone
data "aws_route53_zone" "selected" {
  name         = var.domain_name
  private_zone = false
}

# Create A record for apex domain (example.com)
resource "aws_route53_record" "website" {
  zone_id = data.aws_route53_zone.selected.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = var.cloudfront_distribution_domain_name
    zone_id               = var.cloudfront_distribution_hosted_zone_id
    evaluate_target_health = false
  }
}

# Create A record for www subdomain (www.example.com)
resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.selected.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = var.cloudfront_distribution_domain_name
    zone_id               = var.cloudfront_distribution_hosted_zone_id
    evaluate_target_health = false
  }
} 