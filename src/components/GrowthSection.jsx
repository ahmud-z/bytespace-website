
import React from "react";
import CourseCard from "./CourseCard";

const GrowthSection = () => {
    return (
        <section className="relative overflow-hidden bg-white px-3 pt-16 pb-14 lg:px-8 lg:pt-50 lg:pb-24">
            {/*  BACKGROUND GLOW  */}

            <div
                className="
                    pointer-events-none absolute
                    -left-32 -top-10
                    h-[300px] w-[350px]
                    rounded-full
                    bg-[#c8ff00]/30
                    blur-[90px]

                    md:left-0 md:h-[450px] md:w-[500px]

                    lg:left-20 lg:-top-20
                    lg:h-[500px] lg:w-[550px]
                    lg:blur-[140px]

                    xl:left-80 xl:-top-30
                    xl:h-[520px] xl:w-[600px]
                    xl:blur-[150px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -right-40 top-10
                    h-[350px] w-[320px]
                    rounded-full
                    bg-blue-100/60
                    blur-[80px]

                    md:-right-48 md:h-[480px] md:w-[420px]

                    lg:-right-50 lg:top-0
                    lg:h-[550px] lg:w-[480px]
                    lg:blur-[90px]

                    xl:h-[600px] xl:w-[500px]
                    xl:blur-[100px]
                "
            />

            {/*  MAIN CONTAINER  */}

            <div
                className="
                    relative mx-auto grid w-full
                    md:px-6
                    lg:px-0
                    section-container
                    grid-cols-2
                    items-center gap-2

                    md:grid-cols-[47%_53%] md:gap-6

                    lg:grid-cols-2 lg:gap-10

                    xl:gap-16
                "
            >
                {/*  LEFT CONTENT  */}

                <div className="flex min-w-0 flex-col justify-center text-left space-y-4">
                    <h2
                        className="
                            max-w-[650px]
                            text-lg font-semibold
                            leading-[1.15]
                            tracking-tight text-gray-900

                            md:text-2xl
                            lg:text-4xl
                            xl:text-5xl
                        "
                    >
                        Your Path to Professional Growth Starts Here!
                    </h2>

                    <p
                        className="
                            mt-3 max-w-lg
                            text-[9px] leading-5
                            text-gray-500

                            md:mt-5 md:text-xs md:leading-7

                            lg:mt-7 lg:text-[15px] lg:leading-8

                            xl:text-base
                        "
                    >
                        Explore our curated selection of courses tailored to
                        enhance your capabilities and accelerate your career
                        journey. Whether you are looking to sharpen specific
                        skills, gain industry expertise, or embark on a new
                        career path entirely, we have the resources you need.
                    </p>

                    {/*  STATS  */}

                    <div
                        className="
                            mt-5 flex gap-4

                            md:mt-7 md:gap-7

                            lg:mt-8 lg:gap-10
                        "
                    >
                        {/* Students */}
                        <div>
                            <h3 className="text-xl font-medium text-[#003BE2] md:text-3xl lg:text-4xl">
                                12K
                            </h3>
                            <p className="mt-0.5 text-[9px] text-gray-500 md:text-xs lg:mt-1 lg:text-base">
                                Students
                            </p>
                        </div>

                        {/* Courses */}
                        <div>
                            <h3 className="text-xl font-medium text-[#003BE2] md:text-3xl lg:text-4xl">
                                70+
                            </h3>
                            <p className="mt-0.5 text-[9px] text-gray-500 md:text-xs lg:mt-1 lg:text-base">
                                Courses
                            </p>
                        </div>

                        {/* Creators */}
                        <div>
                            <h3 className="text-xl font-medium text-[#003BE2] md:text-3xl lg:text-4xl">
                                16
                            </h3>
                            <p className="mt-0.5 text-[9px] text-gray-500 md:text-xs lg:mt-1 lg:text-base">
                                Creators
                            </p>
                        </div>
                    </div>
                </div>

                {/*  RIGHT VISUAL  */}

                <div className="relative h-[280px] w-full min-w-0 md:h-[390px] lg:h-[470px] xl:h-[480px]">
                    {/*  COURSE CARD  */}

                    <div
                        className="
                            absolute
                            left-[-15px] top-[5px]
                            z-10 origin-top-left
                            scale-[0.6]

                            md:left-0 md:top-[20px] md:scale-[0.55]

                            lg:left-[-2%] lg:top-[-30px]
                            lg:scale-[0.60]

                            xl:left-8 xl:-top-20 xl:scale-[0.75]
                        "
                    >
                        <CourseCard
                            title="Learn Figma from Basic"
                            image="/course-banners/course-banner-1.png"
                        />
                    </div>

                    {/*  PERSON  */}

                    <img
                        src="/avaters/male-student-photo.png"
                        alt="Student"
                        className="
                            absolute
                            bottom-[-5px] left-1/2
                            z-20
                            h-[250px] w-auto
                            max-w-none
                            -translate-x-1/2
                            object-contain

                            md:bottom-[-10px] md:h-[370px]

                            lg:bottom-[-14px]
                            lg:left-[52%]
                            lg:h-[500px]

                            xl:bottom-[-16px]
                            xl:left-110
                            xl:h-[630px]
                        "
                    />

                    {/*  LEARNING PROGRESS  */}

                    <div
                        className="
                            absolute
                            bottom-[20px] right-[-5px]
                            z-30
                            w-[115px]
                            rounded-lg
                            bg-white p-2
                            text-left text-black
                            shadow-md

                            md:bottom-[120px]
                            md:right-[35px]
                            md:w-[160px]
                            md:p-3

                            lg:bottom-[80px]
                            lg:right-[-10px]
                            lg:w-[200px]
                            lg:p-3.5

                            xl:bottom-[190px]
                            xl:-right-30
                            xl:w-[230px]
                            xl:p-4
                        "
                    >
                        <p className="text-[8px] md:text-[10px] lg:text-xs">
                            Learning Progress
                        </p>

                        <p className="mt-0.5 text-xl font-semibold md:text-2xl lg:text-4xl xl:text-5xl">
                            55%
                        </p>

                        <div className="mt-1 h-1 rounded-full bg-gray-100 md:h-1.5 lg:mt-2">
                            <div className="h-full w-[55%] rounded-full bg-[#c8ff00]" />
                        </div>
                    </div>

                    {/*  SPIRAL  */}

                    <div className="absolute -right-3 -top-2 z-30 md:right-0 md:top-25 lg:-right-8 xl:-right-44 xl:top-2">
                        <img
                            src="/3d-ornaments/spiral-right.png"
                            alt=""
                            className="w-20 md:w-32 lg:w-40 xl:w-58"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthSection;

