# Personal Portfolio - Abdoulaye Diallo

Professional portfolio developed with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, Simple Icons
- **UI Components**: Radix UI (Tooltip)
- **Deployment**: AWS (S3, CloudFront, Route53)
- **Infrastructure as Code**: Terraform

## 📋 Prerequisites

- Node.js 18.17 or higher
- npm or yarn

## 🛠 Installation

1. Clone the repository

```bash
git clone https://github.com/AbdoulayeDiallo/diallo-pro.git
cd diallo-pro
```

2. Install dependencies and setup the project

```bash
make install
```

## Available Commands

The project uses Make to standardize common operations. Here are the main commands:

- `make install` - Install dependencies and setup the project
- `make dev` - Start the development server
- `make build` - Build for production
- `make deploy` - Deploy to production
- `make clean` - Clean build artifacts
- `make help` - Show all available commands

For development:

```bash
make dev
```

For production build and deployment:

```bash
make build
make deploy
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Creates a production build
- `npm run start`: Starts the production server
- `npm run lint`: Checks code with ESLint
- `npm run format`: Formats code with Prettier

## 🔒 Security

The project includes several security measures:

- Content Security Policy (CSP) configured in CloudFront
- Security headers implemented through CloudFront Response Headers Policy:
  - Strict-Transport-Security (HSTS)
  - X-Content-Type-Options
  - X-Frame-Options
  - Referrer-Policy
  - X-XSS-Protection
- S3 bucket with blocked public access
- CloudFront Origin Access Control for S3 protection

## 🚀 Performance

The site includes several performance optimizations:

- Static site generation with `output: 'export'`
- SVG optimization for logos and icons
- Compression enabled
- Font optimization with Inter font
- SWC minification
- Console removal in production
- Package imports optimization

## 🏗️ Infrastructure

The infrastructure is managed using Terraform. The main components are:

- S3 bucket for static website hosting
- CloudFront distribution with security headers
- Route53 for DNS management

### Terraform Documentation

The project includes automatic documentation generation for the Terraform configuration. To generate or update the documentation:

```bash
make terraform-docs
```

This command creates a comprehensive README.md file in the `terraform/main` directory that includes:

- Main module documentation (inputs, outputs, resources)
- Complete documentation for all submodules (CloudFront, Route53, S3)

The documentation is automatically generated using terraform-docs and provides an up-to-date reference of all infrastructure components.

### Detailed Infrastructure Documentation

For a comprehensive understanding of the infrastructure:

- **[INFRASTRUCTURE.md](./INFRASTRUCTURE.md)**: Complete architecture guide with detailed diagrams and explanations of all components and their interactions.
- **[terraform/main/README.md](./terraform/main/README.md)**: Technical reference with all Terraform resources, inputs, outputs, and modules.

These documents provide both high-level architectural overview and detailed technical specifications of the AWS infrastructure powering this site.

## 🚢 Deployment

The site can be deployed using the provided Makefile commands.

### Prerequisites

- AWS CLI installed and configured with appropriate permissions
- Terraform installed (version 1.0.0 or higher)
- GNU Make

### Deployment Commands

```bash
# Show available commands
make help

# Infrastructure deployment
make terraform-format    # Format Terraform code
make terraform-validate  # Validate Terraform configuration
make terraform-plan     # Show planned infrastructure changes
make terraform-apply    # Apply infrastructure changes
make terraform-docs     # Generate Terraform documentation

# Website deployment
make build              # Build the Next.js application
make deploy            # Deploy to S3 and invalidate CloudFront cache
make deploy-clean      # Deploy and clean up afterwards

# Full deployment process
make all               # Run all steps (format, validate, plan, apply, build, deploy)
make all-clean         # Run all steps and clean up afterwards

# Clean generated files
make clean             # Remove generated files (.next, out, etc.)
```

## 📱 Responsive Design

The site is fully responsive and adapts to all devices:

- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎨 Theme

The site uses a dark theme exclusively with:

- Dark background (`bg-gray-900`)
- Accent colors:
  - Blue (`text-blue-500`, `text-blue-600`) for tech-related items
  - Green (`text-green-500`) for leadership items
  - Purple (`text-purple-500`, `text-purple-600`) for certain tech items
  - Orange (`text-orange-500`) for AWS and Malt
  - Gray (`text-gray-400`, `text-gray-800`) for descriptive text
- Typography:
  - Inter font for all text
  - Bold headings (`font-bold`)
  - Various text sizes from `text-sm` to `text-5xl`
- Animations:
  - Fade and slide up animations with Framer Motion
  - Hover effects on interactive elements
  - Smooth transitions for colors and borders
- Components:
  - Rounded corners (`rounded-lg`)
  - Subtle borders (`border-gray-700`)
  - Semi-transparent backgrounds (`bg-gray-800/50`)
  - Tooltips with dark background and white text

## 📄 Project Structure

```
diallo-pro/
├── src/
│   ├── app/                # Next.js App Router structure
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   └── components/
│       └── main-content.tsx # Main component with all sections
├── public/
│   ├── favicon.svg         # Site favicon
│   └── images/
│       └── logos/         # Company logos
└── ...
```

## 🔍 SEO

The site includes basic SEO configuration:

- Metadata in layout.tsx:
  - Title: "Abdoulaye Diallo"
  - Description: "Consultant en systèmes d'information et transformation digitale"
- HTML lang attribute set to "fr"
- Inter font from Google Fonts
- SVG favicon with initials "AD"

## 🤝 Contribution

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Contact

Abdoulaye Diallo - abdoulaye@diallo.pro

Project link: [https://github.com/abdoudiall/diallo-pro](https://github.com/abdoudiall/diallo-pro)

## Versioning System

The project uses GitVersion for automatic version management. Versions follow the [Major].[Minor].[Patch] format.

### Increment Rules

Versions are automatically incremented based on commit messages:

- `breaking:` or `major:` → Increments major version (x.0.0)

  - Example: "breaking: major API changes"
  - Note: After a major version, you need to create a manual tag (ex: `git tag -a v2.0.0 -m "Version 2.0.0"`)

- `feature:` or `feat:` → Increments minor version (1.x.0)

  - Example: "feature: add new functionality"

- `fix:`, `patch:`, `chore:`, `docs:`, `style:`, `refactor:`, `ci:`, `build:` → Increments patch version (1.0.x)
  - Example: "fix: bug correction"

### Useful Commands

```bash
# Show current version
make version

# Create manual tag (required after major version)
git tag -a vX.Y.Z -m "Version X.Y.Z"
git push origin vX.Y.Z
```

### Version Cycle Example

1. Initial version: 1.0.0
2. "fix:" commit → 1.0.1
3. "feature:" commit → 1.1.0
4. "breaking:" commit → 2.0.0
5. Manual tag: `git tag -a v2.0.0 -m "Version 2.0.0"`
6. "fix:" commit → 2.0.1

## Development

### Pre-commit hooks

This project uses pre-commit to maintain code quality. The following hooks are configured:

- Formatting and linting:

  - Prettier for TypeScript/JavaScript code formatting
  - ESLint for TypeScript/JavaScript linting
  - Terraform fmt for Terraform files formatting
  - Terraform validate for Terraform configurations validation
  - Checkov for Terraform security analysis

- General checks:
  - No trailing whitespace
  - End of file with newline
  - YAML/JSON validation
  - Large files detection
  - Main branch protection
  - Merge conflict detection

To install the hooks:

```bash
# Install dependencies
brew install pre-commit tflint checkov

# Install hooks
pre-commit install
```

The hooks will run automatically on commits. To run them manually:

```bash
pre-commit run --all-files
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
