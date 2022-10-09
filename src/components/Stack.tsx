const Stack = () => {
  return (
    <div>
      <div className="w-[90%] lg:min-w-[80%] mx-auto flex flex-col xl:flex-row gap-12 mt-20 justify-between items-center mb-12">
        <div className="flex flex-col gap-8 cursor-pointer group relative">
          <h1 className="font-[700] text-gray-400 uppercase font-secondary text-[18px] tracking-[.1em] text-center">
            Supported Languages
          </h1>
          <div className="font-primary text-[20px] flex items-center gap-4">
            <span className="py-2 px-3 bg-[#edf2f7] font-[600] text-gray-600 rounded">
              JavaScript
            </span>
            <span className="py-2 px-3 bg-[#edf2f7] font-[600] text-gray-600 rounded">
              TypeScript
            </span>
          </div>
          <div className="group-hover:flex hidden bg-white/40 w-full h-full absolute inset-0 items-center justify-center">
            <span className="py-2 px-3 bg-[#edf2f7] font-[600] text-gray-600 rounded text-[18px] flex items-center gap-1">
              Prisma in your stack{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8 cursor-pointer group relative">
          <h1 className="font-[700] text-gray-400 uppercase font-secondary text-[18px] tracking-[.1em] text-center">
            Supported Databases
          </h1>
          <div className="font-primary text-[20px]  flex flex-wrap items-center justify-center gap-4">
            <span className="py-2 px-3 bg-[#edf2f7] font-[600] text-gray-600 rounded">
              PostgreSQL
            </span>
            <span className="py-2 px-3 bg-[#edf2f7] font-[600] text-gray-600 rounded">
              MySQL
            </span>
            <span className="py-2 px-3 bg-[#edf2f7] font-[600] text-gray-600 rounded">
              SQLite
            </span>
            <span className="py-2 px-3 bg-[#edf2f7] font-[600] text-gray-600 rounded">
              SQL Server
            </span>
            <span className="py-2 px-3 bg-[#edf2f7] font-[600] text-gray-600 rounded">
              MongoDB
            </span>
            <span className="py-2 px-3 bg-[#edf2f7] font-[600] text-gray-600 rounded">
              CockroachDB
            </span>
          </div>
          <div className="group-hover:flex hidden bg-white/40 w-full h-full absolute inset-0 items-center justify-center">
            <span className="py-2 px-3 bg-[#edf2f7] font-[600] text-gray-600 rounded text-[18px] flex items-center gap-1">
              Prisma in your stack{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
