import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100/40 py-20 mt-[66px]">
      <div className="container mx-auto h-full flex items-center">
        <div className="flex-[0.55] mt-8 mr-8">
          <h1 className="text-[60px] leading-[1.1] font-[600] text-gray-800">
            Next-generation <span className="text-indigo-500">Node.js</span> and{' '}
            <span className="text-indigo-500">TypeScript</span> ORM
          </h1>
          <p className="text-[24px] mt-8 text-gray-500">
            Prisma unlocks a new level of{' '}
            <span className="font-bold text-gray-600">
              developer experience
            </span>{' '}
            when working with databases thanks to its intuitive data model,
            automated migrations, type-safety &amp; auto-completion.
          </p>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-xl text-[20px] font-[500] mt-8">
            Quickstart
          </button>
        </div>
        <div className="flex-[0.45] cursor-pointer">
          <img
            src="https://www.prisma.io/home-page/video_thumbnail_homepage.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
