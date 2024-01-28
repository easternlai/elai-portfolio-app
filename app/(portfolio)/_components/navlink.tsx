"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    className: string;
}



const NavLink: React.FC<NavLinkProps> = ({ href, className, children }) => {
    const pathname = usePathname();

    console.log("pathname", pathname)
    console.log("href", href)
    return (
        <Link href={href} className={cn(className, pathname == href ? "font-bold" : "")}>
            {children}
        </Link>
    )
}

export default NavLink