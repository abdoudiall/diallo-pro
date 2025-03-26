# Infrastructure Architecture Guide

This document provides a comprehensive overview of the infrastructure setup for diallo.pro. The entire infrastructure is defined as code using Terraform, following modern cloud architecture best practices.

## Table of Contents

- [Big Picture](#big-picture)
- [Overview](#overview)
- [Infrastructure Components](#infrastructure-components)
- [Terraform Structure](#terraform-structure)
- [S3 Module](#s3-module)
- [CloudFront Module](#cloudfront-module)
- [Route53 Module](#route53-module)
- [Data Flow](#data-flow)
- [Security Overview](#security-overview)
- [Performance Optimizations](#performance-optimizations)
- [Infrastructure Management](#infrastructure-management)

## Big Picture

The following diagram illustrates the complete infrastructure architecture with all components and their interactions:

```
                                  Internet Users
                                        |
                                        v
+------------------+          +--------------------+
|                  |          |                    |
|   DNS Lookup     +--------->+  Route53 DNS Zone  |
|                  |          |  (diallo.pro)      |
+------------------+          +---------+----------+
                                        |
                                        | DNS Resolution
                                        v
                              +-------------------+
                              |                   |
                              | CloudFront        |
                              | Distribution      |
                              |                   |
                              +---------+---------+
                                        |
                     +------------------+------------------+
                     |                  |                  |
           +---------v---------+ +------v-------+ +-------v--------+
           |                   | |              | |                |
           | Security Headers  | | Cache Policy | | Origin Request |
           | - HSTS            | | - TTL        | | Policy         |
           | - CSP             | | - Compress   | | - Headers      |
           | - X-Frame-Options | | - QueryStr   | | - QueryStr     |
           |                   | |              | |                |
           +-------------------+ +--------------+ +----------------+
                     |                  |                  |
                     +------------------+------------------+
                                        |
                     +------------------+------------------+
                     |                  |                  |
           +---------v---------+ +------v-------+ +-------v--------+
           |                   | |              | |                |
           | Primary Origin    | | Backup Origin| | CloudFront     |
           | (S3 Bucket)       | | (S3 Bucket)  | | Logs Bucket    |
           |                   | |              | |                |
           +---------+---------+ +------+-------+ +----------------+
                     |                  |
                     |                  |
           +---------v---------+ +------v-------+
           |                   | |              |
           | S3 Website Config | | S3 Website   |
           | - index.html      | | Config       |
           | - error.html      | |              |
           |                   | |              |
           +---------+---------+ +------+-------+
                     |                  |
                     |                  |
           +---------v---------+ +------v-------+
           |                   | |              |
           | S3 Bucket Policy  | | S3 Bucket    |
           | (CloudFront OAC)  | | Policy       |
           |                   | |              |
           +---------+---------+ +------+-------+
                     |                  |
                     |                  |
           +---------v---------+ +------v-------+
           |                   | |              |
           | S3 Encryption     | | S3 Encryption|
           | & Versioning      | | & Versioning |
           |                   | |              |
           +-------------------+ +--------------+
```

## Overview

The infrastructure follows a serverless architecture pattern for hosting a static website on AWS with high availability, security, and performance:

```
                   +---------------+
                   |    Route53    |
                   | (DNS Records) |
                   +-------+-------+
                           |
                           v
+----------------+  +------+-------+  +-----------------+
|  Backup S3     |  |  CloudFront  |  |  Primary S3     |
|  Bucket        +--+  Distribution+--+  Bucket         |
|  (Failover)    |  |  (CDN)       |  |  (Website Host) |
+----------------+  +------+-------+  +-----------------+
                           |
                           v
                    +------+-------+
                    | CloudFront   |
                    | Logs Bucket  |
                    +--------------+
```

## Infrastructure Components

The infrastructure consists of the following main components:

1. **S3 Buckets**:

   - Primary bucket for website hosting
   - Backup bucket for failover
   - CloudFront logs bucket

2. **CloudFront Distribution**:

   - Global content delivery network
   - Security headers configuration
   - Cache policies and origin request policies
   - Origin access control for S3 protection

3. **Route53 DNS**:
   - DNS records for the domain
   - Alias records pointing to CloudFront
   - www subdomain configuration

## Terraform Structure

The Terraform code is organized in a modular structure:

```
terraform/
├── main/                  # Main configuration
│   ├── main.tf            # Module orchestration
│   ├── variables.tf       # Input variables definition
│   ├── outputs.tf         # Output definitions
│   └── terraform.tfvars   # Variable values
└── modules/               # Reusable modules
    ├── cloudfront/        # CloudFront configuration
    ├── route53/           # DNS configuration
    └── s3/                # S3 buckets configuration
```

## S3 Module

The S3 module manages the storage for your static website, providing secure, scalable, and reliable storage for the website content.

### S3 Architecture

```
                         +-------------------+
                         |                   |
                         |  S3 Module        |
                         |                   |
                         +---------+---------+
                                   |
                      +------------+------------+
                      |                         |
        +-------------v------------+  +---------v-------------+
        |                          |  |                       |
        |  Primary S3 Bucket       |  |  Backup S3 Bucket     |
        |  (website-bucket)        |  |  (website-bucket-bkp) |
        +-------------+------------+  +---------+-------------+
                      |                         |
        +-------------v------------+  +---------v-------------+
        |                          |  |                       |
        |  Website Configuration   |  |  Website Configuration|
        |  - index.html            |  |  - index.html         |
        |  - error.html            |  |  - error.html         |
        +-------------+------------+  +---------+-------------+
                      |                         |
        +-------------v------------+  +---------v-------------+
        |                          |  |                       |
        |  Bucket Policy           |  |  Bucket Policy        |
        |  (CloudFront Access)     |  |  (CloudFront Access)  |
        +-------------+------------+  +---------+-------------+
                      |                         |
        +-------------v------------+  +---------v-------------+
        |                          |  |                       |
        |  Security Features       |  |  Security Features    |
        |  - Encryption            |  |  - Encryption         |
        |  - Versioning            |  |  - Versioning         |
        |  - Public Access Block   |  |  - Public Access Block|
        +-------------+------------+  +---------+-------------+
```

### Key Components

1. **S3 Buckets** (`aws_s3_bucket.website`):

   - Primary storage for website content
   - Unique naming following AWS naming conventions
   - Tags for resource identification and management
   - Optional backup bucket with identical configuration

2. **Website Configuration** (`aws_s3_bucket_website_configuration.website`):

   - Index document: index.html
   - Error document: error.html
   - Enables static website hosting capabilities

3. **Access Control**:

   - **Public Access Blocking** (`aws_s3_bucket_public_access_block.website`):
     - Blocks all public access at bucket level
     - Prevents accidental exposure of content
   - **Bucket Policy** (`aws_s3_bucket_policy.website`):
     - Allows access only from CloudFront distribution
     - Uses CloudFront Origin Access Control for secure access
     - Follows principle of least privilege

4. **Security Features**:
   - **Server-Side Encryption** (`aws_s3_bucket_server_side_encryption_configuration.website`):
     - AES-256 encryption algorithm
     - Encrypts all objects at rest
   - **Versioning** (`aws_s3_bucket_versioning.website`):
     - Keeps multiple variants of objects
     - Allows recovery from unintended deletes or overwrites
     - Facilitates rollback to previous versions

### Advanced Features

- **Conditional Resource Creation**: The backup bucket is only created when specified
- **Fine-grained IAM Permissions**: S3 bucket policies follow least privilege principle
- **Content Type Handling**: Appropriate content types for different file extensions
- **Metadata Handling**: Preserves metadata during object operations
- **Efficient Origin for CloudFront**: Optimized for being an origin to CloudFront

### Implementation Details

The S3 module implements several AWS best practices:

- Bucket names are globally unique and follow DNS naming conventions
- All public access is blocked at the bucket level
- HTTPS is enforced for all access
- Strict bucket policies limit access to only the CloudFront distribution
- Server-side encryption protects sensitive content
- Versioning provides protection against accidental deletions

## CloudFront Module

CloudFront serves as a CDN (Content Delivery Network) that dramatically improves website performance and security.

```
                                +------------------+
                                |   CloudFront     |
                                |   Distribution   |
                                +--------+---------+
                                         |
                 +------------------------+------------------------+
                 |                        |                        |
        +--------v---------+    +---------v---------+    +--------v---------+
        |  Origin: Primary  |    |  Origin: Backup   |    | CloudFront Logs  |
        |   S3 Bucket      |    |    S3 Bucket      |    |    S3 Bucket     |
        +------------------+    +-------------------+    +------------------+
```

### Key Components

1. **CloudFront Distribution**:

   - Entry point for all content requests
   - SSL/TLS configuration with ACM certificate
   - Cache behavior configuration for different file types

2. **Origin Access Control**:

   - Replaces the older Origin Access Identity
   - Strict access control to S3 buckets (only CloudFront can access)
   - Uses sigv4 authentication for enhanced security

3. **Cache and Request Policies**:

   - Defines how CloudFront caches responses (TTL, compression, etc.)
   - Controls which request parameters are passed to the origin
   - Optimized for efficiently serving static content

4. **Security Headers**:

   - Configuration of critical HTTP security headers:
     - `Strict-Transport-Security` (HSTS): Forces HTTPS connections
     - `X-Content-Type-Options`: Prevents MIME sniffing
     - `X-Frame-Options`: Protects against clickjacking
     - `Content-Security-Policy`: Controls which resources can be loaded
     - `Referrer-Policy`: Controls origin information transmitted

5. **Logs Bucket**:
   - Stores all CloudFront access logs
   - Strict security configuration (no public access)
   - Specific ownership and ACL controls

### Advanced Features

- **Automatic Failover**: If the primary S3 bucket is unavailable, CloudFront automatically switches to the backup bucket
- **Performance Optimizations**: Compression, aggressive caching of static content
- **IPv6 Support**: Your site is accessible via both IPv4 and IPv6
- **Optional WAF Protection**: Ability to attach a Web Application Firewall for enhanced security
- **Cache Invalidation**: Configured to be automatically triggered during deployments via the Makefile

## Route53 Module

Route53 is AWS's DNS service that connects your domain name (diallo.pro) to your infrastructure. This service is crucial as it's the first point of contact for your users.

### DNS Architecture

```
                  +-------------------+
                  |  Route53 Zone     |
                  |  (diallo.pro)     |
                  +---------+---------+
                            |
              +-------------+-------------+
              |                           |
    +---------v---------+       +---------v---------+
    |  A Record         |       |  A Record         |
    |  (diallo.pro)     |       |  (www.diallo.pro) |
    +-------------------+       +-------------------+
              |                           |
              v                           v
      +----------------+         +----------------+
      |  CloudFront    |         |  CloudFront    |
      |  Distribution  |         |  Distribution  |
      +----------------+         +----------------+
```

### Key Components

1. **Hosted Zone** (data source):

   - Uses an existing zone for your domain
   - Authoritative source for DNS records

2. **Primary A Record**:

   - Points the apex domain (diallo.pro) to your CloudFront distribution
   - Optimized configuration with alias (better performance than CNAME)
   - Supports both IPv4 and IPv6 with a single record

3. **www A Record**:
   - Points the www subdomain (www.diallo.pro) to the same CloudFront distribution
   - Ensures consistent experience for users regardless of URL used

### Advanced Features

- **Native CloudFront Integration**: Uses aliases for optimized DNS resolution with no additional costs
- **No CNAME Architecture**: A records with aliases perform better and work on apex domains
- **Fast DNS Resolution**: Uses AWS's global network for low-latency DNS resolutions
- **Implicit Failover**: If CloudFront is configured with multiple origins, Route53 continues to point to the distribution even if one origin fails

## Data Flow

Here's how data flows through the infrastructure when a user accesses the website:

1. A user types diallo.pro in their browser
2. Route53 resolves this name to the address of the nearest CloudFront distribution
3. CloudFront:
   - Checks if the content is in cache
   - If yes, serves it directly
   - If no, retrieves content from S3 (or backup if necessary)
   - Applies security headers
   - Caches content for future requests
4. Access logs are stored in a dedicated S3 bucket for analysis

## Security Overview

Security is implemented at multiple layers:

1. **DNS Security**:

   - HTTPS enforced through CloudFront
   - Optimized routing via alias records

2. **CloudFront Security**:

   - TLS/SSL encryption for all traffic
   - Security headers configuration
   - Origin access control for S3 protection
   - Optional WAF integration
   - Geo-restriction capabilities (if needed)

3. **S3 Security**:
   - Public access blocking
   - Server-side encryption
   - Bucket policies limiting access to CloudFront only
   - Access logging
   - Versioning for recovery

## Performance Optimizations

The infrastructure includes several performance optimizations:

1. **Global CDN**:

   - Content cached at edge locations worldwide
   - Reduced latency for global users

2. **Optimized Caching**:

   - Custom cache policies for different content types
   - Long TTL for static assets
   - Compression enabled

3. **DNS Optimization**:

   - Alias records for apex domains
   - Low-latency DNS resolution

4. **S3 Optimization**:
   - Static website configuration
   - Efficient access patterns

## Infrastructure Management

The infrastructure is managed using Terraform and several helpful commands:

### Key Terraform Commands (via Makefile)

```bash
# Format Terraform code
make terraform-format

# Validate Terraform configuration
make terraform-validate

# Show infrastructure changes
make terraform-plan

# Apply infrastructure changes
make terraform-apply

# Generate Terraform documentation
make terraform-docs
```

### Customizable Parameters

The main configurable parameters:

- **domain_name**: Your domain name (diallo.pro)
- **bucket_name**: Name of the main S3 bucket
- **environment**: Environment (production by default)
- **acm_certificate_arn**: ARN of the SSL/TLS certificate
- **waf_web_acl_id**: Optional WAF WebACL ID for additional protection

### Documentation

Comprehensive documentation of the entire infrastructure is available in the `terraform/main/README.md` file, which can be generated or updated using:

```bash
make terraform-docs
```

This includes detailed information about all modules, inputs, outputs, and resources.
