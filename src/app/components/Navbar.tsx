"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50 w-full", className)}>
      <nav className="bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" className="w-16 h-16" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-center flex-grow">
            <Menu setActive={setActive} className="flex lg:space-x-4 flex-row ">
              <MenuItem
                setActive={setActive}
                active={active}
                item="What we do >"
              >
                <div className="flex justify-around space-y-6 m-2 mx-10 lg:space-x-10 ">
                  <div className="flex flex-col lg:space-y-4 py-7 ">
                    <p className="mb-2 text-xl text-slate-400 hover:text-yellow-400 hover:cursor-text">
                      What we do<span>➡️</span>
                    </p>
                    <HoveredLink href="/service">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Services
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/research">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Research & Innovations
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/security">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Security
                      </span>
                    </HoveredLink>
                  </div>
                  <div className="flex flex-col space-y-4 pt-7">
                    <HoveredLink href="">
                      <span className="text-sm text-slate-400"></span>
                    </HoveredLink>
                    <HoveredLink href="/learning">
                      <span className="hover:border-b-4 animate-in border-neutral-100 border-y-gray-400 hover:text-blue-400">
                        Learning
                      </span>
                    </HoveredLink>
                  </div>
                </div>
              </MenuItem>


              <Link href="/whatweThink" className="ml-2">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="What we think"
                />

              </Link>

              <MenuItem
                setActive={setActive}
                active={active}
                item="What we are >"
              >
                <div className="flex justify-around space-y-6 lg:space-x-10 p-10 rounded">
                  <div className="flex flex-col space-y-4 ">
                    <p className="mb-2 text-xl text-slate-400 hover:text-yellow-400 hover:cursor-pointer">
                      About Arohi Software <span>➡️</span>
                    </p>
                    <HoveredLink href="/courses">
                      <span className="text-sm text-slate-400">
                        Our organization
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/leaders">
                      <span className="hover:border-b-4 hover:text-blue-400">
                        Leaders
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/location">
                      <span className="hover:border-b-4 hover:text-blue-400">
                        Locations
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/gallery">
                      <span className="hover:border-b-4 hover:text-blue-400">
                        Gallery
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/events">
                      <span className="hover:border-b-4 hover:text-blue-400">
                        Events
                      </span>
                    </HoveredLink>
                  </div>
                  <div className="flex flex-col space-y-4 pt-7">
                    <HoveredLink href="/courses">
                      <span className="text-sm text-slate-400">
                        Media & Investors
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/media">
                      <span className="hover:border-b-4 animate-in border-neutral-100 border-y-gray-400 hover:text-blue-400">
                        Media Relations
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/investor">
                      <span className="hover:border-b-4 hover:text-blue-400">
                        Investor Relations
                      </span>
                    </HoveredLink>
                  </div>
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Careers >">
                <div className="flex justify-around space-y-6 space-x-10 p-10 rounded">
                  <div className="flex flex-col space-y-4">
                    <p className="mb-2 text-xl text-slate-400 hover:text-yellow-400 hover:cursor-text">
                      Careers home <span>➡️</span>
                    </p>
                    <HoveredLink href="/courses">
                      <span className="text-sm text-slate-400 cursor-text">
                        Training & Internships
                      </span>
                    </HoveredLink>

                    <HoveredLink href="/courses">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Training & Development
                      </span>
                    </HoveredLink>

                    <HoveredLink href="/experienceProf">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Experience Professionals
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/worken">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Work environment
                      </span>
                    </HoveredLink>
                  </div>
                  <div className="flex flex-col space-y-4 pt-7">
                    <HoveredLink href="/courses">
                      <span className="text-sm text-slate-400 cursor-text">
                        Find Jobs
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/jobs">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Search all Jobs
                      </span>
                    </HoveredLink>

                    <HoveredLink href="/contact">
                      <span className="text-sm pt-2 text-slate-400 hover:text-yellow-500 cursor-pointer">
                        Contact Us
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/faq">
                      <span className="text-sm text-slate-400 hover:text-yellow-500 cursor-pointer">
                        FAQ
                      </span>
                    </HoveredLink>
                  </div>
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* Login button */}
          <div className="hidden lg:block px-8">
            <Link href="/login">
              <button className="text-white focus:outline-none">Login</button>
            </Link>
          </div>

          {/* Search Icon and Burger icon for small screens */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block">
              <button
                className="text-white focus:outline-none"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zM21 21l-4.35-4.35"
                  />
                </svg>
              </button>
            </div>

            <div className="block lg:hidden space-x-4">
              <Link href="/login">
                <button className="text-white focus:outline-none">Login</button>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <Menu setActive={setActive} className="flex flex-col space-y-4">
              <MenuItem setActive={setActive} active={active} item="What we do">
                <div className="flex flex-col space-y-4 py-4">
                  <HoveredLink href="/service" onClick={handleLinkClick}>
                    Services
                  </HoveredLink>
                  <HoveredLink href="/research" onClick={handleLinkClick}>
                    Research & Innovations
                  </HoveredLink>
                  <HoveredLink href="/security" onClick={handleLinkClick}>
                    Security
                  </HoveredLink>
                  <HoveredLink href="/learning" onClick={handleLinkClick}>
                    Learning
                  </HoveredLink>
                </div>
              </MenuItem>
              <Link href="/whatweThink">
                <div onClick={handleLinkClick}>
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item="What we think"

                  />
                </div>
              </Link>
              <MenuItem setActive={setActive} active={active} item="What we are">
                <div className="flex flex-col space-y-4 py-4">
                  <HoveredLink href="/courses" onClick={handleLinkClick}>
                    Our organization
                  </HoveredLink>
                  <HoveredLink href="/leaders" onClick={handleLinkClick}>
                    Leaders
                  </HoveredLink>
                  <HoveredLink href="/location" onClick={handleLinkClick}>
                    Locations
                  </HoveredLink>
                  <HoveredLink href="/gallery" onClick={handleLinkClick}>
                    Gallery
                  </HoveredLink>
                  <HoveredLink href="/events" onClick={handleLinkClick}>
                    Events
                  </HoveredLink>
                  <HoveredLink href="/media" onClick={handleLinkClick}>
                    Media Relations
                  </HoveredLink>
                  <HoveredLink href="/investor" onClick={handleLinkClick}>
                    Investor Relations
                  </HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Careers">
                <div className="flex flex-col space-y-4 py-4">
                  <HoveredLink href="/courses" onClick={handleLinkClick}>
                    Training & Internships
                  </HoveredLink>
                  <HoveredLink href="/courses" onClick={handleLinkClick}>
                    Training & Development
                  </HoveredLink>
                  <HoveredLink href="/experienceProf" onClick={handleLinkClick}>
                    Experience Professionals
                  </HoveredLink>
                  <HoveredLink href="/worken" onClick={handleLinkClick}>
                    Work environment
                  </HoveredLink>
                  <HoveredLink href="/jobs" onClick={handleLinkClick}>
                    Search all Jobs
                  </HoveredLink>
                  <HoveredLink href="/contact" onClick={handleLinkClick}>
                    Contact Us
                  </HoveredLink>
                  <HoveredLink href="/faq" onClick={handleLinkClick}>
                    FAQ
                  </HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
