# A11i Detector Landing Page

A modern, accessible landing page for A11i Detector - an intelligent web accessibility tool that automatically detects and reports accessibility issues on websites.

## About A11i Detector

A11i Detector is your expert companion for web accessibility compliance. This powerful tool:

- **Automatically scans websites** for accessibility issues
- **Generates detailed reports** highlighting problems and solutions
- **Ensures compliance** with European Accessibility Act (EAA) and WCAG guidelines
- **Acts as an accessibility expert** to help developers and organizations create inclusive web experiences

The landing page itself demonstrates best practices in web accessibility, featuring skip links, semantic HTML, proper ARIA labels, and responsive design that works for all users.

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons for the interface

## Features

- Fully responsive design
- Accessibility-first approach (WCAG 2.2 AA compliant)
- Modern gradient backgrounds and animations
- Contact forms with validation
- Testimonial sections
- Feature highlights
- Clean, professional UI

## Installation

```bash
npm install
```

## Development

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Build the project for production:

```bash
npm run build
```

## Preview

Preview the production build locally:

```bash
npm run preview
```

```bash
npm run deploy
```

## Project Structure

```text
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Main hero section
│   ├── Features.jsx    # Feature showcase
│   ├── Audience.jsx    # Target audience section
│   ├── Testimonials.jsx # User testimonials
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Site footer
├── css/               # Styles organized by component
│   ├── base/          # Base styles, variables, responsive
│   ├── components/    # Component-specific styles
│   └── sections/      # Section-specific styles
├── App.jsx           # Main application component
└── main.jsx         # Application entry point
```

## License

MIT License - see package.json for details
