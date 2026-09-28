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
        image: "/courses/figma.jpg",
    },
    {
        title: "Build Digital Asset",
        image: "/courses/digital-asset.jpg",
    },
    {
        title: "The Power of Big Data",
        image: "/courses/big-data.jpg",
    },
    {
        title: "Balancing Productivity and Self-Care",
        image: "/courses/productivity.jpg",
    },
];

const CourseCard = ({ title, image }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Course Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Title + Rating */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-semibold leading-snug text-gray-900">
                            {title}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            by{" "}
                            <a
                                href="#"
                                className="font-medium text-gray-900 hover:text-blue-600"
                            >
                                purepearl studio
                            </a>
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-1">
                        <span className="text-sm font-medium text-gray-700">4.5</span>
                        <Star
                            size={15}
                            className="fill-yellow-400 text-yellow-400"
                        />
                    </div>
                </div>

                {/* Level + Students */}
                <div className="mt-6 flex items-center justify-between">
                    {/* Level */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Network size={16} />
                        <span>Beginner</span>
                    </div>

                    {/* Students */}
                    <div className="flex items-center">
                        <div className="flex -space-x-2">
                            <img
                                src="/dp-1.jpg"
                                alt=""
                                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                            />
                            <img
                                src="/dp-2.jpg"
                                alt=""
                                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                            />
                            <img
                                src="/dp-3.jpg"
                                alt=""
                                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                            />
                            <img
                                src="/dp-4.jpg"
                                alt=""
                                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                            />

                            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-white bg-lime-400 px-1 text-[10px] font-semibold text-black">
                                26+
                            </span>
                        </div>
                    </div>
                </div>

                {/* Price */}
                <div className="mt-5 border-t border-gray-100 pt-4">
                    <p className="text-lg font-semibold text-gray-900">
                        $25
                        <span className="ml-1 text-sm font-normal text-gray-500">
                            / lifetime
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const CourseSection = () => {
    return (
        <section className="bg-white px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl text-center">
                        Discover Your Passion,
                        <br />
                        Build Your Skills
                    </h1>

                    <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base text-center">
                        At Bytespace Courses, we bring you closer to life-changing
                        knowledge. Explore a variety of courses across different fields,
                        from technology to the arts, and make a difference in your career
                        and life.
                    </p>
                </div>

                {/* Categories */}
                <div className="mt-10 flex flex-wrap gap-3">
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${index === 0
                                ? "bg-lime-400 text-black hover:bg-lime-300"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}

                    <button className="rounded-full px-5 py-2.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50">
                        + More
                    </button>
                </div>

                {/* Courses */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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