import { useState } from 'react';

const Optimize = () => {
  const [isWithProxy, setIsWithProxy] = useState(true);
  return (
    <div className="bg-[#f7fafc] flex flex-col gap-10  py-10 md:py-20">
      <div className="w-[90%] mx-auto md:w-[85%] flex flex-col">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-[32px] md:text-[48px] font-secondary font-bold text-gray-700 tracking-[-.02em] text-center leading-[1.1]">
            Optimize Prisma for production workflows
          </h1>
          <p className="text-[18px] md:text-[24px] text-gray-500 font-[300] text-center mt-4">
            Gain better reliability, collaboration, and visibility when working
            with your database.
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto lg:w-[85%] flex flex-col md:flex-row justify-between gap-8 items-center mt-4 md:mt-0">
        <div className="w-full md:w-[50%] flex flex-col gap-12">
          <div className="flex items-center text-[16px] lg:text-[20px] font-semibold justify-center">
            <button
              className={`bg-[#319795] border-[#319795] border rounded-tl rounded-bl text-white py-1 px-4 ${
                isWithProxy
                  ? 'bg-[#319795] text-white'
                  : 'bg-transparent text-gray-400'
              }`}
              onClick={() => setIsWithProxy(true)}
            >
              With The Proxy
            </button>
            <button
              className={`bg-[#319795] border-[#319795] border rounded-tr rounded-br text-white py-1 px-4 ${
                !isWithProxy
                  ? 'bg-[#319795] text-white'
                  : 'bg-transparent text-gray-400'
              }`}
              onClick={() => setIsWithProxy(false)}
            >
              Without the Proxy
            </button>
          </div>
          {isWithProxy ? (
            <img src="https://imgur.com/abgr8yI.png" alt="Data" />
          ) : (
            <img src="https://imgur.com/abgr8yI.png" alt="Data" />
          )}
        </div>
        <div className="w-full md:w-[50%] flex flex-col">
          <h1 className="font-secondary text-[36px] lg:text-[36px] text-[#333] tracking-[-0.02em] mt-1 font-bold leading-[1.1] ">
            Serverless functions made easy
          </h1>
          <p className="font-primary text-[18px] leading-[1.4] text-gray-500 mt-4 font-[300]">
            When used with the ORM, the Data Proxy manages a connection pool to
            avoid that you're running out of connections during traffic spikes.
            It also drastically reduces Prisma Client's bundle size and makes
            your Serverless function start up faster.
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto lg:w-[85%] flex flex-col md:flex-row justify-between gap-8 items-center mt-8 md:mt-0">
        <div className="w-full md:w-[50%]">
          <img
            src="https://website-v9.vercel.app/illustrations/home-page/optimise-filter.svg"
            alt="Data"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col">
          <h1 className="font-secondary text-[36px] lg:text-[36px] text-[#333] tracking-[-0.02em] mt-1 font-bold leading-[1.1] ">
            Collaborate safely with your team
          </h1>
          <p className="font-primary text-[18px] leading-[1.4] text-gray-500 mt-4 font-[300]">
            Invite your colleagues and collaborate with appropriate permissions.
            Manage and verify your application data in the cloud with the Data
            Browser. Then test and troubleshoot Prisma queries directly from
            your browser using the Query Console.
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto lg:w-[85%] flex items-center mt-0: md:mt-8">
        <button className="bg-[#16a394] text-white py-2 px-5 rounded shadow-xl text-[20px] font-primary mx-auto flex items-center gap-4">
          Discover Prisma Data Platform
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Optimize;
