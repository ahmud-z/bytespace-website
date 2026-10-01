import React from "react";
import { Link } from "react-router";

const avatars = [
    "https://i.pravatar.cc/80?img=12",
    "https://i.pravatar.cc/80?img=32",
    "https://i.pravatar.cc/80?img=47",
    "https://i.pravatar.cc/80?img=52",
];

const Logo = () => (
    <Link to="/" className="flex items-center gap-1.5">
        <div className="relative h-5 w-5">
            <span className="absolute left-0 top-0 h-4 w-2.5 rounded-br-full rounded-tr-sm bg-[#D4FB20]" />
            <span className="absolute bottom-0 left-1.5 h-3 w-2.5 rounded-bl-full rounded-tl-sm bg-[#D4FB20]" />
        </div>
    </Link>
);

const AvatarStack = ({ count = "20+" }) => (
    <div className="flex items-center">
        <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
                <img
                    key={index}
                    src={avatar}
                    alt=""
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                />
            ))}
        </div>

        <span className="ml-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-black px-1 text-[7px] font-semibold text-white">
            {count}
        </span>
    </div>
);

const CoursePreview = () => {
    return (
        <div className="relative h-[360px] w-[350px]">
            {/* Small back course card */}
            <div className="absolute left-0 top-[75px] w-[190px] rounded-xl bg-white p-2 shadow-xl">
                <div className="h-[105px] rounded-lg bg-gray-100 p-2">
                    <div className="flex h-full items-center justify-center rounded-md bg-gray-200">
                        <span className="text-[10px] font-medium text-gray-400">
                            Course Preview
                        </span>
                    </div>
                </div>

                <div className="mt-2">
                    <p className="text-[10px] font-bold text-gray-900">
                        Build Digital Skills
                    </p>

                    <p className="mt-0.5 text-[7px] text-blue-600">
                        by ByteSpace studio
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-[7px]">
                            17 Lessons
                        </span>

                        <span className="font-bold text-blue-600">$25</span>
                    </div>
                </div>
            </div>

            {/* Main course card */}
            <div className="absolute left-[55px] top-0 w-[190px] rounded-xl bg-white p-2 shadow-2xl">
                {/* Fake dashboard image */}
                <div className="relative h-[90px] overflow-hidden rounded-lg bg-[#081d24]">
                    <div className="absolute inset-x-3 top-3">
                        <div className="h-1.5 w-20 rounded-full bg-white/60" />
                        <div className="mt-2 h-1 w-14 rounded-full bg-white/20" />
                    </div>

                    {/* Graph */}
                    <div className="absolute bottom-3 left-3 flex h-12 items-end gap-1">
                        {[20, 32, 15, 43, 28, 52, 34, 44, 57, 31].map(
                            (height, index) => (
                                <span
                                    key={index}
                                    className="w-2 rounded-t-sm bg-cyan-400"
                                    style={{ height }}
                                />
                            )
                        )}
                    </div>

                    <div className="absolute bottom-3 right-3 flex h-12 items-end gap-1">
                        {[18, 28, 38, 24, 45, 32].map((height, index) => (
                            <span
                                key={index}
                                className="w-2 rounded-t-sm bg-[#D4FB20]"
                                style={{ height }}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-2 flex gap-2 text-[6px] text-gray-500">
                    <span className="rounded bg-gray-100 px-2 py-1">
                        17 Lessons
                    </span>
                    <span className="rounded bg-gray-100 px-2 py-1">
                        2 hours 16 mins
                    </span>
                    <span className="rounded bg-gray-100 px-2 py-1">
                        59 Comments
                    </span>
                </div>

                <h3 className="mt-2 text-[11px] font-bold text-gray-900">
                    the Power of Big Data
                </h3>

                <div className="mt-0.5 flex justify-between">
                    <span className="text-[7px] text-blue-600">
                        by pureaspi studio
                    </span>

                    <span className="text-[9px]">
                        4.5 <span className="text-[#D4FB20]">★</span>
                    </span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-[7px]">
                        Beginner
                    </span>

                    <AvatarStack count="20+" />
                </div>

                <div className="mt-2 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-600">
                        $25
                    </span>

                    <span className="text-[7px] text-gray-400">
                        0 items
                    </span>
                </div>
            </div>

            {/* Lime ring */}
            <div className="absolute left-[20px] top-[20px] h-[48px] w-[48px] rotate-[-25deg] rounded-full border-[13px] border-[#D4FB20]" />

            {/* Bottom happy students */}
            <div className="absolute bottom-0 right-0 w-[130px] rounded-xl bg-[#D4FB20] p-3 shadow-lg">
                <p className="text-[9px] font-medium">Happy Students</p>

                <div className="mt-0.5 text-[7px]">
                    4.5/5 ★
                </div>

                <div className="mt-2 flex items-center">
                    <AvatarStack count="2K+" />
                </div>
            </div>

            {/* White abstract shape */}
            <div className="absolute bottom-[48px] right-[-8px] rotate-[-25deg]">
                <div className="h-5 w-12 rounded-full bg-white shadow-sm" />
                <div className="-mt-1 ml-2 h-5 w-12 rounded-full bg-white" />
                <div className="-mt-1 ml-5 h-5 w-10 rounded-full bg-white" />
            </div>

            {/* Yellow triangle */}
            <div
                className="absolute bottom-[5px] left-0 h-0 w-0 border-b-[65px] border-l-[38px] border-r-[38px] border-b-[#D4FB20] border-l-transparent border-r-transparent"
                style={{
                    transform: "rotate(-8deg)",
                }}
            />
        </div>
    );
};

const AuthLayout = ({
    children,
    type = "register",
}) => {
    const isRegister = type === "register";

    return (
        <div className="min-h-screen bg-black px-3 py-0 sm:px-4">
            <div
                className="
          relative mx-auto min-h-screen max-w-[1180px]
          overflow-hidden bg-[#073de3]
          bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
            >
                {/* Logo */}
                <div className="absolute left-8 top-5 z-20 sm:left-16">
                    <Logo />
                </div>

                <div className="mx-auto flex min-h-screen max-w-[1030px] items-center justify-between gap-10 px-6 pb-12 pt-20 sm:px-10 lg:px-0 lg:pt-10">
                    {/* LEFT SIDE */}
                    <div className="hidden w-[52%] self-stretch pt-12 lg:block">
                        <div className="max-w-[320px]">
                            <h2 className="text-[12px] font-medium text-white">
                                {isRegister
                                    ? "Sign up and come in"
                                    : "Sign in with ease"}
                            </h2>

                            <p className="mt-2 text-[9px] leading-[1.6] text-white/80">
                                {isRegister
                                    ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
                                    : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
                            </p>
                        </div>

                        <div className="mt-12">
                            <CoursePreview />
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex w-full justify-center lg:w-[48%] lg:justify-end">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;