import React from "react";

const CreatorCTA = () => {
    return (
        <section
            className="
                relative min-h-[460px] overflow-hidden
                bg-[#0b3fe3]
                bg-[linear-gradient(rgba(255,255,255,0.13)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.13)_2px,transparent_2px)]
                bg-[size:150px_115px]
                text-white
            "
        >


            {/* ================= 3D ORNAMENTS - LEFT SIDE ================= */}

            <div>
                <img
                    src="/3d-ornaments/spiral-left.png"
                    alt=""
                    className="
            absolute
            left-[-14%] top-[8%] w-[8rem]
            md:left-[-8%] md:top-[8%] md:w-[10rem] 
            lg:left-[-5%] lg:top-[8%] lg:w-[12rem]
            xl:-left-[6%] xl:-top-[33%] xl:w-92
        "
                />
            </div>

            <div>
                <img
                    src="/3d-ornaments/spiral-white.png"
                    alt=""
                    className="
            absolute
            -left-[10%] top-[50%] w-[5rem]
            md:left-[20%] md:top-[80%] md:w-[6rem]
            lg:left-[10%] lg:top-[58%] lg:w-[8rem]
            xl:left-[13%] xl:top-3 xl:w-[10.5rem]
        "
                />
            </div>

            <div>
                <img
                    src="/3d-ornaments/cone-full.png"
                    alt=""
                    className="
            absolute
            left-[2%] top-[70%] w-[4rem]
            md:left-[2%] md:top-[65%] md:w-[6rem]
            lg:left-[0%] lg:top-[70%] lg:w-[6rem]
            xl:-left-[2%] xl:top-51 xl:w-[10.5rem]
        "
                />
            </div>

            <div>
                <img
                    src="/3d-ornaments/donut-lime.png"
                    alt=""
                    className="
            absolute
            left-[-8%] bottom-[-8%] w-[8rem]
            md:left-[-2%] md:bottom-[-20%] md:w-[12rem]
            lg:left-[5%] lg:bottom-[-15%] lg:w-[12rem]
            xl:left-[2.5%] xl:top-[60%] xl:w-[19rem]
        "
                />
            </div>


            {/* ================= 3D ORNAMENTS - RIGHT SIDE ================= */}

            <div>
                <img
                    src="/3d-ornaments/cylinder-white.png"
                    alt=""
                    className="
            absolute
            right-[-16%] top-[20%] w-[8rem]
            md:right-[-11%] md:top-[6%] md:w-[10rem]
            lg:right-[-9%] lg:top-[6%] lg:w-[12rem]
            xl:-right-[8%] xl:top-[2%] xl:w-92
        "
                />
            </div>

            <div>
                <img
                    src="/3d-ornaments/cone-green.png"
                    alt=""
                    className="
            absolute
            right-[3%] top-[60%] w-[5rem]
            md:right-[6%] md:top-[65%] md:w-[6rem]
            lg:right-[15%] lg:top-[68%] lg:w-[7rem]
            xl:right-[12%] xl:top-[0%] xl:w-[11.5rem]
        "
                />
            </div>

            <div>
                <img
                    src="/3d-ornaments/spiral-right.png"
                    alt=""
                    className="
            absolute
            right-[-7%] bottom-[-8%] w-[8rem]
            md:right-[-5%] md:bottom-[-9%] md:w-[8rem]
            lg:right-[-5%] lg:bottom-[-20%] lg:w-[12rem]
            xl:right-[1%] xl:bottom-[-28%] xl:w-80
        "
                />
            </div>


            {/* ================= CONTENT ================= */}

            <div className="relative z-10 mx-auto flex min-h-[445px] max-w-5xl flex-col items-center justify-center px-6 text-center">
                <h2 className="max-w-3xl text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl">
                    Unlock Your Potential as a
                    <br />
                    Creator with Bytespace
                </h2>

                <p className="mt-8 max-w-5xl text-sm font-light leading-6 lg:leading-7 text-white/90">
                    Experience the collaboration of numerous creators and an
                    expanding selection of courses. Register now and become a
                    part of a community comprising over 10,000 local and
                    international creators. Utilize our Course Editor, and
                    showcase your expertise by publishing your finest course
                    on the ByteSpace Course Library.
                </p>

                <button
                    className="
                        mt-8 rounded-full
                        bg-[#c8ff00]
                        px-7 py-3
                        text-sm font-medium
                        text-black
                        transition
                        hover:scale-103
                        cursor-pointer
                    "
                >
                    Join as Creator
                </button>
            </div>

        </section>
    );
};

export default CreatorCTA;