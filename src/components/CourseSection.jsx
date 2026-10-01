import CourseCard from "./CourseCard";
import { courseCategories } from "../data/courseCategories";
import { courses } from "../data/courses";

const CourseSection = () => {
    return (
        <section className="bg-white py-20 section-container">
            <div className="">

                {/*  HEADER  */}
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
                            px-2
                            sm:px-0
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

                {/*  CATEGORIES  */}
                <div
                    className="
                        mx-auto mt-10
                        flex max-w-5xl
                        flex-wrap
                        justify-center
                        gap-3
                        px-0
                        md:px-1
                        lg-px-0
                    "
                >
                    {courseCategories.map((category, index) => (
                        <button
                            key={category}
                            className={`
                                rounded-full
                                px-5 py-2.5
                                text-sm
                                whitespace-nowrap
                                cursor-pointer
                                transition-all duration-200
                                ${index === 0
                                    ? `
                                            bg-[#D4FB20]
                                            text-black
                                            shadow-sm
                                            hover:bg-[#D4FB20]
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
                            cursor-pointer
                            text-blue-700
                            transition-colors
                            hover:bg-blue-50
                        "
                    >
                        + More
                    </button>
                </div>

                {/*  COURSES  */}
                <div
                    className="
                        mt-14
                        grid
                        gap-7
                        sm:grid-cols-2
                        lg:grid-cols-3
                        px-6
                        md-px-0
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