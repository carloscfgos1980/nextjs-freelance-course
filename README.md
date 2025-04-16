# 15/04/2025

Afeter a few monthts without programming. I am starting today. Yesterday I spend nearly 10 hpurs just updating the system

- Following offitial website instructions

https://nextjs.org/docs/app/getting-started/project-structure


1. Checkout pic: Nextjs-folder organization

2. All the statics are placed in "public" folder. it is imported like this"

import Image from "next/image";

        <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />

3. Check layout.tsx:
3.1 -  Apply fonts from google"

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

3.2 - Web metadata:
export const metadata: Metadata = {
  title: "Example 1",
  description: "Trying out Nextjs",
};

4. HOW TO CREATE PAGES:
https://nextjs.org/docs/app/getting-started/layouts-and-pages

4.1 - Creating a page (page.tsx)
4.2 - Creating a layout
4.3 - Creating a nested route (create a folder and place there page tsx and layout.tsx)
4.4 - Nesting layouts
4.5 -Linking between pages

5. HOW TO OPTIMIZE IAMGES AND FONTS
https://nextjs.org/docs/app/getting-started/images-and-fonts


5.1 - Local images (The method they explain did not work so I copied the script from the high level "page.tsx")
5.2 Remote images
    <Image
      src="https://c8.alamy.com/comp/DREYNM/havana-cuba-old-classic-cars-in-the-street-in-downtown-havana-DREYNM.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    />

5.3 - Confure next.config.ts so it will allow me to import and image from internet

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
        port: '',
        pathname: '/comp/**',
        search: '',
      },
    ],
  },
};

- <hostname> will contain the URL and <pathname> follow by ** wich means includes everything comes afterwards

# 15/04/2025

- Optimizing fonts:

import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  )
}


- Local fonts:
To use a local font, import your font from next/font/local and specify the src of your local font file

import localFont from 'next/font/local'

const myFont = localFont({
  src: './my-font.woff2',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}

- If you want to use multiple files for a single font family, src can be an array:

const roboto = localFont({
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

# CSS

- Next.js provides several ways to use CSS in your application, including:

CSS Modules
Global CSS
Tailwind CSS
Sass
CSS-in-JS
External Stylesheets

- CSS Modules. Example:

<app/blog/styles.module.css>
.blog {
  padding: 24px;
}

<app/blog/page.tsx>
import styles from './styles.module.css'

export default function Page({ children }: { children: React.ReactNode }) {
  return <main className={styles.blog}>{children}</main>
}

- Global CSS
You can use global CSS to apply styles across your application.

To use global styles, create a app/global.css file and import it in the root layout to apply the styles to every route in your application. Example:

- <app/global.css>
body {
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}

- <app/layout.tsx>
// These styles apply to every route in the application
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

- Tailwind CSS
Installing Tailwind

To start using Tailwind, install the necessary Tailwind CSS packages:
npm install tailwindcss @tailwindcss/postcss postcss

- Configuring Tailwind:
Create a postcss.config.mjs file in the root of your project and add the @tailwindcss/postcss plugin to your PostCSS configuration:

/** @type {import('tailwindcss').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

* This file was already there in the installation and is it slightly different from the tutorial...

- Using Tailwind
Add the Tailwind directives to your Global Stylesheet:

<app/globals.css>
@import 'tailwindcss';

Then, import the styles in the root layout:
<app/layout.tsx>
// These styles apply to every route in the application
import './globals.css'

- You can then start writing Tailwind's utility classes in your application.
<app/page.tsx>
export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
}

- Sass
Next.js integrates with Sass using both the .scss and .sass extensions and syntax.

You can also use component-level Sass via CSS Modules and the .module.scssor .module.sass extension.

Installing Sass

To start using Sass, install the sass package:
npm install --save-dev sass

- CSS-in-JS
Warning: CSS-in-JS libraries which require runtime JavaScript are not currently supported in React Server Components. Using CSS-in-JS with newer React features like Server Components and Streaming requires library authors to support the latest version of React.

If you want to style Server Components, we recommend using CSS Modules or other solutions that output CSS files, like Tailwind CSS.

* I did not copy the configuration of because I don't think I will be using that any time soon!
