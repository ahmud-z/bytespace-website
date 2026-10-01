
import React from "react";
import { Check } from "lucide-react";
import HappyStudentsCard from "./HappyStudentsCard";

const CreatorSection = () => {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-white
                px-3
                py-12

                sm:px-5
                sm:py-16

                lg:py-20

                xl:py-24
            "
        >
            {/*  BACKGROUND GLOW  */}

            <div className="pointer-events-none absolute -bottom-10 -left-40 h-[280px] w-[320px] rounded-full bg-[#CBFC01]/50 blur-[90px] sm:h-[350px] sm:w-[400px] lg:-bottom-5 lg:h-[350px] lg:w-[400px] lg:blur-[110px]" />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -right-40
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-blue-200/60
                    blur-[90px]

                    sm:h-[450px]
                    sm:w-[450px]

                    lg:-bottom-40
                    lg:h-[500px]
                    lg:w-[500px]
                    lg:blur-[110px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[30%]
                    -left-40
                    h-[280px]
                    w-[280px]
                    rounded-full
                    bg-blue-200/50
                    blur-[90px]

                    lg:bottom-[120px]
                    lg:-left-20
                    lg:h-[400px]
                    lg:w-[400px]
                    lg:blur-[110px]
                "
            />

            {/*  MAIN CONTENT  */}

            <div
                className="
                    section-container
                    mx-auto
                    flex
                    w-full
                    items-center
                    justify-between

                    px-0
                    md:px-4
                    lg:px-0
                    
                    gap-4

                    sm:gap-6

                    md:gap-8

                    lg:gap-10

                    xl:gap-16
                "
            >
                {/*  LEFT VISUAL  */}

                <div
                    className="
                        relative
                        h-[300px]
                        w-[52%]
                        shrink-0

                        sm:h-[360px]

                        md:h-[420px]

                        lg:h-[480px]
                        lg:w-[50%]

                        xl:h-[540px]
                    "
                >
                    {/*  TOTAL REVENUE  */}

                    <div
                        className="
                            absolute
                            left-0
                            top-[5px]
                            z-20
                            w-[125px]
                            rounded-lg
                            bg-blue-700
                            p-2
                            text-white
                            shadow-lg

                            sm:w-[155px]
                            sm:rounded-xl
                            sm:p-3

                            md:w-[185px]

                            lg:w-[220px]
                            lg:p-4

                            xl:w-[255px]
                        "
                    >
                        <p
                            className="
                                text-[10px]
                                sm:text-xs
                                md:text-sm
                                lg:text-base
                            "
                        >
                            Total Revenue
                        </p>

                        <p
                            className="
                                text-[8px]
                                text-white/70

                                sm:text-[9px]

                                md:text-[10px]

                                lg:text-xs
                            "
                        >
                            July 1-28
                        </p>

                        <p
                            className="
                                mt-1
                                text-sm
                                font-semibold

                                sm:text-base

                                md:text-lg

                                lg:mt-2
                                lg:text-2xl
                            "
                        >
                            $120.29
                        </p>

                        <div
                            className="
                                mt-1
                                h-1
                                overflow-hidden
                                rounded-full
                                bg-white

                                sm:h-1.5

                                lg:mt-2
                                lg:h-2.5
                            "
                        >
                            <div className="h-full w-[60%] rounded-full bg-[#D4FB20]" />
                        </div>
                    </div>

                    {/*  YEAR TO DATE  */}

                    <div
                        className="
                            absolute
                            left-0
                            top-[105px]
                            z-auto
                            w-[95px]
                            rounded-lg
                            bg-blue-700
                            p-2
                            text-white
                            shadow-lg

                            sm:top-[125px]
                            sm:w-[115px]
                            sm:p-2.5

                            md:top-[145px]
                            md:w-[130px]

                            lg:top-[160px]
                            lg:w-[145px]
                            lg:p-3
                        "
                    >
                        <p
                            className="
                                text-[9px]

                                sm:text-[10px]

                                md:text-xs

                                lg:text-base
                            "
                        >
                            Year to Date
                        </p>

                        <p
                            className="
                                text-[7px]
                                text-white/70

                                sm:text-[8px]

                                md:text-[9px]

                                lg:text-xs
                            "
                        >
                            2023
                        </p>

                        <p
                            className="
                                mt-1
                                text-sm
                                font-semibold

                                sm:text-base

                                md:text-lg

                                lg:mt-2
                                lg:text-2xl
                            "
                        >
                            $1,200.38
                        </p>

                        <span
                            className="
                                mt-1
                                inline-block
                                rounded-full
                                bg-[#D4FB20]
                                px-1.5
                                py-0.5
                                text-[7px]
                                font-medium
                                text-black

                                sm:px-2
                                sm:text-[9px]

                                lg:mt-2
                                lg:py-1
                                lg:text-xs
                            "
                        >
                            +12%
                        </span>
                    </div>

                    {/*  STUDENT IMAGE  */}

                    <img
                        src="/avaters/female-student-photo.png"
                        alt="Course creator"
                        className="
                            absolute
                            bottom-0
                            left-[50%]
                            z-20
                            h-[270px]
                            w-auto
                            max-w-none
                            -translate-x-1/2
                            object-contain

                            sm:h-[325px]

                            md:h-[390px]

                            lg:left-[48%]
                            lg:h-[470px]

                            xl:h-[530px]
                        "
                    />

                    {/*  HAPPY STUDENTS  */}

                    <div
                        className="
                            absolute
                            bottom-[15px]
                            right-[-5px]
                            z-40
                            scale-[0.25]
                            origin-bottom-right

                            sm:bottom-[20px]
                            sm:right-[-5px]
                            sm:scale-[0.30]

                            md:bottom-[25px]
                            md:right-[-10px]
                            md:scale-[0.36]

                            lg:bottom-[35px]
                            lg:right-[-20px]
                            lg:scale-[0.42]

                            xl:bottom-[45px]
                            xl:right-[-35px]
                            xl:scale-[0.48]
                        "
                    >
                        <HappyStudentsCard />
                    </div>

                    {/*  SPIRAL  */}

                    <div
                        className="
                            absolute
                            right-[-5px]
                            top-[25px]
                            z-30

                            sm:right-0
                            sm:top-[30px]

                            md:right-[60px]
                            md:top-[110px]

                            lg:right-[15px]
                            lg:top-[45px]

                            xl:right-[120px]
                            xl:top-[95px]
                        "
                    >
                        <img
                            src="/3d-ornaments/spiral-left.png"
                            alt=""
                            className="
                                w-[5rem]

                                sm:w-[6.5rem]

                                md:w-[8rem]

                                lg:w-[10rem]

                                xl:w-[13rem]
                            "
                        />
                    </div>
                </div>

                {/*  RIGHT CONTENT  */}

                <div
                    className="
                        relative
                        z-20
                        w-[48%]
                        min-w-0

                        lg:w-[50%]
                    "
                >
                    <h2
                        className="
                            text-xl
                            font-semibold
                            leading-[1.15]
                            tracking-tight
                            text-gray-900

                            sm:text-2xl

                            md:text-3xl

                            lg:text-4xl

                            xl:text-5xl
                        "
                    >
                        Create & Manage
                        <br />
                        Courses Easily.
                    </h2>

                    <p
                        className="
                            mt-3
                            max-w-xl
                            text-[10px]
                            leading-5
                            text-gray-500

                            sm:mt-4
                            sm:text-xs
                            sm:leading-6

                            md:text-sm

                            lg:mt-6
                            lg:text-[15px]
                            lg:leading-7

                            xl:mt-7
                            xl:text-base
                        "
                    >
                        <span className="font-semibold text-gray-700">
                            ByteSpace
                        </span>{" "}
                        supports individuals or entities in the creation,
                        publication, and administration of educational courses.
                    </p>

                    {/*  FEATURES  */}

                    <div
                        className="
                            mt-4
                            space-y-2.5

                            sm:mt-5
                            sm:space-y-3

                            md:mt-6
                            md:space-y-3.5

                            lg:mt-7
                            lg:space-y-4
                        "
                    >
                        {[
                            "Share Your Expertise",
                            "Monetize Your Passion",
                            "Flexibility and Autonomy",
                            "Build a Community",
                        ].map((feature) => (
                            <div
                                key={feature}
                                className="flex items-center gap-2 sm:gap-2.5 lg:gap-3"
                            >
                                <span
                                    className="
                                        flex
                                        h-4
                                        w-4
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-blue-700

                                        sm:h-[18px]
                                        sm:w-[18px]

                                        lg:h-5
                                        lg:w-5
                                    "
                                >
                                    <Check
                                        size={11}
                                        strokeWidth={3}
                                        className="text-white sm:size-3 lg:size-[14px]"
                                    />
                                </span>

                                <span
                                    className="
                                        text-[10px]
                                        text-gray-700

                                        sm:text-xs

                                        md:text-sm
                                    "
                                >
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreatorSection;
