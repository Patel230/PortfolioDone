# Portfolio - Lakshman Patel

> **Premium 3D Portfolio Website for Python Backend Developer**

A stunning, scroll-based 3D portfolio website featuring glassmorphism design, premium animations, and interactive 3D elements. Built with Next.js 16, Three.js, and cutting-edge web technologies.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-Latest-black?logo=three.js)](https://threejs.org/)

## ✨ Features

### 🎨 Premium Design
- **Glassmorphism Theme** - Modern frosted glass aesthetic with backdrop blur
- **3D Tilt Effects** - Interactive cards with perspective-aware tilt animations
- **Animated Gradient Borders** - Shifting color borders on hover
- **Light Sweep Animations** - Elegant light effects across interactive elements
- **Gemini Color Scheme** - Beautiful blue, purple, and pink gradients

### 🌟 Interactive 3D
- **Scroll-Controlled Camera** - Smooth camera transitions as you scroll
- **Dynamic 3D Scenes** - Unique 3D elements for each section
  - Hero: Distorted sphere with orbiting particles
  - About: Floating skill cubes
  - Projects: Animated project cards
  - Contact: Rotating torus with spheres
- **Responsive 3D** - Optimized for all screen sizes

### 🚀 Advanced Features
- **Micro-interactions** - Smooth hover effects with scale, lift, and rotation
- **Section Navigation** - Quick jump to any section with indicators
- **Scroll Progress Bar** - Gradient progress indicator
- **Glass Navigation** - Premium navigation bar with blur effects
- **Mobile Responsive** - Fully optimized for mobile devices

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development

### 3D Graphics
- **Three.js** - WebGL 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful R3F helpers and abstractions

### Animation
- **GSAP** - Professional-grade scroll and camera animations
- **Framer Motion** - React animation library for UI elements

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Premium glassmorphism and gradient effects

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/Patel230/PortfolioDone.git
cd PortfolioDone

# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   ├── globals.css             # Global styles & premium effects
│   └── favicon.ico
├── components/
│   ├── 3d/
│   │   ├── Scene.tsx           # Main 3D canvas wrapper
│   │   ├── ScrollCamera.tsx    # Scroll-controlled camera
│   │   ├── HeroObjects.tsx     # Hero section 3D elements
│   │   ├── AboutObjects.tsx    # About section 3D cubes
│   │   ├── ProjectsObjects.tsx # Projects 3D cards
│   │   └── ContactObjects.tsx  # Contact section 3D torus
│   ├── sections/
│   │   ├── HeroSection.tsx     # Landing section
│   │   ├── AboutSection.tsx    # About & skills section
│   │   ├── ProjectsSection.tsx # Projects showcase
│   │   └── ContactSection.tsx  # Contact information
│   └── ui/
│       ├── Logo.tsx            # 3D hexagon logo
│       ├── Navigation.tsx      # Glass navigation bar
│       ├── ScrollProgress.tsx  # Scroll indicator
│       └── SectionIndicators.tsx # Section dots navigation
├── lib/
│   └── constants.ts            # Content & configuration
├── public/
│   └── (static assets)
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `lib/constants.ts` to customize:

```typescript
export const CONTENT = {
  hero: {
    title: "Your Name",
    subtitle: "Your Title",
  },
  about: {
    description: "Your bio...",
    skills: ["Skill 1", "Skill 2", ...],
  },
  projects: [
    {
      id: 1,
      title: "Project Name",
      description: "Project description",
      tech: ["Tech 1", "Tech 2"],
      color: "#hexcolor",
    },
  ],
  contact: {
    email: "your@email.com",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile",
    },
  },
};
```

### Modify Camera Positions

Adjust `CAMERA_POSITIONS` in `lib/constants.ts`:

```typescript
export const CAMERA_POSITIONS = [
  { x: 0, y: 0, z: 5 },    // Hero
  { x: -3, y: 2, z: 3 },   // About
  { x: 3, y: 1, z: 4 },    // Projects
  { x: 0, y: -1, z: 6 },   // Contact
];
```

### Change Color Scheme

Update colors in `app/globals.css`:

```css
:root {
  --glow-blue: rgba(66, 133, 244, 0.5);
  --glow-purple: rgba(142, 68, 173, 0.5);
  --glow-pink: rgba(219, 68, 145, 0.5);
}
```

### Customize 3D Elements

Modify files in `components/3d/`:
- Change geometries, materials, and colors
- Adjust animation speeds and effects
- Add new 3D models with `useGLTF`

## 🎯 Key Features Explained

### Glass Theme with Tilt Effects

All interactive elements feature:
- Semi-transparent backgrounds with backdrop blur
- 3D perspective tilt on hover
- Gradient color overlays
- Light sweep animations
- Multi-layered shadows

### Premium Card Animations

Cards include:
- Animated gradient borders
- Color saturation boost
- Smooth scale and lift effects
- Alternating tilt directions
- Gemini gradient highlights

### Scroll-Controlled 3D Camera

The camera smoothly transitions between sections using GSAP:
1. Scroll position triggers camera movement
2. Smooth interpolation between predefined positions
3. Each section has unique camera angle and distance

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy .next folder
netlify deploy --prod
```

### Other Platforms

1. Build the project: `npm run build`
2. Upload the `.next` folder to your hosting provider
3. Set Node.js version to 18+
4. Configure start command: `npm start`

## 📱 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

**Requirements**:
- WebGL support
- JavaScript enabled
- Modern browser (ES2020+)

## ⚡ Performance Optimizations

- Client-side only 3D rendering (SSR disabled for Three.js)
- Efficient scene management with proper cleanup
- Lazy loading with dynamic imports
- Optimized Framer Motion animations
- React memoization for expensive components
- Debounced scroll handlers

## 🎓 Skills Showcased

This portfolio demonstrates expertise in:

### Python Backend Development
- Python, Flask, Django & FastAPI
- RESTful API & GraphQL
- System Design (LLD & HLD)
- Microservices Architecture
- Database Management (PostgreSQL, MySQL, MongoDB)
- Redis & Caching Strategies
- AWS Cloud Services
- Docker & Kubernetes
- CI/CD & DevOps

### Artificial Intelligence
- Machine Learning & Deep Learning
- Natural Language Processing (NLP)
- Computer Vision
- LangChain & LLM Integration
- ML Model Deployment & MLOps
- OpenAI API & GPT Integration

### Infrastructure & Tools
- Message Queues (RabbitMQ, Kafka)
- WebSockets & Real-time APIs
- OAuth2 & JWT Authentication
- Linux/Unix Server Management
- Monitoring (Grafana, Telegraf, Prometheus)

## 📂 Featured Projects

1. **Smart Autonomous Tractor** - Autonomous farming solution with critical APIs and cloud infrastructure
2. **Tractor One-plus Migration System** - Migration and integration modules for tractor systems
3. **Verizon SIM Card API Integration** - API management for IoT device connectivity
4. **OpenVPN Integration** - Secure VPN infrastructure with authentication system
5. **Smart Power Grid** - IoT-based smart grid monitoring and energy management

## 👨‍💻 About

**Lakshman Patel**
Python Backend Developer | Software Engineer

- 3+ years of experience in backend development
- M.Tech in Information Security from ABV-IIITM Gwalior
- Previously at Monarch Tractor
- Specializing in Python, Cloud Infrastructure, and AI/ML

## 📞 Contact

- 📧 Email: lakshmanp230@gmail.com
- 💼 LinkedIn: [linkedin.com/in/lakshman-patel](https://linkedin.com/in/lakshman-patel)
- 💻 GitHub: [github.com/Patel230](https://github.com/Patel230)
- 📍 Location: Gurgaon, India

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Three.js community for 3D capabilities
- Framer Motion for smooth animations
- GSAP for professional-grade scroll effects

---

**Built with ❤️ with Technology**

© 2025 Lakshman Patel. All rights reserved.
