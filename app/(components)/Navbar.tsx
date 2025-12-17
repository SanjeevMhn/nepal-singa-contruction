'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const navlinks = [
        {
            id: 1,
            link: "/",
            name: "Home"
        },
        {
            id: 2, 
            link: "services",
            name: "Services"
        },
        {
            id: 3,
            link: "projects",
            name: "Projects"
        },
        {
            id: 4,
            link: "about",
            name: "About Us"
        },
        {
            id: 5,
            link: "contact",
            name: "Contact"
        }
    ]

    const pathName = usePathname()

    return (

        <nav className="main-nav bg-white">
            <div className="wrapper flex justify-between items-center py-[1.2rem]">
                <Link href={'/'} className="flex items-center gap-[0.5rem]">
                    <span className="icon-container text-[2.5rem]">|||</span>
                    <span className="company-name text-[2.8rem] font-bold text-neutral-900">Company</span>
                </Link>
                <ul className="nav-list flex items-center gap-[2rem]">
                    {navlinks.map(link => (
                        <li className="list-item" key={link.id}>
                            <Link href={link.link} className={`text-[1.8rem] py-[0.8rem] font-medium text-neutral-800 ${pathName == link.link ? 'active-link' : ''}`}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar