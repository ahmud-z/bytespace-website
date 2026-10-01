import { students } from "../data/students";



const HappyStudentsCard = () => {
    return (
        <div
            className="
        relative w-full max-w-[710px]
        rounded-[42px]
        bg-white
        px-8 py-8
        shadow-[0_10px_35px_rgba(0,0,0,0.08)]
        sm:px-11 sm:py-10
      "
        >
            {/* Heading */}
            <h2
                className="
          text-[36px] font-normal leading-none
          tracking-[-1.5px] text-[#29292d]
          sm:text-[43px]
        "
            >
                Happy Students
            </h2>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
                <span className="text-[32px] font-normal leading-none text-[#29292d] sm:text-[34px]">
                    4.5
                </span>

                <span className="text-[30px] font-normal leading-none text-gray-400 sm:text-[34px]">
                    (240)
                </span>

                {/* Star */}
                <span
                    className="
            ml-1 text-[42px] leading-none
            text-[#D4FB20]
          "
                >
                    ★
                </span>
            </div>

            {/* Students */}
            <div className="mt-7 flex items-center">
                {/* Avatars */}
                <div className="flex">
                    {students.map((student, index) => (
                        <div
                            key={student.name}
                            className={`
                relative h-[82px] w-[82px]
                overflow-hidden rounded-full
                border-[2px] border-white
                ${index !== 0 ? "-ml-[12px]" : ""}
              `}
                        >
                            <img
                                src={student.image}
                                alt={student.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* 2K+ circle */}
                <div
                    className="
            relative z-10
            -ml-[8px]
            flex h-[118px] w-[118px]
            shrink-0 items-center justify-center
            rounded-full
            bg-[#D4FB20]
          "
                >
                    <span
                        className="
              text-[34px] font-medium
              tracking-[-1px] text-[#202020]
            "
                    >
                        2K+
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HappyStudentsCard;