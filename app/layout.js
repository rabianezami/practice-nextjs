import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css"

export const metadata = {
  title: "Rabia Portfolio",
  description: "A multi-page portfolio website built with next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}