import React from "react";

import { testimonials } from "../data/testimonials";

const CommunityTestimonials = () => {
    return (
        <section className="relative overflow-hidden bg-white py-20">
            {/* Background glows */}
            <div className="pointer-events-none absolute left-1/2  size-[220px] -translate-x-1/2 rounded-full bg-[#D4FB20] blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-50 -left-40 h-[500px] w-[550px] rounded-full bg-blue-200/80 blur-[110px]" />

            <div className="pointer-events-none absolute bottom-40 -right-60 h-[500px] w-[550px] rounded-full bg-[#D4FB20]/35 blur-[110px]" />

            <div className="relative section-container">

                {/* Heading + Description */}
                <div className="grid items-center gap-10 px-6 xl:px-0 md:text-left lg:grid-cols-2">
                    {/* Heading */}
                    <div>
                        <h2 className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-black md:text-5xl">
                            Discover What Our
                            <br />
                            Community Is Saying
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="lg:pl-8">
                        <p className="max-w-xl text-sm leading-8 text-gray-500 md:text-base">
                            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                        </p>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="mt-14 grid md:grid-cols-2 gap-10 xl:gap-20 lg:grid-cols-3 px-6 xl:px-0 justify-items-center">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="
                                rounded-[22px]
                                bg-white
                                p-6
                                shadow-sm
                                hover:shadow-md
                                ring-1 ring-black/[0.02]
                            "
                        >
                            {/* Avatar */}
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-[68px] w-[68px] rounded-full object-cover"
                            />

                            {/* Name */}
                            <h3 className="mt-5 text-base font-semibold text-gray-900">
                                {testimonial.name}
                            </h3>

                            {/* Role */}
                            <p className="mt-1 text-sm text-blue-700">
                                {testimonial.role}
                            </p>

                            {/* Testimonial */}
                            <p className="mt-6 text-[16px] description-font leading-7 tracking-wide text-gray-500">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityTestimonials;