"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navlinks = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    // {
    //   id: 2,
    //   link: "services",
    //   name: "Services",
    // },
    {
      id: 3,
      link: "projects",
      name: "Projects",
    },
    {
      id: 4,
      link: "about",
      name: "About Us",
    },
    {
      id: 5,
      link: "contact",
      name: "Contact",
    },
  ];

  const pathName = usePathname();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (
        scrollRef.current > 0 &&
        currentScroll > 0 &&
        currentScroll < scrollRef.current
      ) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }

      scrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`main-nav bg-white shadow-xl ${showMenu ? "fixed-menu-scroll" : ""}`}>
      <div className="wrapper flex justify-between items-center py-[1.2rem]">
        <Link href={"/"} className="flex items-center gap-[0.5rem]">
          <span className="icon-container text-[2.5rem]">|||</span>
          <span className="company-name text-[2.8rem] font-bold text-neutral-900">
            Company
          </span>
        </Link>
        <button type="button" className="btn cursor-pointer md:hidden">
          <span className="icon-container w-[3.5rem] h-[3.5rem] flex items-center justify-center">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
          </span>
        </button>
        <ul className="nav-list hidden md:flex items-center gap-[2rem] ">
          {navlinks.map((link) => (
            <li className="list-item" key={link.id}>
              <Link
                href={link.link}
                className={`text-[1.8rem] py-[0.8rem] font-medium text-neutral-800 ${
                  pathName == link.link ? "active-link" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
