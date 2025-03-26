resource "aws_cloudfront_origin_request_policy" "s3_origin" {
  name    = "${replace(var.domain_name, ".", "-")}-s3-origin"
  comment = "S3 origin request policy for ${var.domain_name}"

  cookies_config {
    cookie_behavior = "none"
  }

  headers_config {
    header_behavior = "none"
  }

  query_strings_config {
    query_string_behavior = "none"
  }
}
