import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="relative z-50 ">
            <div className="section-container flex h-23 justify-between items-center  px-6">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to={"/"} className="cursor-pointer">
                        <img src="/brand-logo/ByteSpaceLogoWhite.png" alt="" />
                    </Link>
                </div>

                {/* Navigation Links*/}
                <div className="hidden items-center gap-8 text-sm md:flex lg:text-base">
                    <Link to="#" className="text-white">
                        Home
                    </Link>

                    <Link to="#" className="text-white/70 hover:text-white">
                        Courses
                    </Link>

                    <Link to="#" className="text-white/70 hover:text-white">
                        Creators
                    </Link>
                </div>

                {/* Right Side Links */}
                <div className="flex items-center gap-7 text-sm lg:text-base text-white/70">
                    <Link className="hidden md:block hover:text-white" to={"/register"}>Sign In</Link>
                    <Link className="hidden md:block hover:text-white" to={"/register"}>Join Us</Link>

                    <span>
                        <img src="/icons/shopping-bag-icon.png" alt="" />
                    </span>
                </div>

            </div>
        </nav>
    );
}