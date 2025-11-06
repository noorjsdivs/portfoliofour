# 🚀 Personal Portfolio Website

A modern, responsive single-page portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This portfolio showcases professional work, skills, experience, and provides an easy way for visitors to get in touch.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

---

## ✨ Features

- 🎨 **Modern Design**: Clean and professional UI with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Lightning Fast**: Built with Next.js 16 for optimal performance
- 🎯 **SEO Optimized**: Meta tags and semantic HTML for better search rankings
- 🌙 **Smooth Scrolling**: Enhanced user experience with seamless navigation
- 🔧 **Easy Customization**: Well-structured components for quick updates
- 🚀 **Production Ready**: Optimized build with Next.js static generation

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Scripts](#-scripts)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🛠️ Tech Stack

| Technology                                                | Version | Purpose         |
| --------------------------------------------------------- | ------- | --------------- |
| [Next.js](https://nextjs.org/)                            | 16.0.1  | React Framework |
| [React](https://react.dev/)                               | 19.2.0  | UI Library      |
| [TypeScript](https://www.typescriptlang.org/)             | 5.9.3   | Type Safety     |
| [Tailwind CSS](https://tailwindcss.com/)                  | 4.1.16  | Styling         |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.5.0   | Icon Library    |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18.x or higher
- **pnpm** (recommended), npm, or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/noorjsdivs/portfoliofour.git
   cd portfoliofour
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view your portfolio.

   The page will auto-reload when you make changes thanks to Next.js Hot Module Replacement (HMR).

---

## 📁 Project Structure

```
portfoliofour/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── Aboutme.tsx          # About section component
│   ├── Banner.tsx           # Hero/Banner section
│   ├── Contact.tsx          # Contact form section
│   ├── Experience.tsx       # Work experience section
│   ├── ExperienceCard.tsx   # Individual experience card
│   ├── Footer.tsx           # Footer component
│   ├── ProjectCard.tsx      # Individual project card
│   ├── Projects.tsx         # Projects showcase section
│   ├── Skills.tsx           # Skills display section
│   ├── SkillsInput.tsx      # Skills input component
│   ├── SocialLink.tsx       # Social media links
│   └── Title.tsx            # Section title component
├── public/
│   └── img/
│       └── projects/        # Project images
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

---

## 🎨 Customization

### Update Personal Information

1. **Banner Section**: Edit `components/Banner.tsx`

   - Update your name, title, and introduction
   - Modify hero image or background

2. **About Me**: Edit `components/Aboutme.tsx`

   - Add your bio and professional summary
   - Include your background and interests

3. **Experience**: Edit `components/Experience.tsx`

   - Add your work history and achievements
   - Customize experience cards

4. **Skills**: Edit `components/Skills.tsx`

   - List your technical and soft skills
   - Add skill proficiency levels

5. **Projects**: Edit `components/Projects.tsx`

   - Showcase your best work
   - Add project images to `public/img/projects/`

6. **Contact**: Edit `components/Contact.tsx`
   - Update contact form or information
   - Add social media links

### Styling

- **Global Styles**: Modify `app/globals.css`
- **Tailwind Config**: Customize `tailwind.config.js` for colors, fonts, etc.
- **Component Styles**: Each component uses Tailwind utility classes

### SEO & Metadata

Update metadata in `app/layout.tsx`:

```typescript
export const metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional description",
  // Add more metadata as needed
};
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Your portfolio will be live with automatic HTTPS and global CDN!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/noorjsdivs/portfoliofour)

### Other Deployment Options

- **Netlify**: [Deploy to Netlify](https://www.netlify.com/)
- **AWS Amplify**: [Deploy to AWS](https://aws.amazon.com/amplify/)
- **Cloudflare Pages**: [Deploy to Cloudflare](https://pages.cloudflare.com/)

For more deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

## 📜 Scripts

| Command      | Description                                  |
| ------------ | -------------------------------------------- |
| `pnpm dev`   | Start development server at `localhost:3000` |
| `pnpm build` | Create production build                      |
| `pnpm start` | Start production server                      |
| `pnpm lint`  | Run ESLint for code quality                  |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

If you have any questions or suggestions, feel free to reach out!

**Your Name** - [@yourhandle](https://twitter.com/yourhandle)

Portfolio: [https://yourportfolio.com](https://yourportfolio.com)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel](https://vercel.com) for hosting

---

<div align="center">
  Made with ❤️ using Next.js and Tailwind CSS
  
  ⭐ Star this repo if you found it helpful!
</div>
