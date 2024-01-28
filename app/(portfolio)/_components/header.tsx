import Image from "next/image"
import Link from "next/link"
import NavLink from "./navlink"

export const Header = () => {
    return (
        <div className="flex space-x-24">
            <Image className="rounded-full" src="/profile.png" width={150} height={100} alt="Organization" />
            <div className="flex-col">
                <div>Eastern Lai</div>
                <nav className="flex space-x-4">
                    <NavLink href="/career" className="">career</NavLink>
                    <NavLink href="/tech" className="">tech stack </NavLink>
                    <NavLink href="/about" className="">about me</NavLink>
                </nav>
            </div>
        </div>
    )
}