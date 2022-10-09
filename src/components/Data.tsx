const Data = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto lg:min-w-[80%] flex flex-col md:flex-row justify-between gap-8 items-center mt-8 md:mt-0">
        <div className="w-full md:w-[50%] flex flex-col">
          <h2 className="font-secondary text-[20px] text-gray-400 uppercase font-[700] tracking-[0.1em]">
            Prisma Schema
          </h2>
          <h1 className="font-secondary text-[32px] lg:text-[48px] text-[#333] tracking-[-0.02em] mt-1 font-bold leading-[1.1] w-full lg:w-[70%]">
            Data model you can read
          </h1>
          <p className="font-primary text-[20px] leading-[1.4] text-gray-500 mt-4 w-[95%] lg:w-[85%] font-[300]">
            The Prisma schema is intuitive and lets you declare your database
            tables in a human-readable way — making your data modeling
            experience a delight. You define your models by hand or introspect
            them from an existing database.
          </p>
          <button className="font-primary bg-[#319795] text-white  shadow rounded py-3 px-6 mt-8 text-[18px] hover:bg-[#2c7a7b] self-stretch md:self-start">
            Learn more about prisma schema
          </button>
        </div>
        <div className="w-full md:w-[50%]">
          <img src="https://www.prisma.io/home-page/schema.svg" alt="Data" />
        </div>
      </div>
    </div>
  );
};

export default Data;
