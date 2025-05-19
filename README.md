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

# 17/04/2025


- Fetching data
https://nextjs.org/docs/app/getting-started/fetching-data

You can fetch data in Server Components using:

The fetch API
An ORM or database

- With the fetch API:

- With an ORM or database

<app/blog/page.tsx>
import { db, posts } from '@/lib/db'

export default async function Page() {
  const allPosts = await db.select().from(posts)
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

- Here I had issue with @/lib/db. I'll check that out later

- Client Components

There are two ways to fetch data in Client Components, using:

React's use hook
A community library like SWR or React Query

<With the use hook>
You can use React's use hook to stream data from the server to client. Start by fetching data in your Server component, and pass the promise to your Client Component as prop:

<app/blog/page.tsx>
import Posts from '@/app/ui/posts
import { Suspense } from 'react'

export default function Page() {
  // Don't await the data fetching function
  const posts = getPosts()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}

Then, in your Client Component, use the use hook to read the promise:

<app/ui/post.tsx> here it is created a folder (ui)
'use client'
import { use } from 'react'

export default function Posts({
  posts,
}: {
  posts: Promise<{ id: string; title: string }[]>
}) {
  const allPosts = use(posts)

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

- Community libraries

You can use a community library like SWR or React Query to fetch data in Client Components. These libraries have their own semantics for caching, streaming, and other features. For example, with SWR:

<app/blog/page.tsx>
'use client'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    '<https://api.vercel.app/blog>',
    fetcher
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

- STREAMING
* I did not check that out. It seems way to much trouble


# How to update data
Creating Server Functions

A Server Function can be defined by using the use server directive. You can place the directive at the top of an asynchronous function to mark the function as a Server Function, or at the top of a separate file to mark all exports of that file.

<app/lib/action.ts>
export async function createPost(formData: FormData) {
  'use server'
  const title = formData.get('title')
  const content = formData.get('content')

  // Update data
  // Revalidate cache
}

export async function deletePost(formData: FormData) {
  'use server'
  const id = formData.get('id')

  // Update data
  // Revalidate cache
}

- Server Components

Server Functions can be inlined in Server Components by adding the "use server" directive to the top of the function body:
export default function Page() {
  // Server Action
  async function createPost(formData: FormData) {
    'use server'
    // ...
  }

  return <></>
}

Client Components

It's not possible to define Server Functions in Client Components. However, you can invoke them in Client Components by importing them from a file that has the "use server" directive at the top of it:
<app/actions.ts>
'use server'

export async function createPost() {}

<app/ui/buttons.tsx>
'use client'

import { createPost } from '@/app/actions'

export function Button() {
  return <button formAction={createPost}>Create</button>
}

- Invoking Server Functions

There are two main ways you can invoke a Server Function:

1. Forms in Server and Client Components
2. Event Handlers in Client Components

- Forms

React extends the HTML <form> element to allow Server Function to be invoked with the HTML action prop.

When invoked in a form, the function automatically receives the FormData object. You can extract the data using the native FormData methods:

<app/ui/form.tsx>
import { createPost } from '@/app/actions'

export function Form() {
  return (
    <form action={createPost}>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button type="submit">Create</button>
    </form>
  )
}

<app/actions.ts>
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')

  // Update data
  // Revalidate cache
}

- Event Handlers

You can invoke a Server Function in a Client Component by using event handlers such as onClick.

<app/like-button.tsx>
'use client'

import { incrementLike } from './actions'
import { useState } from 'react'

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)

  return (
    <div>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>
    </div>
  )
}

# 19/05/2025

Starting again after the holidays in Cuba

- How to handle errors

Errors can be divided into two categories: expected errors and uncaught exceptions. This page will walk you through how you can handle these errors in your Next.js application.

Handling expected errors

Expected errors are those that can occur during the normal operation of the application, such as those from server-side form validation or failed requests. These errors should be handled explicitly and returned to the client.

I don't know what the hell is not working... I got the idea anyway

app/actions.ts

'use server'

export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')

  const res = await fetch('<https://api.vercel.app/posts>', {
    method: 'POST',
    body: { title, content },
  })
  const json = await res.json()

  if (!res.ok) {
    return { message: 'Failed to create post' }
  }
}


app/ui/form.tsx:

'use client'

import { useActionState } from 'react'
import { createPost } from '@/app/actions'

const initialState = {
  message: '',
}

export function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState)

  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" required />
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button disabled={pending}>Create Post</button>
    </form>
  )
}


- Server Components

When fetching data inside of a Server Component, you can use the response to conditionally render an error message or redirect.

export default async function Page() {
  const res = await fetch(`https://...`)
  const data = await res.json()

  if (!res.ok) {
    return 'There was an error.'
  }

  return '...'
}


- Not found

You can call the notFound function within a route segment and use the not-found.js file to show a 404 UI.

app/blog/[slug]page.tsx
import { getPostBySlug } from '@/lib/posts'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <div>{post.title}</div>
}


app/blog/not-found.tsx
export default function NotFound() {
  return <div>404 - Page Not Found</div>
}


- Handling uncaught exceptions

Uncaught exceptions are unexpected errors that indicate bugs or issues that should not occur during the normal flow of your application. These should be handled by throwing errors, which will then be caught by error boundaries.

Nested error boundaries

Next.js uses error boundaries to handle uncaught exceptions. Error boundaries catch errors in their child components and display a fallback UI instead of the component tree that crashed.

Create an error boundary by adding an error.js file inside a route segment and exporting a React component:

app/dashboard/error.tsx

'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}


* This segment didn't quite work. I will give a try in another moment. I am a bit rosty
