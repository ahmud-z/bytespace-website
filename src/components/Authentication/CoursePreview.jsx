import React from "react";
import HappyStudentsCard from "../HappyStudentsCard";
import CourseCard from "../CourseCard";

const CoursePreview = () => {
    return (
        <div
            className="
                relative
                h-[520px]
                w-[440px]                
            "
        >
            {/*  BACK COURSE CARD  */}

            <div
                className="
                    absolute
                    left-0
                    top-[78px]
                    z-10
                    w-[300px]
                    xl:w-[350px]
                    ml-10
                    xl:ml-0
                "
            >
                <CourseCard
                    title="Build Digital Asset"
                    image="/course-banners/course-banner-2.png"
                />
            </div>

            {/*  FRONT COURSE CARD  */}

            <div
                className="
                    absolute
                    left-[100px]
                    top-0
                    z-20
                    w-[300px]
                    xl:w-[350px]
                    ml-10
                    xl:ml-0
                "
            >
                <CourseCard
                    title="the Power of Big Data"
                    image="/course-banners/course-banner-3.png"
                />
            </div>

            {/*  LIME DONUT  */}

            <div
                className="
                    absolute
                    left-[20px]
                    top-0
                    z-30
                "
            >
                <img
                    src="/3d-ornaments/donut-lime.png"
                    alt=""
                    className="w-[150px]"
                />
            </div>

            {/*  WHITE SPIRAL  */}

            <div
                className="
                    absolute
                    right-[-48px]
                    top-[310px]
                    z-50
                "
            >
                <img
                    src="/3d-ornaments/spiral-white.png"
                    alt=""
                    className="w-[168px]"
                />
            </div>

            {/*  GREEN CONE  */}

            <div
                className="
                    absolute
                    left-5
                    top-[370px]
                    z-20
                "
            >
                <img
                    src="/3d-ornaments/cone-green.png"
                    alt=""
                    className="w-[120px]"
                />
            </div>

            {/*  HAPPY STUDENTS  */}

            <div
                className="
                    absolute
                    bottom-[-5px]
                    right-0
                    z-40
                    origin-bottom-right
                    scale-[0.35]
                "
            >
                <HappyStudentsCard color='lime' />
            </div>
        </div>
    );
};

export default CoursePreview;