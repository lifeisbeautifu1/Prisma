import { useState, useEffect } from 'react';
import { FaGithub, FaRocket } from 'react-icons/fa';

const slides = [
  {
    name: 'Lasse Abelsen, DevOps Engineer at ',
    text: `“Our setup with Prisma enabled us to generate everything from code and ensure our developers can iterate very quickly.”`,
    company: 'Tryg',
  },
  {
    name: 'Serghei Ghidora, Tech Lead at ',
    text: `“The flexibility of moving fast and changings the product based on user feedback fast was crucial”`,
    company: 'Elsevier',
  },
  {
    name: 'Tom Hutchinson, Head of Mobile at ',
    text: `“Prisma help usunify data access from multiple enteprise systems into a single API. It means we can move very quickly whilst staying flexible.”`,
    company: 'Rapha',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === 2 ? 0 : currentIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="gradient w-full ">
      <div className="w-[90%] xl:max-w-[65%] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 md:flex-row items-center justify-between pt-12 text-white">
          <p className="flex items-center cursor-pointer">
            <FaGithub className="text-[38px] mr-4" />
            <span className="font-secondary text-[30px] md:text-[38px] font-bold mr-2">
              25K+
            </span>
            <span className="font-primary text-[16px] md:text-[24px] mt-2">
              Stars on GitHub
            </span>
          </p>
          <p className="flex items-center cursor-pointer">
            {/* <img
              className="h-10 w-10 mr-4"
              src="https://www.prisma.io/home-page/icons/subtract.svg"
              alt="Rocket"
            /> */}
            <FaRocket className="text-[38px] mr-4" />

            <span className="font-secondary text-[30px] md:text-[38px] font-bold mr-2">
              250K+
            </span>
            <span className="font-primary text-[16px] md:text-[24px] mt-2">
              Active Developers
            </span>
          </p>
        </div>
        <div className="w-full h-full min-h-[250px] rounded-md shadow-xl bg-white py-12 px-16 flex justify-end overflow-hidden flex-col gap-4  items-center relative">
          {slides.map((slide, index) => {
            let position = 'nextSlide';
            if (index === currentIndex) {
              position = 'active';
            }
            if (
              index === currentIndex - 1 ||
              (currentIndex === 0 && index === slides.length - 1)
            ) {
              position = 'prevSlide';
            }
            return (
              <div
                key={index}
                className={`slide absolute ${position} top-8 lg:top-16 flex flex-col items-center gap-4 w-[85%]`}
              >
                <p className="text-[16px] md:text-[22px] text-center font-[600] text-gray-500">
                  {slide.text}
                </p>
                <p className="text-[14px] md:text-[18px] text-gray-400 text-center">
                  <span>{slide.name}</span>
                  <span className="font-[700]">{slide.company}</span>
                </p>
              </div>
            );
          })}

          <div className="absolute bottom-4 md:bottom-6 flex items-center gap-4">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                onClick={() => setCurrentIndex(item)}
                className={`h-[10px] w-[10px] rounded-full bg-gray-300 cursor-pointer ${
                  item === currentIndex && 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
