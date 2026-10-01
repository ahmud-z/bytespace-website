import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative z-50">
            <div className="section-container flex h-23 items-center justify-between px-6">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="cursor-pointer">
                        <img
                            src="/brand-logo/ByteSpaceLogoWhite.png"
                            alt="ByteSpace"
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-8 text-sm md:flex lg:text-base">
                    <Link to="#" className="text-white">
                        Home
                    </Link>

                    <Link
                        to="#"
                        className="text-white/70 hover:text-white"
                    >
                        Courses
                    </Link>

                    <Link
                        to="#"
                        className="text-white/70 hover:text-white"
                    >
                        Creators
                    </Link>
                </div>

                {/* Desktop Right Side */}
                <div className="hidden items-center gap-7 text-sm text-white/70 md:flex lg:text-base">
                    <Link
                        className="hover:text-white"
                        to="/register"
                    >
                        Sign In
                    </Link>

                    <Link
                        className="hover:text-white"
                        to="/register"
                    >
                        Join Us
                    </Link>

                    <span>
                        <img
                            src="/icons/shopping-bag-icon.png"
                            alt="Shopping bag"
                        />
                    </span>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    {/* Shopping Bag */}
                    <span>
                        <img
                            src="/icons/shopping-bag-icon.png"
                            alt="Shopping bag"
                        />
                    </span>

                    {/* Hamburger */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <X size={25} />
                        ) : (
                            <Menu size={25} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute left-0 top-full w-full border-t border-white/10 bg-[#0b3fe3] px-6 py-5 md:hidden">
                    <div className="flex flex-col gap-5 text-sm">

                        <Link
                            to="#"
                            onClick={() => setMenuOpen(false)}
                            className="text-white"
                        >
                            Home
                        </Link>

                        <Link
                            to="#"
                            onClick={() => setMenuOpen(false)}
                            className="text-white/70 hover:text-white"
                        >
                            Courses
                        </Link>

                        <Link
                            to="#"
                            onClick={() => setMenuOpen(false)}
                            className="text-white/70 hover:text-white"
                        >
                            Creators
                        </Link>

                        <div className="h-px bg-white/10" />

                        <Link
                            to="/register"
                            onClick={() => setMenuOpen(false)}
                            className="text-white/70 hover:text-white"
                        >
                            Sign In
                        </Link>

                        <Link
                            to="/register"
                            onClick={() => setMenuOpen(false)}
                            className="text-white/70 hover:text-white"
                        >
                            Join Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
