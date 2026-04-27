# Personal Website

This is a personal website intended for showing information for someone. The site is built with Next.js and Tailwind CSS and showcases profile, expertise, experience, track records, and Markdown-managed content.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Content Management](#content-management)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hazubeep/growskill.git
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

## Usage

To start the development server, run the following command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build the application for production, run the following command:

```bash
pnpm build
```

To start the production server, run the following command:

```bash
pnpm start
```

## Folder Structure

The folder structure of this project is as follows:

```
/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AboutSection.tsx
│   ├── AudienceSection.tsx
│   ├── FasilitasSection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ModulSection.tsx
│   ├── Navbar.tsx
│   ├── PricingSection.tsx
│   └── testimoni.tsx
├── contents/
│   ├── about.md
│   ├── audience.md
│   ├── fasilitas.md
│   ├── footer.md
│   ├── hero.md
│   ├── modul.md
│   ├── pricing.md
│   └── testimoni.md
├── lib/
│   ├── data.ts
│   └── markdown.ts
├── public/
│   ├── admin/
│   │   ├── config.yml
│   │   └── index.html
│   └── images/
│       └── uploads/
├── scripts/
│   └── verify-all-data.ts
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
├── SEO_GUIDE.md
└── tsconfig.json
```

- `app/`: Contains the Next.js application entrypoints and global styles.
- `components/`: Contains reusable UI components used across the homepage.
- `contents/`: Contains Markdown content files for the website sections.
- `lib/`: Contains helper utilities and data processing functions.
- `public/`: Contains static assets and Decap CMS configuration.
- `scripts/`: Contains helper scripts for data validation.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building server-side rendered and static websites.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Parse front matter from Markdown content.
- [Decap CMS](https://decapcms.org/) - Git-based content management system for static site generators.

## Content Management

The content of this website is managed using [Decap CMS](https://decapcms.org/). The CMS configuration file is located at `public/admin/config.yml`, and the editable section files are stored under `contents/`.

### Running Locally

1. Ensure the CMS local backend is enabled in `public/admin/config.yml`:

   ```yaml
   local_backend: true
   ```

2. Start the local CMS server:

   ```bash
   pnpm cms
   ```

3. Access the CMS at `http://localhost:3000/admin/index.html`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request with any improvements or new features.

## License

This project is licensed under the terms of the repository owner's chosen license. Replace this section with the specific license used for the project.
