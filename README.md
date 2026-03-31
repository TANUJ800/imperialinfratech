# Imperial Infratech-Con India Pvt Ltd Website

This project is a Next.js + TailwindCSS website for Imperial Infratech-Con India Pvt Ltd.

## Getting Started

1. Install dependencies

```
npm install
```

2. Run the development server

```
npm run dev
```

3. Build for production

```
npm run build
```

## Update These Placeholders

- Company phone, email, and address in `lib/siteData.js`.
- Company profile PDF at `public/company-profile.pdf`.
- Real project and machinery images in `public/images`.
- Base site URL in `lib/siteData.js`, `public/robots.txt`, and `public/sitemap.xml`.

## Contact Form

The form posts to `/api/contact` and includes server-side validation. Connect it to your preferred email or CRM provider in `pages/api/contact.js`.
