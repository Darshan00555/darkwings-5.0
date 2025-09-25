import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AuthProvider } from "@/components/auth-provider"
import { Watermark } from "@/components/watermark"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "DARKWING's - Engineering the Future of the Web",
  description:
    "A team of 6 freelance developers providing services in frontend, backend, and full-stack web development.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${poppins.variable} ${roboto.variable}`}>
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Watermark />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
