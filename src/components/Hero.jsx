// components/Hero.jsx

import { Search } from "lucide-react";
import Navbar from "./Navbar";
import HappyStudentsCard from "./HappyStudentsCard";


export default function Hero() {
    return (
        <section
            className="
        relative min-h-screen overflow-hidden
        bg-[#0b3fe3]
        bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
        bg-[size:150px_115px]
        text-white
      "
        >
            <Navbar />

            <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 text-center">

                {/* Heading */}
                <h1 className="mx-auto text-wrap max-w-3xl tracking-wide text-5xl font-semibold leading-20 md:text-6xl">Get Access to Hundreds Courses Available</h1>

                {/* Subtitle */}
                <p className="mx-auto mt-7 text-[14px] tracking-wider font-light text-white/80">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
                {/* Search */}
                <div className="mx-auto mt-12 flex max-w-xl items-center gap-3">
                    <div className="relative flex-1">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        <input
                            type="text"
                            placeholder="Course, topic, creator"
                            className="w-full rounded-full bg-white py-3 pl-11 pr-5 text-sm text-gray-900 outline-none"
                        />
                    </div>

                    <button className="rounded-full bg-[#c8ff00] px-6 py-3 text-sm font-medium text-black">
                        Search
                    </button>
                </div>
            </div>

            {/* Green circle */}

            <div className="absolute left-1/2 top-[500px] size-[1300px] -translate-x-1/2 rounded-[50%] bg-[#c8ff00]" />

            {/*   */}
            {/* Main person */}
            <img
                src="/male-student-photo.png"
                alt="Student"
                className="absolute bottom-0 left-1/2 z-20 w-[650px] -translate-x-1/2 object-contain"
            />

            {/* Floating cards */}
            <div className="absolute bottom-[280px] left-[30%] z-30 rounded-2xl bg-white p-4 text-left text-black shadow-lg">
                <p className="text-base font-medium">UI/UX Design</p>
                <p className="text-sm text-gray-400">200 Courses • 1000+ Students</p>
            </div>

            <div className="absolute bottom-[230px] right-[32%] z-30 w-60 flex flex-col space-y-2.5 rounded-2xl bg-white p-4 text-left text-black shadow-lg">
                <p className="text-xs">Learning Progress</p>
                <p className="text-5xl font-semibold">55%</p>

                <div className="h-1.5 rounded-full bg-gray-100">
                    <div className="h-full w-[55%] rounded-full bg-[#c8ff00]" />
                </div>
            </div>
            
            
        </section>
    );
}