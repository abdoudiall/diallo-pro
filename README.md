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

3. Start the development server:
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
- SVG optimization for logos and icons
- Compression enabled
- Font optimization with Inter font
- SWC minification
- Console removal in production
- Package imports optimization

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
