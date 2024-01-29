import Image from "next/image"
import Link from "next/link"
import NavLink from "./navlink"

export const Header = () => {
    return (
        <div className="flex space-x-14">
            <div>
                <Image className="rounded-full" src="/profile.png" width={150} height={100} alt="Organization" />
            </div>

            <div className="flex-col">
                <div className="flex">
                    <NavLink href="/" className="pb-5 border-b-8 border-[#4B6CC1] text-4xl font-bold mt-5">EASTERN LAI</NavLink>
                </div>
                <nav className="flex space-x-10 mt-12 text-3xl">
                    <NavLink href="/career" className="">career</NavLink>
                    <NavLink href="/tech" className="">tech stack </NavLink>
                    <NavLink href="/about" className="">about me</NavLink>
                </nav>
            </div>
        </div>
    )
}