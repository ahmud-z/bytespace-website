// components/Navbar.jsx

import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="relative z-50 ">
            <div className="mx-auto flex h-23 max-w-6xl items-center justify-between px-6">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to={"/"} className="cursor-pointer">
                        <img src="company_logo.png" alt="" />
                    </Link>
                </div>

                {/* Navigation */}
                <div className="hidden items-center gap-8 text-sm md:flex">
                    <a href="#" className="text-white">
                        Home
                    </a>

                    <a href="#" className="text-white/70 hover:text-white">
                        Courses
                    </a>

                    <a href="#" className="text-white/70 hover:text-white">
                        Creators
                    </a>
                </div>

                {/* Right */}
                <div className="flex items-center gap-7 text-sm">
                    <button className="hidden md:block">
                        Sign In
                    </button>

                    <button>
                        Join Us
                    </button>

                    <span>
                        <img src="shopping-bag-icon.png" alt="" />
                    </span>
                </div>

            </div>
        </nav>
    );
}