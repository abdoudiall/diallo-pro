## Requirements

| Name                                                                     | Version  |
| ------------------------------------------------------------------------ | -------- |
| <a name="requirement_terraform"></a> [terraform](#requirement_terraform) | >= 1.0.0 |
| <a name="requirement_aws"></a> [aws](#requirement_aws)                   | ~> 5.0   |

## Providers

No providers.

## Modules

| Name                                                              | Source                | Version |
| ----------------------------------------------------------------- | --------------------- | ------- |
| <a name="module_cloudfront"></a> [cloudfront](#module_cloudfront) | ../modules/cloudfront | n/a     |
| <a name="module_route53"></a> [route53](#module_route53)          | ../modules/route53    | n/a     |
| <a name="module_s3"></a> [s3](#module_s3)                         | ../modules/s3         | n/a     |
| <a name="module_s3_backup"></a> [s3_backup](#module_s3_backup)    | ../modules/s3         | n/a     |

## Resources

No resources.

## Inputs

| Name                                                                                       | Description                 | Type     | Default        | Required |
| ------------------------------------------------------------------------------------------ | --------------------------- | -------- | -------------- | :------: |
| <a name="input_acm_certificate_arn"></a> [acm_certificate_arn](#input_acm_certificate_arn) | ARN of the ACM certificate  | `string` | n/a            |   yes    |
| <a name="input_aws_region"></a> [aws_region](#input_aws_region)                            | AWS region                  | `string` | `"eu-west-3"`  |    no    |
| <a name="input_bucket_name"></a> [bucket_name](#input_bucket_name)                         | Name of the S3 bucket       | `string` | n/a            |   yes    |
| <a name="input_domain_name"></a> [domain_name](#input_domain_name)                         | Domain name for the website | `string` | n/a            |   yes    |
| <a name="input_environment"></a> [environment](#input_environment)                         | Environment name            | `string` | `"production"` |    no    |
| <a name="input_waf_web_acl_id"></a> [waf_web_acl_id](#input_waf_web_acl_id)                | ID of the WAF Web ACL       | `string` | `null`         |    no    |

## Outputs

| Name                                                                                                                          | Description |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------- |
| <a name="output_cloudfront_distribution_domain"></a> [cloudfront_distribution_domain](#output_cloudfront_distribution_domain) | n/a         |
| <a name="output_cloudfront_distribution_id"></a> [cloudfront_distribution_id](#output_cloudfront_distribution_id)             | n/a         |
| <a name="output_website_bucket_name"></a> [website_bucket_name](#output_website_bucket_name)                                  | n/a         |
| <a name="output_website_endpoint"></a> [website_endpoint](#output_website_endpoint)                                           | n/a         |

-e

## Submodules Documentation

-e

### CloudFront Module

## Requirements

| Name                                                                     | Version  |
| ------------------------------------------------------------------------ | -------- |
| <a name="requirement_terraform"></a> [terraform](#requirement_terraform) | >= 1.0.0 |
| <a name="requirement_aws"></a> [aws](#requirement_aws)                   | ~> 5.0   |

## Providers

| Name                                             | Version |
| ------------------------------------------------ | ------- |
| <a name="provider_aws"></a> [aws](#provider_aws) | 5.92.0  |

## Modules

No modules.

## Resources

| Name                                                                                                                                                                      | Type     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| [aws_cloudfront_cache_policy.caching_optimized](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_cache_policy)                      | resource |
| [aws_cloudfront_distribution.website](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_distribution)                                | resource |
| [aws_cloudfront_origin_access_control.website](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_origin_access_control)              | resource |
| [aws_cloudfront_origin_request_policy.s3_origin](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_origin_request_policy)            | resource |
| [aws_cloudfront_response_headers_policy.security_headers](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_response_headers_policy) | resource |
| [aws_s3_bucket.cloudfront_logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket)                                                    | resource |
| [aws_s3_bucket_acl.cloudfront_logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl)                                            | resource |
| [aws_s3_bucket_ownership_controls.cloudfront_logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_ownership_controls)              | resource |
| [aws_s3_bucket_public_access_block.cloudfront_logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block)            | resource |

## Inputs

| Name                                                                                                                                             | Description                                   | Type     | Default | Required |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- | -------- | ------- | :------: |
| <a name="input_acm_certificate_arn"></a> [acm_certificate_arn](#input_acm_certificate_arn)                                                       | ARN of the ACM certificate                    | `string` | n/a     |   yes    |
| <a name="input_backup_s3_bucket_id"></a> [backup_s3_bucket_id](#input_backup_s3_bucket_id)                                                       | ID of the backup S3 bucket                    | `string` | n/a     |   yes    |
| <a name="input_backup_s3_bucket_regional_domain_name"></a> [backup_s3_bucket_regional_domain_name](#input_backup_s3_bucket_regional_domain_name) | Regional domain name of the backup S3 bucket  | `string` | n/a     |   yes    |
| <a name="input_domain_name"></a> [domain_name](#input_domain_name)                                                                               | Domain name for the CloudFront distribution   | `string` | n/a     |   yes    |
| <a name="input_environment"></a> [environment](#input_environment)                                                                               | Environment name                              | `string` | n/a     |   yes    |
| <a name="input_s3_bucket_id"></a> [s3_bucket_id](#input_s3_bucket_id)                                                                            | ID of the primary S3 bucket                   | `string` | n/a     |   yes    |
| <a name="input_s3_bucket_regional_domain_name"></a> [s3_bucket_regional_domain_name](#input_s3_bucket_regional_domain_name)                      | Regional domain name of the primary S3 bucket | `string` | n/a     |   yes    |
| <a name="input_waf_web_acl_id"></a> [waf_web_acl_id](#input_waf_web_acl_id)                                                                      | ID of the WAF Web ACL                         | `string` | n/a     |   yes    |

## Outputs

| Name                                                                                                        | Description                                |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| <a name="output_distribution_arn"></a> [distribution_arn](#output_distribution_arn)                         | ARN of the CloudFront distribution         |
| <a name="output_distribution_domain_name"></a> [distribution_domain_name](#output_distribution_domain_name) | Domain name of the CloudFront distribution |
| <a name="output_distribution_id"></a> [distribution_id](#output_distribution_id)                            | ID of the CloudFront distribution          |

-e

### Route53 Module

## Requirements

| Name                                                                     | Version  |
| ------------------------------------------------------------------------ | -------- |
| <a name="requirement_terraform"></a> [terraform](#requirement_terraform) | >= 1.0.0 |
| <a name="requirement_aws"></a> [aws](#requirement_aws)                   | ~> 5.0   |

## Providers

| Name                                             | Version |
| ------------------------------------------------ | ------- |
| <a name="provider_aws"></a> [aws](#provider_aws) | 5.92.0  |

## Modules

No modules.

## Resources

| Name                                                                                                                     | Type        |
| ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| [aws_route53_record.website](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) | resource    |
| [aws_route53_record.www](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record)     | resource    |
| [aws_route53_zone.selected](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route53_zone) | data source |

## Inputs

| Name                                                                                                                                                | Description                                   | Type     | Default | Required |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------- | ------- | :------: |
| <a name="input_cloudfront_distribution_domain_name"></a> [cloudfront_distribution_domain_name](#input_cloudfront_distribution_domain_name)          | Domain name of the CloudFront distribution    | `string` | n/a     |   yes    |
| <a name="input_cloudfront_distribution_hosted_zone_id"></a> [cloudfront_distribution_hosted_zone_id](#input_cloudfront_distribution_hosted_zone_id) | Hosted zone ID of the CloudFront distribution | `string` | n/a     |   yes    |
| <a name="input_domain_name"></a> [domain_name](#input_domain_name)                                                                                  | Domain name for the website                   | `string` | n/a     |   yes    |

## Outputs

No outputs.
-e

### S3 Module

## Requirements

| Name                                                                     | Version  |
| ------------------------------------------------------------------------ | -------- |
| <a name="requirement_terraform"></a> [terraform](#requirement_terraform) | >= 1.0.0 |
| <a name="requirement_aws"></a> [aws](#requirement_aws)                   | ~> 5.0   |

## Providers

| Name                                             | Version |
| ------------------------------------------------ | ------- |
| <a name="provider_aws"></a> [aws](#provider_aws) | 5.92.0  |

## Modules

No modules.

## Resources

| Name                                                                                                                                                                                     | Type     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| [aws_s3_bucket.website](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket)                                                                           | resource |
| [aws_s3_bucket_policy.website](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy)                                                             | resource |
| [aws_s3_bucket_public_access_block.website](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block)                                   | resource |
| [aws_s3_bucket_server_side_encryption_configuration.website](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_server_side_encryption_configuration) | resource |
| [aws_s3_bucket_versioning.website](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning)                                                     | resource |
| [aws_s3_bucket_website_configuration.website](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_website_configuration)                               | resource |

## Inputs

| Name                                                                                                               | Description                        | Type     | Default        | Required |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | -------- | -------------- | :------: |
| <a name="input_bucket_name"></a> [bucket_name](#input_bucket_name)                                                 | Name of the S3 bucket              | `string` | n/a            |   yes    |
| <a name="input_cloudfront_distribution_arn"></a> [cloudfront_distribution_arn](#input_cloudfront_distribution_arn) | ARN of the CloudFront distribution | `string` | n/a            |   yes    |
| <a name="input_environment"></a> [environment](#input_environment)                                                 | Environment name                   | `string` | `"production"` |    no    |
| <a name="input_is_backup"></a> [is_backup](#input_is_backup)                                                       | Whether this is a backup bucket    | `bool`   | `false`        |    no    |

## Outputs

| Name                                                                                                                 | Description                           |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| <a name="output_bucket_arn"></a> [bucket_arn](#output_bucket_arn)                                                    | ARN of the S3 bucket                  |
| <a name="output_bucket_name"></a> [bucket_name](#output_bucket_name)                                                 | Name of the S3 bucket                 |
| <a name="output_bucket_regional_domain_name"></a> [bucket_regional_domain_name](#output_bucket_regional_domain_name) | Regional domain name of the S3 bucket |
| <a name="output_website_endpoint"></a> [website_endpoint](#output_website_endpoint)                                  | Website endpoint of the S3 bucket     |
