import React from "react";
import { Link } from "react-router";
import AuthLayout from "./AuthLayout";

const Register = () => {
    return (
        <AuthLayout type="register">
            <div className="w-full max-w-[380px] rounded-[15px] bg-white px-8 py-9 shadow-2xl sm:px-8 sm:py-10">
                {/* Small heading */}
                <p className="text-[9px] font-medium text-blue-600">
                    Create an Account
                </p>

                {/* Main heading */}
                <h1 className="mt-1 max-w-[230px] text-[25px] font-bold leading-[1.05] tracking-[-0.8px] text-gray-800 sm:text-[27px]">
                    Welcome to
                    <br />
                    ByteSpace
                </h1>

                <form className="mt-7 space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="mb-1.5 block text-[8px] font-medium text-gray-700">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Jamie Davis"
                            className="
                h-9 w-full rounded-md border border-gray-200
                bg-white px-3 text-[9px] text-gray-700
                outline-none transition
                placeholder:text-gray-400
                focus:border-[#D4FB20] focus:ring-1 focus:ring-lime-200
              "
                        />
                    </div>

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

                    {/* Button */}
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
                            Continue
                        </button>
                    </div>
                </form>

                {/* Login */}
                <p className="mt-16 text-center text-[8px] text-gray-500">
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