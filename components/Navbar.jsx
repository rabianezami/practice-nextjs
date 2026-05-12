"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {href: "/", label: "Home"},
    {href: "/about", label: "About"},
    {href: "/projects", label: "Projects"},
    {href: "/contact", label: "Contact"}
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <header>
           <div className="container navbar-inner">
             <Link href="/" className="logo">
              Rabia <span>.</span>
             </Link>

             <nav>
                {links.map((link) => {
                    const isActive = pathname === link.href

                    return (
                        <Link key={link.href} href={link.href} className={isActive ? "nav-link active" : "nav-link"}>
                          {link.label}
                        </Link>
                    )
                })}
             </nav>
           </div>
        </header>
    )
}