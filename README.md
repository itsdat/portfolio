# Itsdat — Personal Portfolio

My personal portfolio website — a showcase of my projects, skills, and experience as a Frontend Developer.

🔗 **Live site:** [add your deployed link here]

---

## ✨ Features

- Animated hero section with interactive backgrounds (particles, meteors, wireframe globe)
- Smooth theme switch (light/dark mode)
- Card-based project showcase with tilt & flip interactions
- Skill section with visual highlights
- Contact form section
- Fully responsive layout for desktop and mobile
- Downloadable / viewable CV directly from the site

## 🛠️ Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix-based)
- **Animation:** Custom animated components (particles, meteors, card-tilt, type animation, etc.)

## 📂 Project Structure

```
src/
├── assets/                # Images and static assets
├── components/
│   ├── common/             # Reusable base components (heading, input, social)
│   ├── feature/             # Theme provider and feature-level components
│   ├── layout/              # Navbar and layout components
│   └── ui/                  # UI building blocks (cards, backgrounds, animations)
├── pages/
│   └── home/
│       ├── HomePage.tsx
│       └── sections/         # Hero, About, Skill, Project, Contact sections
├── lib/                    # Utility functions
└── main.tsx                # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/itsdat/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📄 CV

You can view or download my CV directly from the site's `public/` folder or via the "View CV" button on the homepage.

## 📬 Contact

- **Email:** vinhdat20201220@gmail.com
- **LinkedIn:** [linkedin.com/in/dat-vinh-8720b9361](https://linkedin.com/in/dat-vinh-8720b9361)
- **GitHub:** [github.com/itsdat](https://github.com/itsdat)

## 📝 License

This project is open for reference. Feel free to explore the code, but please don't copy the content/assets directly for your own portfolio.