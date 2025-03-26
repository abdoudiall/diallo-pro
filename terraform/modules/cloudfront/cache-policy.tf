resource "aws_cloudfront_cache_policy" "caching_optimized" {
  name        = "${replace(var.domain_name, ".", "-")}-caching-optimized"
  comment     = "Optimized caching policy for ${var.domain_name}"
  default_ttl = 86400
  max_ttl     = 31536000
  min_ttl     = 1

  parameters_in_cache_key_and_forwarded_to_origin {
    cookies_config {
      cookie_behavior = "none"
    }
    headers_config {
      header_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
    enable_accept_encoding_gzip   = true
    enable_accept_encoding_brotli = true
  }
}
