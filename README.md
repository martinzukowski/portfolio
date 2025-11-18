# Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and CSS Modules. Features automatic GitHub repository integration and resume download.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 💼 Portfolio showcase section with GitHub integration
- 📄 Resume download section
- 📧 Contact form
- 🎭 Smooth animations and transitions
- 🔗 Automatic project fetching from GitHub

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, configure your personal information in `config.ts`:

```typescript
export const config = {
  githubUsername: 'your-github-username', // Your GitHub username
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    email: 'your.email@example.com',
    phone: '+1 (234) 567-890',
    location: 'Your City, Country',
  },
  social: {
    github: 'https://github.com/your-github-username',
    linkedin: 'https://linkedin.com/in/your-profile',
    twitter: 'https://twitter.com/your-handle',
  },
}
```

Add your resume PDF to the `public/` folder as `resume.pdf`.

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### 1. Personal Information
Edit `config.ts` to update:
- Your name, title, email, phone, and location
- GitHub username (for automatic project fetching)
- Social media links

### 2. Resume
- Place your resume PDF in the `public/` folder as `resume.pdf`
- The resume will be automatically available for download

### 3. Projects
- Projects are automatically fetched from your GitHub repositories
- The component extracts tech stack from repository descriptions and topics
- If GitHub fetch fails, fallback projects are displayed
- You can manually edit projects in `components/Projects.tsx` if needed

### 4. Skills
Edit `components/Skills.tsx` to update your skills and proficiency levels.

### 5. About Section
Edit `components/About.tsx` to add your bio and statistics.

### 6. Styling
Modify the CSS modules in each component to match your preferred color scheme and design. Color variables are defined in `app/globals.css`.

### 7. Images
Replace the placeholder SVGs with your own images or photos in the Hero section.

## GitHub Integration

The website automatically fetches your GitHub repositories and displays them as projects. To enable this:

1. Set your GitHub username in `config.ts`
2. Make sure your repositories have:
   - Descriptive names and descriptions
   - Topics/tags for better tech stack detection
   - Homepage URLs if you have live demos

The GitHub API is called server-side and results are cached for 1 hour.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This website can be easily deployed on platforms like:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any hosting service that supports Node.js

When deploying, make sure:
- Your resume PDF is in the `public/` folder
- Your GitHub username is correctly set in `config.ts`
- Environment variables are configured if needed

## License

MIT

