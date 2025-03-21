# Personal Portfolio - Abdoulaye Diallo

Professional portfolio developed with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Material UI
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: AWS (S3, CloudFront, Route53)

## 📋 Prerequisites

- Node.js 18.17 or higher
- npm or yarn

## 🛠 Installation

1. Clone the repository:
```bash
git clone https://github.com/abdoudiall/diallo-pro.git
cd diallo-pro
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the project root:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
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
- Image optimization with WebP format
- Compression enabled
- Font optimization
- SWC minification
- Console removal in production
- Package imports optimization
- Optimized image sizes and caching

## 🚢 Deployment

### Prerequisites

- AWS CLI installed and configured with appropriate permissions
- Terraform installed (version 1.0.0 or higher)

### Infrastructure Deployment

```bash
# Format and validate Terraform code
cd terraform/main
terraform fmt -recursive ..
terraform validate

# Plan and apply changes
terraform plan
terraform apply
```

### Website Deployment

```bash
# Build the application
npm run build

# Sync with S3 bucket
cd out
aws s3 sync . s3://diallo-pro --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id EMS4GAR97ZQY1 --paths "/*"
```

## 📱 Responsive Design

The site is fully responsive and adapts to all devices:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎨 Theme

The site uses a dark theme by default with:
- Custom colors
- Optimized typography
- Smooth animations
- Elegant transitions

## 📄 Project Structure

```
diallo-pro/
├── src/
│   ├── app/            # Next.js App Router structure
│   │   ├── layout.tsx  # Root layout with metadata
│   │   ├── page.tsx    # Homepage
│   │   ├── globals.css # Global styles
│   │   └── providers.tsx # Theme and other providers
│   └── components/     # React components
├── terraform/          # Infrastructure as Code
│   ├── main/           # Main Terraform configuration
│   └── modules/        # Reusable Terraform modules
└── ...
```

## 🔍 SEO

The site includes basic SEO configuration:
- Simple metadata in layout.tsx with title and description
- HTML lang attribute set to "fr"
- Inter font from Google Fonts for typography

## 📈 Analytics

No analytics integrations are currently implemented in the codebase.

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
