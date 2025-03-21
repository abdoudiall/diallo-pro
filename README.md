# Portfolio Personnel - Abdoulaye Diallo

Portfolio professionnel développé avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Technologies

- **Framework**: Next.js 14
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Material UI
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel

## 📋 Prérequis

- Node.js 18.17 ou supérieur
- npm ou yarn

## 🛠 Installation

1. Cloner le repository :
```bash
git clone https://github.com/abdoudiall/diallo-pro.git
cd diallo-pro
```

2. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

3. Créer un fichier `.env.local` à la racine du projet :
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Lancer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production
- `npm run start` : Lance la version de production
- `npm run lint` : Vérifie le code avec ESLint
- `npm run format` : Formate le code avec Prettier

## 🔒 Sécurité

Le projet inclut plusieurs mesures de sécurité :
- Content Security Policy (CSP) stricte
- Headers de sécurité configurés
- Protection contre les attaques XSS et CSRF
- Politiques de permissions restrictives

## 🚀 Performance

Optimisations mises en place :
- Images optimisées (WebP, AVIF)
- Compression activée
- Optimisation des polices
- Gestion du cache optimisée
- Lazy loading des composants

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

Le site est entièrement responsive et s'adapte à tous les appareils :
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎨 Thème

Le site utilise un thème sombre par défaut avec :
- Couleurs personnalisées
- Typographie optimisée
- Animations fluides
- Transitions élégantes

## 📄 Structure du Projet

```
diallo-pro/
├── src/
│   ├── components/     # Composants React
│   ├── styles/        # Styles globaux
│   ├── utils/         # Fonctions utilitaires
│   └── pages/         # Pages Next.js
├── public/            # Assets statiques
└── ...
```

## 🔍 SEO

Le site est optimisé pour les moteurs de recherche avec :
- Meta tags dynamiques
- Sitemap généré automatiquement
- Robots.txt configuré
- Structure HTML sémantique

## 📈 Analytics

Intégration de :
- Google Analytics
- Vercel Analytics

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 👤 Contact

Abdoulaye Diallo - abdoulaye@diallo.pro

Lien du projet : [https://github.com/abdoudiall/diallo-pro](https://github.com/abdoudiall/diallo-pro)
