// components/Hero.jsx

import Navbar from "./Navbar";

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
                <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                    Get Access to Hundreds
                    <br />
                    Courses Available
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mt-7 max-w-3xl text-sm text-white/80 md:text-base">
                    Unlock your creativity, gain valuable knowledge, and grow your
                    business with our wide range of courses.
                </p>

                {/* Search */}
                <div className="mx-auto mt-12 flex max-w-4xl items-center justify-center gap-3">

                    <div className="flex h-10 w-[355px] items-center rounded-full bg-white px-5 text-gray-400">
                        <span className="mr-3">⌕</span>

                        <input
                            type="text"
                            placeholder="Course, topic, creator"
                            className="w-full bg-transparent text-sm outline-none"
                        />
                    </div>

                    <button className="h-10 rounded-full bg-[#c8ff00] px-6 text-sm font-medium text-black">
                        Search
                    </button>

                </div>
            </div>

            {/* Green circle */}
            <div
                className="absolute  left-1/2  size-[1300px] -translate-x-1/2 rounded-[50%] bg-[#c8ff00]" />
            {/* bottom-[-300px]  */}
            {/* Main person */}
            <img
                src="/male-student-photo.png" alt="Student" className="absolute bottom-0 left-1/2 z-20 w-[740px] -translate-x-1/2 object-contain" />

            {/* Floating cards */}
            <div className="absolute bottom-[250px] left-[29%] z-30 rounded-2xl bg-white px-4 py-3 text-left text-black shadow-lg">
                <p className="text-xs font-medium">UI/UX Design</p>
                <p className="text-[10px] text-gray-400">
                    200 Courses • 1000+ Students
                </p>
            </div>

            <div className="absolute bottom-[195px] right-[25%] z-30 w-44 rounded-2xl bg-white p-4 text-left text-black shadow-lg">
                <p className="text-xs">Learning Progress</p>
                <p className="mt-1 text-4xl font-bold">55%</p>

                <div className="mt-2 h-1.5 rounded-full bg-gray-100">
                    <div className="h-full w-[55%] rounded-full bg-[#c8ff00]" />
                </div>
            </div>


        </section>
    );
}