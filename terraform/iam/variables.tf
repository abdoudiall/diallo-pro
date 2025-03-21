variable "aws_region" {
  description = "Région AWS pour déployer les ressources"
  type        = string
  default     = "eu-west-3"
}

variable "iam_user_name" {
  description = "Nom de l'utilisateur IAM pour GitHub Actions"
  type        = string
  default     = "github-actions-diallo-pro"
}

variable "bucket_name" {
  description = "Nom du bucket S3"
  type        = string
  default     = "diallo-pro"
} 