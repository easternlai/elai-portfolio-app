import Image from "next/image"
import NavLink from "./navlink"
import { Rubik } from "next/font/google"
import { cn } from "@/lib/utils"
const headingFont = Rubik({
    subsets: ["latin"],
    weight: [
        "300",
        "400",
        "500",
        "600",
        "700",
        "800"
    ]
})
export const Header = () => {
    return (
        <div className="flex space-x-14 mb-12">
            <div>
                <Image className="rounded-full" src="/profile.png" width={150} height={100} alt="Organization" />
            </div>

            <div className={cn(headingFont.className, "flex-col")}>
                <div className="flex">
                    <NavLink href="/" className="pb-3 border-b-8 border-[#4B6CC1] text-4xl font-bold mt-4">EASTERN LAI</NavLink>
                </div>
                <nav className="flex space-x-10 mt-8 text-3xl">
                    <NavLink href="/career" className="">Career</NavLink>
                    <NavLink href="/tech" className="">Tech Stack </NavLink>
                    <NavLink href="/about" className="">About Me</NavLink>
                </nav>
            </div>
        </div>
    )
}