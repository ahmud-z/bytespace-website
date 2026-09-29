import React from "react";

const testimonials = [
    {
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        image:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
        text: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
    },
    {
        name: "James L.",
        role: "Lifelong Learner",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
    },
    {
        name: "Alex B.",
        role: "Inspired Creator",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
    },
];

const CommunityTestimonials = () => {
    return (
        <section className="relative overflow-hidden bg-white px-6 py-16 sm:px-10 lg:px-[9%] lg:py-[58px]">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 bottom-[-100px] h-[380px] w-[380px] rounded-full bg-blue-200/70 blur-[100px]" />

                <div className="absolute left-[42%] top-[-130px] h-[350px] w-[350px] rounded-full bg-lime-200/80 blur-[100px]" />

                <div className="absolute right-[-100px] top-[100px] h-[350px] w-[350px] rounded-full bg-lime-100/70 blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1200px]">
                {/* Header */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h2 className="max-w-[390px] text-[32px] font-bold leading-[1.12] tracking-[-1.2px] text-black sm:text-[40px]">
                            Discover What Our
                            <br />
                            Community Is Saying
                        </h2>
                    </div>

                    <div className="max-w-[540px] lg:pt-1">
                        <p className="text-[13px] leading-[1.65] text-gray-600 sm:text-[14px]">
                            At ByteSpace, our vibrant community of learners and creators is
                            at the heart of what we do. Hear directly from those who have
                            experienced the transformative journey of learning and creating
                            on our platform. Explore testimonials that reflect the diverse
                            perspectives of enthusiastic learners and accomplished creators.
                        </p>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-12 lg:gap-7">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="rounded-[17px] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.025)] sm:p-5"
                        >
                            {/* Profile */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-14 w-14 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="text-[14px] font-bold text-black">
                                        {testimonial.name}
                                    </h3>

                                    <p className="mt-0.5 text-[12px] text-blue-600">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial */}
                            <p className="mt-7 text-[13px] leading-[1.65] text-gray-600">
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