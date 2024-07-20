import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = "Baledev - The Saas for Technician",
  description = "Baledev is a boilerplate laravel framework with sanctum as a backend and next.js as frontend.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@sukahermandeh"
    },
    icons,
    metadataBase: new URL('https://baledev.com'),
    // themeColor: '#FFF',
    // ...(noIndex && {
    //   robots: {
    //     index: false,
    //     follow: false
    //   }
    // })
  }
}
