import { courseFields } from "../data/courseFields";

export default function CategoriesSection() {
    return (
        <section className="pt-4 pb-26">
            <div className="section-container px-6 md-px-0">

                {/*  HEADING  */}
                <div className="mx-auto max-w-4xl text-center">
                    <h2
                        className="
                            text-2xl
                            font-semibold
                            leading-tight
                            tracking-[-0.7px]
                            text-[#101426]

                            sm:text-3xl

                            lg:text-4xl
                        "
                    >
                        Explore Diverse Learning Paths at Bytespace
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-4xl
                            text-sm
                            leading-7
                            text-gray-400

                            sm:text-[15px]
                            sm:leading-[1.8]
                        "
                    >
                        At Bytespace, we believe in empowering individuals
                        through knowledge. Our diverse range of courses spans
                        various fields, ensuring there's something for everyone.
                        Unleash your potential and explore our carefully curated
                        categories.
                    </p>
                </div>

                {/*  CATEGORIES  */}
                <div
                    className="
                        section-container
                        mt-10
                        grid
                        grid-cols-2
                        gap-3
                        sm:grid-cols-3
                        sm:gap-4
                        md:grid-cols-4
                        lg:mt-14
                        lg:grid-cols-5
                        lg:gap-8
                        xl:grid-cols-6
                    "
                >
                    {courseFields.map(({ name, icon }) => (
                        <button
                            key={name}
                            type="button"
                            className="
                                group
                                py-8
                                flex
                                min-h-[125px]
                                w-full
                                flex-col
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-gray-200
                                text-center

                                transition-all
                                duration-200
                                hover:-translate-y-1
                                hover:border-[#c8ff00]
                                hover:shadow-md

                                active:scale-[0.98]
                            "
                        >
                            {/* Icon */}
                            <span
                                className="
                                    flex
                                    h-14
                                    w-14
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#c8ff00]

                                    transition-transform
                                    duration-200

                                    group-hover:scale-105
                                "
                            >
                                <img
                                    src={icon}
                                    alt=""
                                    className="h-7.5 w-7.5 object-contain"
                                />
                            </span>

                            {/* Category Name */}
                            <span
                                className="
                                    mt-3
                                    line-clamp-2
                                    text-xs
                                    font-medium
                                    leading-5
                                    text-[#222]

                                    sm:text-sm
                                "
                            >
                                {name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}