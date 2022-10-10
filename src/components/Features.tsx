const Features = () => {
  return (
    <div className='light-gradient pt-12 pb-8 md:pt-32 flex flex-col gap-8'>
      <div className='w-[90%]  mx-auto lg:min-w-[80%] flex flex-col md:flex-row  justify-between gap-8 items-start mt-8 md:mt-0'>
        <div className='w-full md:w-[50%]'>
          <img
            src='https://www.prisma.io/home-page/hasslefree-migrations.svg'
            alt='Migrations'
          />
        </div>
        <div className='w-full md:w-[50%] flex flex-col'>
          <h2 className='font-secondary text-[20px] text-secondary uppercase font-[700] tracking-[0.1em]'>
            Prisma Studio
          </h2>
          <h1 className='font-secondary text-[32px] lg:text-[48px] text-[#333] tracking-[-0.02em] mt-1 font-bold leading-[1.1] w-full '>
            Visual Database Browser
          </h1>
          <p className='font-primary text-[18px] leading-[1.4] text-gray-500 mt-8 font-[300]'>
            Prisma Studio is the easiest way to explore and manipulate data in
            your Prisma projects. Understand your data by browsing across
            tables, filter, paginate, traverse relations and edit your data with
            safety.
          </p>
          <button className='font-primary bg-secondary text-white  shadow rounded py-3 px-6 mt-8 text-[18px] hover:bg-primary self-start'>
            Learn more
          </button>
        </div>
      </div>
      <div className='mx-auto h-[1px] w-[300px] bg-secondary/20 my-8 md:my-12'></div>
      <div className='w-[90%]  mx-auto lg:min-w-[80%] flex flex-col md:flex-row  justify-between gap-8 items-start'>
        <div className='w-full md:w-[50%]'>
          <img
            src='https://www.prisma.io/home-page/visual-database.svg'
            alt='Database'
          />
        </div>
        <div className='w-full md:w-[50%] flex flex-col'>
          <h2 className='font-secondary text-[20px] text-secondary uppercase font-[700] tracking-[0.1em]'>
            Prisma Migrate
          </h2>
          <h1 className='font-secondary text-[32px] lg:text-[48px] text-[#333] tracking-[-0.02em] mt-1 font-bold leading-[1.1] w-full '>
            Hassle-free migrations
          </h1>
          <p className='font-primary text-[18px] leading-[1.4] text-gray-500 mt-8 font-[300]'>
            Prisma Migrate auto-generates SQL migrations from your Prisma
            schema. These migration files are fully customizable, giving you
            full control and ultimate flexibility — from local development to
            production environments.
          </p>
          <button className='font-primary bg-secondary text-white  shadow rounded py-3 px-6 mt-8 text-[18px] hover:bg-primary self-start'>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
