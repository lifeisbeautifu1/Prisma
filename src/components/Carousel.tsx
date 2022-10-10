import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index === 2 ? 0 : index + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <div className='gradient w-full '>
      <div className='w-[90%] xl:max-w-[65%] mx-auto flex flex-col gap-12'>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-between pt-12 text-white'>
          <p className='flex items-center cursor-pointer'>
            <FaGithub className='text-[38px] mr-4' />
            <span className='font-secondary text-[38px] font-bold mr-2'>
              25K+
            </span>
            <span className='font-primary text-[24px] mt-2'>
              Stars on GitHub
            </span>
          </p>
          <p className='flex items-center cursor-pointer'>
            <img
              className='h-10 w-10 mr-4'
              src='https://www.prisma.io/home-page/icons/subtract.svg'
              alt='Rocket'
            />

            <span className='font-secondary text-[38px] font-bold mr-2'>
              250K+
            </span>
            <span className='font-primary text-[24px] mt-2'>
              Active Developers
            </span>
          </p>
        </div>
        <div className='w-full h-full min-h-[250px] rounded-md shadow-xl bg-white py-12 px-16 flex flex-col gap-4 justify-between items-center'>
          {index === 0 && (
            <div className='flex flex-col items-center gap-4'>
              <p className='text-[22px] text-center font-[600] text-gray-500'>
                “Our setup with Prisma enabled us to{' '}
                <span className='text-primary'>
                  generate everything from code
                </span>{' '}
                and ensure our developers can iterate very quickly.”
              </p>
              <p className='text-[18px] text-gray-400 text-center'>
                <span>Lasse Abelsen, DevOps Engineer at </span>
                <span className='font-[700]'>Tryg</span>
              </p>
            </div>
          )}
          {index === 1 && (
            <div className='flex flex-col items-center gap-4'>
              <p className='text-[22px] text-center font-[600] text-gray-500'>
                “The flexibility of{' '}
                <span className='text-primary'>moving fast</span> and changing
                the product based on user feedback fast was crucial”
              </p>
              <p className='text-[18px] text-gray-400 text-center'>
                <span>Serghei Ghidora, Tech Lead at </span>
                <span className='font-[700]'>Elsevier</span>
              </p>
            </div>
          )}
          {index === 2 && (
            <div className='flex flex-col items-center gap-4'>
              <p className='text-[22px] text-center font-[600] text-gray-500'>
                “Prisma help us{' '}
                <span className='text-primary'>unify data access</span> from
                multiple enteprise systems into a single API. It means we can
                move very quickly whilst staying flexible.”
              </p>
              <p className='text-[18px] text-gray-400 text-center'>
                <span>Tom Hutchinson, Head of Mobile at </span>
                <span className='font-[700]'>Rapha</span>
              </p>
            </div>
          )}

          <div className='flex items-center gap-4'>
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                onClick={() => setIndex(item)}
                className={`h-[10px] w-[10px] rounded-full bg-gray-300 cursor-pointer ${
                  item === index && 'bg-gray-400'
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
