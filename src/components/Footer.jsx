import React from "react";

const footerColumns = [
    {
        title: "Featured Courses",
        links: [
            "Featured Courses",
            "Featured Categories",
            "Business",
            "IT",
            "Design",
        ],
    },
    {
        title: "Development",
        links: [
            "Development",
            "Marketing",
            "Photography",
            "Finance",
            "Sport",
        ],
    },
    {
        title: "Become a Creator",
        links: [
            "Become a Creator",
            "Affiliate Program",
            "Contact",
            "Help",
            "About",
        ],
    },
];

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white px-6 sm:px-10 lg:px-[9%]">
            <div className="mx-auto max-w-[1200px]">
                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12  lg:grid-cols-[1.6fr_2fr] lg:gap-20 pt-14 pb-20">
                    {/* Newsletter */}
                    <div>
                        {/* Logo */}
                        <div className="flex flex-col">
                            <img src="ByteSpaceLogoDark.png" alt="" className="w-40" />

                            <p className="mt-4 text-sm leading-5 text-gray-500">
                                Stay Up to date with our latest features and releases by joining
                                our newsletter.
                            </p>
                        </div>




                        <div className="flex mt-7 space-x-2 ">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="min-w-0 flex-1 border border-gray-300 rounded-full bg-transparent py-3 px-4 text-md text-gray-700 outline-none placeholder:text-gray-500"
                            />

                            <button
                                type="button"
                                className="rounded-full bg-[#D4FB20] px-7 py-2.5 text-md font-medium text-black transition hover:bg-lime-300"
                            >
                                Search
                            </button>

                        </div>

                        <p className="mt-5 text-[12px] leading-4 text-gray-500">
                            By subscribing, you agree to our Privacy Policy and consent to
                            receive updates from our company.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
                        {footerColumns.map((column) => (
                            <div key={column.title}>
                                <ul className="space-y-4">
                                    {column.links.map((link, index) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className={`text-sm transition hover:text-lime-500 ${index === 0
                                                    ? "font-normal text-gray-700"
                                                    : "text-gray-600"
                                                    }`}
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col gap-5 border-t text-sm border-gray-300 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-gray-500">
                        © 2023 ByteSpace. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-5 text-gray-500">
                        <a href="#" className="transition hover:text-black">
                            Privacy Policy
                        </a>

                        <a href="#" className="transition hover:text-black">
                            Terms of Service
                        </a>

                        <a href="#" className="transition hover:text-black">
                            Cookies Settings
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;