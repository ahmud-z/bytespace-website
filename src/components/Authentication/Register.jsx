import React from "react";
import { Link } from "react-router";
import AuthLayout from "./AuthLayout";

const Register = () => {
    return (
        <AuthLayout type="register">
            <div
                className="
                    w-full
                    max-w-[450px]
                    xl:max-w-[515px]
                    rounded-[22px]
                    bg-white
                    px-8
                    py-10
                    shadow-2xl

                    sm:px-10
                    sm:py-12

                    lg:px-14
                    lg:py-14
                "
            >
                {/*  HEADER  */}

                <p className="text-sm font-normal text-blue-600">
                    Create an Account
                </p>

                <h1
                    className="
                        mt-1
                        text-4xl
                        font-semibold
                        leading-[1.05]
                        tracking-[-1.5px]
                        text-gray-800

                        sm:text-[42px]
                    "
                >
                    Welcome to
                    <br />
                    ByteSpace
                </h1>

                {/*  FORM  */}

                <form className="mt-9 space-y-5">
                    {/* Full Name */}

                    <div>
                        <label
                            className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-gray-700
                            "
                        >
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Jamie Davis"
                            className="
                                h-12
                                w-full
                                rounded-xl
                                border
                                border-gray-200
                                bg-white
                                px-5
                                text-sm
                                text-gray-700
                                outline-none
                                transition
                                placeholder:text-gray-400
                                focus:border-[#D4FB20]
                                focus:ring-2
                                focus:ring-lime-100
                            "
                        />
                    </div>

                    {/* Email */}

                    <div>
                        <label
                            className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-gray-700
                            "
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="designer@example.com"
                            className="
                                h-12
                                w-full
                                rounded-xl
                                border
                                border-gray-200
                                bg-white
                                px-5
                                text-sm
                                text-gray-700
                                outline-none
                                transition
                                placeholder:text-gray-400
                                focus:border-[#D4FB20]
                                focus:ring-2
                                focus:ring-lime-100
                            "
                        />
                    </div>

                    {/* Password */}

                    <div>
                        <label
                            className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-gray-700
                            "
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="********"
                            className="
                                h-12
                                w-full
                                rounded-xl
                                border
                                border-gray-200
                                bg-white
                                px-5
                                text-sm
                                text-gray-700
                                outline-none
                                transition
                                placeholder:text-gray-400
                                focus:border-[#D4FB20]
                                focus:ring-2
                                focus:ring-lime-100
                            "
                        />
                    </div>

                    {/* Button */}

                    <div className="flex justify-end pt-1">
                        <button
                            type="submit"
                            className="
                                rounded-full
                                bg-[#D4FB20]
                                px-7
                                py-3
                                text-sm
                                font-medium
                                text-black
                                transition
                                hover:bg-[#c8f500]
                                active:scale-95
                            "
                        >
                            Continue
                        </button>
                    </div>
                </form>

                {/*  LOGIN  */}

                <p
                    className="
                        mt-16
                        text-center
                        text-xs
                        text-gray-400
                    "
                >
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Register;