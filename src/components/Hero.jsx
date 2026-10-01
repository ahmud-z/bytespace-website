import { Search } from "lucide-react";
import Navbar from "./Navbar";
import HappyStudentsCard from "../components/HappyStudentsCard";

export default function Hero() {
    return (
        <section
            className="
                relative min-h-[750px] overflow-hidden
                bg-[#0b3fe3]
                bg-[linear-gradient(rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.12)_2px,transparent_2px)]
                bg-[size:100px_80px]
                text-white
                sm:bg-[size:120px_95px]
                md:min-h-screen
                lg:bg-[size:150px_115px]
            "
        >
            <Navbar />

            {/* ================= HERO CONTENT ================= */}
            <div
                className="
                    relative z-10 mx-auto
                    max-w-6xl
                    px-5 pt-10
                    text-center
                    sm:px-6 sm:pt-14
                    lg:pt-16
                "
            >
                {/* Heading */}
                <h1
                    className="
                        mx-auto max-w-3xl
                        text-4xl font-semibold
                        leading-[1.15]
                        tracking-tight
                        sm:text-5xl
                        md:text-5xl
                        lg:text-[3.79rem]
                        lg:tracking-wide
                    "
                >
                    Get Access to Hundreds Courses Available
                </h1>

                {/* Description */}
                <p
                    className="
                        mx-auto mt-5
                        max-w-3xl
                        text-xs font-light
                        leading-6
                        tracking-wide
                        text-white/80
                        sm:mt-6 sm:text-sm
                        md:leading-7
                    "
                >
                    Unlock your creativity, gain valuable knowledge, and grow
                    your business with our wide range of courses.
                </p>

                {/* Search */}
                <div
                    className="
                        mx-auto mt-8
                        flex w-full max-w-xl
                        items-center gap-2
                        sm:mt-10 sm:gap-3
                    "
                >
                    <div className="relative min-w-0 flex-1">
                        <Search
                            size={18}
                            className="
                                absolute left-4 top-1/2
                                -translate-y-1/2
                                text-gray-500
                            "
                        />

                        <input
                            type="text"
                            placeholder="Course, topic, creator"
                            className="
                                w-full rounded-full
                                bg-white
                                py-3 pl-11 pr-4
                                text-xs text-gray-900
                                outline-none
                                sm:text-sm
                                sm:py-3.5
                            "
                        />
                    </div>

                    <button
                        className="
                            shrink-0 rounded-full
                            bg-[#c8ff00]
                            px-5 py-3
                            text-xs font-medium
                            text-black
                            transition
                            hover:bg-[#d5ff33]
                            sm:px-6 sm:py-3.5 sm:text-sm
                        "
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* ================= GREEN CIRCLE ================= */}
            <div
                className="
                    pointer-events-none
                    absolute left-1/2
                    z-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#c8ff00]

                    /* Mobile */
                    top-[505px]
                    h-[650px] w-[650px]

                    /* Small */
                    sm:top-[470px]
                    sm:h-[800px] sm:w-[800px]

                    /* Tablet */
                    md:top-[500px]
                    md:h-[1000px] md:w-[820px]

                    /* laptop */
                    lg:top-[505px]
                    lg:h-[1300px] lg:w-[1300px]

                     /* Desktop */
                    xl:top-[502px]
                    xl:h-[1300px] lg:w-[1300px]
                "
            />

            {/* ================= MAIN PERSON ================= */}
            <img
                src="/avaters/male-student-photo.png"
                alt="Student"
                className="
                    absolute
                    bottom-0 left-1/2
                    z-20
                    -translate-x-1/2
                    object-contain

                    /* Mobile */
                    w-[390px]

                    /* Small */
                    sm:w-[450px]

                    /* Tablet */
                    md:w-[540px]

                    /* laptop */
                    lg:w-[515px]

                    /* Desktop */
                    xl:w-[650px]
                "
            />



            {/* ================= 3D ORNAMENTS - LEFT SIDE ================= */}

            <div>
                <img
                    src="/3d-ornaments/spiral-left.png"
                    alt=""
                    className="
            absolute
            left-[-5%] top-[24%] w-[6rem]
            md:left-[-8%] md:top-[15%] md:w-[10rem]
            lg:left-[-6%] lg:top-[22%] lg:w-[12rem]
            xl:-left-[6%] xl:top-[22%] xl:w-96
        "
                />
            </div>

            <div>
                <img
                    src="/3d-ornaments/spiral-white.png"
                    alt=""
                    className="
            absolute
            left-[3%] top-[38%] w-[5rem]
            md:-left-[3%] md:top-[42%] md:w-[8rem]
            lg:left-[10%] lg:top-[42%] lg:w-[7.5rem]
            xl:left-[16%] xl:top-[42%] xl:w-[11.5rem]
        "
                />
            </div>

            <div>
                <img
                    src="/3d-ornaments/donut-white.png"
                    alt=""
                    className="
            absolute
            left-[2%] top-[55%] w-[8rem]
            md:left-[10%] md:top-[56%] md:w-[12rem]
            lg:left-[3%] lg:top-[65%] lg:w-[12rem]
            xl:left-[10%] xl:top-[62%] xl:w-[22.5rem]
        "
                />
            </div>


            {/* ================= 3D ORNAMENTS - RIGHT SIDE ================= */}

            <div>
                <img
                    src="/3d-ornaments/cylinder.png"
                    alt=""
                    className="
            absolute
            right-[-12%] top-[25%] w-[6rem]
            md:right-[-10%] md:top-[20%] md:w-[10rem]
            lg:right-[-9%] lg:top-[20%] lg:w-[12rem]
            xl:-right-[9%] xl:top-[20%] xl:w-96
        "
                />
            </div>

            <div>
                <img
                    src="/3d-ornaments/cone.png"
                    alt=""
                    className="
            absolute
            right-[25%] top-[55%] w-[5rem]
            md:right-[0%] md:top-[48%] md:w-[6rem]
            lg:right-[14%] lg:top-[48%] lg:w-[7.5rem]
            xl:right-[17%] xl:top-[48%] xl:w-[11.5rem]
        "
                />
            </div>

            <div>
                <img
                    src="/3d-ornaments/spiral-white-2.png"
                    alt=""
                    className="
            absolute
            right-[2%] top-[58%] w-[6rem]
            md:-right-[5%] md:top-[60%] md:w-[10rem]
            lg:right-[0%] lg:top-[70%] lg:w-[12rem]
            xl:right-[8.6%] xl:top-[68%] xl:w-80
        "
                />
            </div>

            {/* ================= UI/UX CARD ================= */}
            <div
                className="
                    absolute z-30
                    rounded-xl
                    bg-white
                    text-left text-black
                    shadow-xl

                    /* Mobile */
                    bottom-[40px]
                    left-1/2
                    w-[150px]
                    -translate-x-[180px]
                    p-2

                    /* Tablet */
                    md:bottom-[120px]
                    md:left-[6%]
                    md:w-auto
                    md:translate-x-0

                    /* Laptop */
                    lg:bottom-[180px]
                    lg:left-[20%]
                    
                    /* Desktop */
                    xl:bottom-[280px]
                    xl:left-[31.5%]
                "
            >
                <p className="text-xs font-medium md:text-sm lg:text-base text-gray-700">
                    UI/UX Design
                </p>

                <p className="mt-1 whitespace-nowrap text-[9px] text-gray-400 sm:text-xs">
                    200 Courses • 1000+ Students
                </p>
            </div>

            {/* ================= LEARNING PROGRESS CARD ================= */}
            <div
                className="
                    absolute z-30
                    flex flex-col
                    space-y-1
                    md:space-y-2
                    rounded-xl
                    bg-white
                    p-4
                    text-left
                    text-black
                    shadow-xl

                    bottom-[95px]
                    left-1/2
                    w-[150px]
                    translate-x-[20%]

                    /* Small */
                    sm:bottom-[160px]
                    sm:w-[180px]

                    /* Tablet */
                    md:bottom-[140px]
                    md:left-auto
                    md:right-[15%]
                    md:w-[210px]
                    md:translate-x-0

                    /* Laptop */
                    lg:bottom-[140px]
                    lg:right-[22%]
                    lg:w-60

                    /* Desktop */
                    xl:bottom-[220px]
                    xl:right-[34%]
                    xl:w-60
                "
            >
                <p className="text-[10px] sm:text-xs">
                    Learning Progress
                </p>

                <p className="text-2xl md:text-3xl font-semibold sm:text-4xl xl:text-5xl">
                    55%
                </p>

                <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[55%] rounded-full bg-[#c8ff00]" />
                </div>


                <div className="absolute scale-[0.3] right-42 top-15  md:right-40 md:scale-[0.28] md:top-10 lg:scale-[0.3] lg:right-65 lg:top-5 xl:scale-[0.4] xl:right-65 xl:top-20 ">
                    <HappyStudentsCard />

                </div>
            </div>
        </section>
    );
}