import { useState } from 'react';

const Hero = () => {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className="bg-gray-100/40 py-10 md:py-20 mt-[66px]">
      <div className="w-[90%] lg:min-w-[80%] mx-auto h-full flex  flex-col lg:flex-row gap-8 items-center">
        <div className="flex-[0.57]  mt-8 ">
          <h1 className="text-[40px] md:text-[60px] leading-[1.1] font-[700] text-gray-800 selection:bg-slate-800/90 selection:text-white tracking-[-0.02em]">
            Next-generation <span className="text-primary">Node.js</span> and{' '}
            <span className="text-primary">TypeScript</span> ORM
          </h1>
          <p className="text-[24px] mt-8 text-gray-500 selection:bg-slate-700 selection:text-white font-[300]">
            Prisma unlocks a new level of{' '}
            <span className="font-bold text-gray-600">
              developer experience
            </span>{' '}
            when working with databases thanks to its intuitive data model,
            automated migrations, type-safety &amp; auto-completion.
          </p>
          <button className="bg-secondary text-white py-2 px-4 rounded shadow text-[20px] font-[500] mt-8">
            Quickstart
          </button>
        </div>
        <div className="flex-[0.40] self-stretch lg:self-center  cursor-pointer">
          <iframe
            className={`w-full ${!isPlay && 'hidden'}  lg:h-[287px]`}
            height="287"
            title="What Is Prisma"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/EEDGwLB55bI"
          ></iframe>

          <img
            className={`${isPlay && 'hidden'}`}
            onClick={() => setIsPlay(true)}
            src="https://www.prisma.io/home-page/video_thumbnail_homepage.png"
            alt="What Is Prisma?"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
