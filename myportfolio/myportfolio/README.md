# Silitu Portfolio Website

A modern, responsive personal portfolio website for Silitu, a 3rd year Software Engineering student.

## Features

- **Modern UI/UX**: Clean, professional design with dark theme
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations**: Scroll animations and hover effects using Framer Motion
- **Sticky Navbar**: Navigation that stays visible while scrolling
- **Multiple Sections**:
  - Hero section with introduction and CTA buttons
  - About section with biography and career goals
  - Skills section with animated progress bars
  - Projects section with project cards
  - Contact section with form and contact information
  - Footer with quick links

## Technologies Used

- **React 18**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Installation

1. Install dependencies (use npm, not pnpm):
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

**Note**: On Windows, use `npm` instead of `pnpm` to avoid batch file errors with react-scripts.

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── About.js
│   ├── Contact.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Navbar.js
│   ├── Projects.js
│   └── Skills.js
├── App.js
├── index.css
└── index.js
```

## Customization

- Update personal information in the respective components
- Modify colors in `tailwind.config.js`
- Add or remove projects in `Projects.js`
- Update skills in `Skills.js`
- Change contact information in `Contact.js`

## Contact Information

- **Email**: [your-email@example.com]
- **Phone**: [your-phone-number]
