import React from "react";
import { Link } from "react-router";
import AuthLayout from "./AuthLayout";

const Login = () => {
    return (
        <AuthLayout type="login">
            <div className="w-full max-w-[380px] rounded-[15px] bg-white px-8 py-9 shadow-2xl sm:px-8 sm:py-10">
                {/* Small heading */}
                <p className="text-[9px] font-medium text-blue-600">
                    Sign In
                </p>

                {/* Main heading */}
                <h1 className="mt-1 text-[25px] font-bold leading-[1.05] tracking-[-0.8px] text-gray-800 sm:text-[27px]">
                    Welcome Back
                </h1>

                <form className="mt-7 space-y-4">
                    {/* Email */}
                    <div>
                        <label className="mb-1.5 block text-[8px] font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="designer@example.com"
                            className="
                h-9 w-full rounded-md border border-gray-200
                bg-white px-3 text-[9px] text-gray-700
                outline-none transition
                placeholder:text-gray-400
                focus:border-[#D4FB20] focus:ring-1 focus:ring-lime-200
              "
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-1.5 block text-[8px] font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="********"
                            className="
                h-9 w-full rounded-md border border-gray-200
                bg-white px-3 text-[9px] text-gray-700
                outline-none transition
                placeholder:text-gray-400
                focus:border-[#D4FB20] focus:ring-1 focus:ring-lime-200
              "
                        />
                    </div>

                    {/* Sign In */}
                    <div className="flex justify-end pt-1">
                        <button
                            type="submit"
                            className="
                rounded-full bg-[#D4FB20]
                px-5 py-2 text-[9px] font-medium text-black
                transition hover:bg-[#D4FB20]
                active:scale-95
              "
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                {/* Divider */}
                <div className="mt-9 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />

                    <span className="text-[8px] text-gray-400">or</span>

                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Social Login */}
                <div className="mt-6 flex justify-center gap-3">
                    <button
                        type="button"
                        aria-label="Facebook"
                        className="
              flex h-9 w-9 items-center justify-center
              rounded-xl border border-gray-200
              text-[16px] font-bold text-black
              transition hover:bg-gray-50
            "
                    >
                        f
                    </button>

                    <button
                        type="button"
                        aria-label="Google"
                        className="
              flex h-9 w-9 items-center justify-center
              rounded-xl border border-gray-200
              text-[15px] font-semibold text-gray-700
              transition hover:bg-gray-50
            "
                    >
                        G
                    </button>
                </div>

                {/* Register */}
                <p className="mt-10 text-center text-[8px] text-gray-400">
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