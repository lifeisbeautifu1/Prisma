const Question = () => {
  return (
    <div>
      <div className='pt-24 pb-12 w-[90%] lg:w-[80%] mx-auto flex flex-col gap-4 items-center'>
        <h1 className='text-gray-800 font-secondary text-[32px] md:text-[48px] font-bold text-center'>
          How does Prisma fit in your stack?
        </h1>
        <p className='text-[18px] text-gray-500 text-center'>
          Prisma is a server-side library that helps developers read and write
          data to the database in an intuitive, efficient and safe way.
        </p>
        <img
          className='mt-12'
          src='
        https://www.prisma.io/home-page/prisma-stack-fit.svg'
          alt='stack-fit'
        />
      </div>
      <div className='bg-white rounded shadow-xl border border-gray-100 p-12 w-[90%] lg:w-[80%] mx-auto flex flex-col gap-2 mb-20'>
        <h1 className='text-[24px] md:text-[36px] font-primary text-gray-700 font-bold tracking-[-0.02em]'>
          The ORM that plays well with your favorite framework
        </h1>
        <p className='text-[18px] text-[#4a5568] font-[300]'>
          Easy to integrate into your framework of choice, Prisma simplifies
          database access, saves repetitive CRUD boilerplate and increases type
          safety. It's the perfect companion for building production-grade,
          robust and scalable web applications.
        </p>
        <div className='mt-12 mb-8 flex gap-12 flex-wrap items-center justify-center'>
          <div>
            <img
              src='https://www.prisma.io/home-page/icons/nextjs.svg'
              alt='NextJS'
            />
          </div>
          <div>
            <img
              src='https://www.prisma.io/home-page/icons/graphql.svg'
              alt='GraphQL'
            />
          </div>
          <div>
            <img
              src='https://www.prisma.io/home-page/icons/apollo.svg'
              alt='Apollo'
            />
          </div>
          <div>
            <img
              src='https://www.prisma.io/home-page/icons/hapi.svg'
              alt='Hapi'
            />
          </div>
          <div>
            <img
              src='https://www.prisma.io/home-page/icons/nest.svg'
              alt='Nest'
            />
          </div>
          <div>
            <img
              src='https://www.prisma.io/home-page/icons/express.svg'
              alt='Express'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row  justify-center gap-4 mt-4'>
          <button className='py-3 px-6 bg-secondary hover:bg-primary text-white rounded shadow-xl text-[16px] md:text-[18px]'>
            Browse Examples on GitHub
          </button>
          <button className='py-3 px-6 border-2 border-secondary hover:border-primary hover:text-primary text-secondary rounded shadow-xl text-[16px] md:text-[18px]'>
            More About Prisma in your Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
