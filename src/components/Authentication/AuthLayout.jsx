import React from "react";
import CoursePreview from "./CoursePreview";
import { Link } from "react-router";

const AuthLayout = ({ children, type = "register" }) => {
    const isRegister = type === "register";

    return (
        <div className="bg-black px-0 sm:px-1">
            <div
                className="
                    relative
                    overflow-hidden
                    bg-[#073DE3]
                    bg-[linear-gradient(rgba(255,255,255,0.10)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.10)_2px,transparent_2px)]
                    bg-[size:107px_107px]

                "
            >
                {/*  LOGO  */}

                <Link to={"/"}
                    className="
                        absolute
                        left-6
                        top-7
                        z-50

                        sm:left-10

                        lg:left-[8.5%]
                        lg:top-8
                    "
                >
                    <img
                        src="/brand-logo/logo-vector.png"
                        alt="ByteSpace"
                        className="h-auto w-[28px] sm:w-[32px]"
                    />
                </Link>

                {/*  MAIN CONTAINER  */}

                <div
                    className="
                        relative
                        mx-auto
                        flex
                        min-h-screen
                        w-full
                        flex-col
                        section-container
                        items-center
                        px-5
                        pb-10
                        pt-24
                        lg:flex-row
                        lg:items-start
                        justify-center
                        xl:justify-between
                        lg:px-0
                        lg:pb-0
                        lg:pt-[105px]
                    "
                >
                    {/*  LEFT SIDE  */}

                    <div
                        className="
                            hidden
                            w-[470px]
                            shrink-0

                            lg:block
                        "
                    >
                        {/* Text */}

                        <div>
                            <h2
                                className="
                                    text-2xl
                                    font-medium
                                    ml-10
                                    xl:ml-0
                                    leading-tight
                                    text-white
                                "
                            >
                                {isRegister
                                    ? "Sign up and come in"
                                    : "Sign in with ease"}
                            </h2>

                            <p
                                className="
                                    mt-3
                                    ml-10
                                    xl:ml-0
                                    text-[15px]
                                    leading-6
                                    text-white/80
                                "
                            >
                                {isRegister
                                    ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
                                    : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
                            </p>
                        </div>

                        {/* Course preview */}

                        <div className="mt-14">
                            <CoursePreview />
                        </div>
                    </div>

                    {/*  RIGHT SIDE  */}

                    <div
                        className="
                            flex
                            w-full
                            justify-center

                            lg:w-[515px]
                            lg:justify-end
                        "
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;