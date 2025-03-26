resource "aws_cloudfront_response_headers_policy" "security_headers" {
  name    = "${replace(var.domain_name, ".", "-")}-security-headers"
  comment = "Security headers policy for ${var.domain_name}"

  security_headers_config {
    content_security_policy {
      content_security_policy = join("; ", [
        "default-src 'self'",
        "script-src 'self'",
        "style-src 'self' https://fonts.googleapis.com",
        "img-src 'self' data: https: *.linkedin.com *.malt.fr *.github.com",
        "font-src 'self' https://fonts.gstatic.com",
        "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com"
      ])
      override = true
    }

    content_type_options {
      override = true
    }

    frame_options {
      frame_option = "DENY"
      override     = true
    }

    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }

    strict_transport_security {
      access_control_max_age_sec = 31536000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    xss_protection {
      mode_block = true
      protection = true
      override   = true
    }
  }
}
