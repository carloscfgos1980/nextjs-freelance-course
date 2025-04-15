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
