import { Network, Star } from "lucide-react";
import React from "react";

const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
];

const courses = [
    {
        title: "Learn Figma from Basic",
        image: "/course-banners/course-banner-1.png",
    },
    {
        title: "Build Digital Asset",
        image: "/course-banners/course-banner-2.png",
    },
    {
        title: "The Power of Big Data",
        image: "/course-banners/course-banner-3.png",
    },
    {
        title: "Balancing Productivity and Self-Care",
        image: "/course-banners/course-banner-4.png",
    },
    {
        title: "Mastering Money Management",
        image: "/course-banners/course-banner-5.png",
    },
    {
        title: "From Idea to Startup Success",
        image: "/course-banners/course-banner-6.png",
    },
];

const CourseCard = ({ title, image }) => {
    return (
        <div
            className="
                group flex h-full flex-col overflow-hidden
                rounded-2xl
                border border-gray-200
                bg-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-md
            "
        >
            {/* Course Image */}
            <div className="relative aspect-[16/10] overflow-hidden p-4">
                <img
                    src={image}
                    alt={title}
                    className="
                        h-full w-full object-cover rounded-2xl
                        transition-transform duration-500
                        group-hover:scale-101
                    "
                />
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col p-5">

                {/* Title + Rating */}
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <h2 className="line-clamp-2 text-lg font-semibold leading-snug text-gray-900">
                            {title}
                        </h2>

                        <p className="mt-1.5 text-xs text-gray-500">
                            by{" "}
                            <a
                                href="#"
                                className="font-medium text-blue-600"
                            >
                                purepearl studio
                            </a>
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="flex shrink-0 items-center gap-1 px-2 py-1">
                        <span className="text-md font-medium text-gray-500">
                            4.5
                        </span>

                        <img src="/icons/star-icon.png" alt="" className="w-3.5" />
                    </div>
                </div>

                {/* Level + Students */}
                <div className="mt-6 flex items-center space-x-4">

                    {/* Level */}
                    <div
                        className="
                            flex items-center gap-2
                            rounded-full bg-gray-100
                            px-3 py-1.5
                            text-xs text-gray-500
                        "
                    >
                        <img src="/icons/network-icon.png" alt="" />
                        <span>Beginner</span>
                    </div>

                    {/* Students */}
                    <div className="flex items-center">
                        <div className="flex -space-x-2">
                            <img
                                src="/avaters/avater-1.png"
                                alt=""
                                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                            />

                            <img
                                src="/avaters/avater-2.png"
                                alt=""
                                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                            />

                            <img
                                src="/avaters/avater-3.png"
                                alt=""
                                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                            />

                            <img
                                src="/avaters/avater-4.png"
                                alt=""
                                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                            />

                            <span
                                className="
                                    flex h-7 min-w-7 items-center
                                    justify-center
                                    rounded-full
                                    border-2 border-white
                                    bg-[#D4FB20]
                                    px-1
                                    text-[9px]
                                    font-semibold
                                    text-black
                                "
                            >
                                26+
                            </span>
                        </div>
                    </div>
                </div>

                {/* Price */}
                <div className="mt-auto">
                    <div className="border-gray-100 pt-4">
                        <p className="text-lg font-bold text-blue-700">
                            $25
                            <span className="text-xs font-normal text-gray-500">
                                /lifetime
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CourseSection = () => {
    return (
        <section className="bg-white px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div className="mx-auto max-w-3xl text-center">

                    <h1
                        className="
                            text-4xl font-semibold
                            leading-[1.15]
                            tracking-tight
                            text-gray-900
                            md:text-5xl
                        "
                    >
                        Discover Your Passion,
                        <br />
                        Build Your Skills
                    </h1>

                    <p
                        className="
                            mx-auto mt-5
                            max-w-2xl
                            text-sm
                            leading-7
                            text-gray-500
                            md:text-base
                        "
                    >
                        At Bytespace Courses, we bring you closer to
                        life-changing knowledge. Explore a variety of
                        courses across different fields, from technology
                        to the arts, and make a difference in your career
                        and life.
                    </p>
                </div>

                {/* ================= CATEGORIES ================= */}
                <div
                    className="
                        mx-auto mt-10
                        flex max-w-5xl
                        flex-wrap
                        justify-center
                        gap-3
                    "
                >
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            className={`
                                rounded-full
                                px-5 py-2.5
                                text-sm
                                font-medium
                                whitespace-nowrap
                                transition-all duration-200
                                ${index === 0
                                    ? `
                                            bg-[#D4FB20]
                                            text-black
                                            shadow-sm
                                            hover:bg-lime-300
                                            hover:shadow-md
                                        `
                                    : `
                                            bg-gray-100
                                            text-gray-700
                                            hover:bg-gray-200
                                            hover:text-gray-900
                                        `
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}

                    <button
                        className="
                            rounded-full
                            px-5 py-2.5
                            text-sm font-medium
                            text-blue-600
                            transition-colors
                            hover:bg-blue-50
                        "
                    >
                        + More
                    </button>
                </div>

                {/* ================= COURSES ================= */}
                <div
                    className="
                        mt-14
                        grid
                        gap-7
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {courses.map((course) => (
                        <CourseCard
                            key={course.title}
                            title={course.title}
                            image={course.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseSection;