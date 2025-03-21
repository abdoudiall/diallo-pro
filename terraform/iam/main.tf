provider "aws" {
  region = var.aws_region
}

# Utilisateur IAM pour GitHub Actions
resource "aws_iam_user" "github_actions" {
  name = var.iam_user_name
  path = "/ci/"
}

# Politique IAM pour les autorisations S3
resource "aws_iam_policy" "s3_deploy" {
  name        = "s3-deploy-${var.bucket_name}"
  description = "Permet de déployer du contenu vers le bucket S3 ${var.bucket_name}"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:ListBucket",
          "s3:DeleteObject",
          "s3:GetBucketLocation"
        ],
        Effect   = "Allow",
        Resource = [
          "arn:aws:s3:::${var.bucket_name}",
          "arn:aws:s3:::${var.bucket_name}/*"
        ]
      }
    ]
  })
}

# Politique IAM pour les autorisations CloudFront
resource "aws_iam_policy" "cloudfront_invalidation" {
  name        = "cloudfront-invalidation-diallo-pro"
  description = "Permet d'invalider le cache CloudFront pour diallo.pro"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "cloudfront:CreateInvalidation",
          "cloudfront:GetInvalidation",
          "cloudfront:ListInvalidations"
        ],
        Effect   = "Allow",
        Resource = "*"
      }
    ]
  })
}

# Politique IAM pour les autorisations Terraform
resource "aws_iam_policy" "terraform_permissions" {
  name        = "terraform-permissions-diallo-pro"
  description = "Permet à Terraform de gérer les ressources pour diallo.pro"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "s3:*",
          "cloudfront:*",
          "route53:*",
          "acm:*",
          "wafv2:*",
          "cloudwatch:*",
          "logs:*"
        ],
        Effect   = "Allow",
        Resource = "*"
      }
    ]
  })
}

# Attachement des politiques à l'utilisateur
resource "aws_iam_user_policy_attachment" "s3_deploy" {
  user       = aws_iam_user.github_actions.name
  policy_arn = aws_iam_policy.s3_deploy.arn
}

resource "aws_iam_user_policy_attachment" "cloudfront_invalidation" {
  user       = aws_iam_user.github_actions.name
  policy_arn = aws_iam_policy.cloudfront_invalidation.arn
}

resource "aws_iam_user_policy_attachment" "terraform_permissions" {
  user       = aws_iam_user.github_actions.name
  policy_arn = aws_iam_policy.terraform_permissions.arn
}

# Génération de clés d'accès
resource "aws_iam_access_key" "github_actions" {
  user = aws_iam_user.github_actions.name
}

# Outputs pour récupérer les informations des clés d'accès
output "access_key_id" {
  value     = aws_iam_access_key.github_actions.id
  sensitive = false
}

output "secret_access_key" {
  value     = aws_iam_access_key.github_actions.secret
  sensitive = true
} 