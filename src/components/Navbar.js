import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    return (
        <nav
            className="flex justify-between item-center bg-primary text-black shadow-sm font-mono h-16 w-full"
            role="navigation"
        >
            <div
                className="px-4 cursor-pointer md:hidden"
                onClick={toggle}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
            <div className="pr-8 md:block hidden text-white w-full">
                <div className="flex justify-center w-full">
                    <Link className="p-4" to="/">Home</Link>
                    <Link className="p-4" to="/leclub">Le club</Link>
                    <Link className="p-4" to="/equipes">Nos équipes</Link>
                    {/* LOGO */}
                    <Link className="mt-2 mx-4" to="/">
                        <img className="h-12 w-12 inline" src="logo/blanc.png" />
                    </Link>

                    <Link className="p-4" to="/boutique">Boutique</Link>
                    <Link className="p-4" to="/licences">Licences</Link>
                    <Link className="p-4" to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
