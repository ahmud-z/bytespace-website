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
                p-4
                hover:cursor-pointer
            "
        >
            {/* Course Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                <img
                    src={image}
                    alt={title}
                    className="
                        relative h-full w-full object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap text-[11px] lg:text-[13px]">
                    <span className="rounded-full bg-gray-100/80 px-2.5 text-gray-700 py-1">
                        17 Lessons
                    </span>

                    <span className="rounded-full bg-gray-100/80 px-2.5 text-gray-700 py-1">
                        2 hours 16 mins
                    </span>

                    <span className="rounded-full bg-gray-100/80 px-2.5 text-gray-700 py-1">
                        59 comments
                    </span>
                </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col">

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
                    <div className="flex shrink-0 items-center gap-1">
                        <span className="text-base font-medium text-gray-500">
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
export default CourseCard;
