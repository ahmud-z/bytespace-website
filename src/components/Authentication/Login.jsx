import React from "react";
import { Link } from "react-router";
import AuthLayout from "./AuthLayout";

const Login = () => {
    return (
        <AuthLayout type="login">
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
                {/* ================= HEADER ================= */}

                <p
                    className="
                        text-sm
                        font-normal
                        text-blue-600

                        lg:text-[15px]
                    "
                >
                    Sign In
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

                        lg:text-[40px]
                    "
                >
                    Welcome Back
                </h1>

                {/* ================= FORM ================= */}

                <form className="mt-10 space-y-5">
                    {/* Email */}

                    <div>
                        <label
                            className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-gray-700

                                lg:text-[13px]
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

                                lg:text-[13px]
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
                            Sign In
                        </button>
                    </div>
                </form>

                {/* ================= DIVIDER ================= */}

                <div className="mt-16 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />

                    <span className="text-xs text-gray-400">
                        or
                    </span>

                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* ================= SOCIAL ================= */}

                <div className="mt-8 flex justify-center gap-3">
                    <button
                        type="button"
                        aria-label="Facebook"
                        className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-[18px]
                            border
                            border-gray-200
                            text-3xl
                            font-bold
                            text-black
                            transition
                            hover:bg-gray-50
                        "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg>
                    </button>

                    <button
                        type="button"
                        aria-label="Google"
                        className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-[18px]
                            border
                            border-gray-200
                            text-2xl
                            font-semibold
                            text-gray-800
                            transition
                            hover:bg-gray-50
                        "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1-1.265.06a6 6 0 1 0 2.103 6.836l.001-.004h-3.66a1 1 0 0 1-.992-.883L13 13v-2a1 1 0 0 1 1-1h6.945a1 1 0 0 1 .994.89q.06.55.061 1.11c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" /></svg>
                    </button>
                </div>

                {/* ================= REGISTER ================= */}

                <p
                    className="
                        mt-16
                        text-center
                        text-xs
                        text-gray-400

                        lg:mt-16
                    "
                >
                    New user?{" "}
                    <Link
                        to="/register"
                        className="text-blue-600 hover:underline"
                    >
                        Create an account
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Login;