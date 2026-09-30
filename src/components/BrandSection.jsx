const brands = [
    "/brand-logo/brand-logo-1.png",
    "/brand-logo/brand-logo-2.png",
    "/brand-logo/brand-logo-3.png",
    "/brand-logo/brand-logo-4.png",
    "/brand-logo/brand-logo-5.png",
];

const BrandSection = () => {
    return (
        <section className="bg-[#F5F5F6] py-12 sm:py-16 lg:py-20">
            <div
                className="
                    section-container
                    mx-auto
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-x-10
                    gap-y-8
                    px-6

                    sm:gap-x-12
                    sm:gap-y-10

                    md:justify-between
                    md:gap-x-8

                    lg:px-6
                "
            >
                {brands.map((logo, index) => (
                    <div
                        key={index}
                        className="
                            flex
                            w-[120px]
                            items-center
                            justify-center

                            sm:w-[140px]

                            md:w-auto
                            md:flex-1
                        "
                    >
                        <img
                            src={logo}
                            alt={`Brand ${index + 1}`}
                            className="
                                max-h-8
                                w-auto
                                max-w-[130px]
                                object-contain
                                opacity-80
                                transition
                                duration-300
                                hover:opacity-100

                                sm:max-h-9
                                sm:max-w-[140px]

                                lg:max-h-10
                                lg:max-w-[160px]
                            "
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandSection;