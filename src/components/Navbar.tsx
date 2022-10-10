import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='bg-white font-primary fixed  z-[10] top-0 left-0 right-0'>
      <div className='w-[90%] lg:min-w-[80%] mx-auto flex items-center justify-between'>
        <Link to='/'>
          <img src='https://website-v9.vercel.app/logo-dark.svg' alt='logo' />
        </Link>
        <ul className='flex items-center gap-12 text-gray-700'>
          <li className='py-5 hover:text-indigo-400 transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 cursor-pointer group font-[500]'>
            <Link to='/' className='flex items-center gap-1'>
              Product
              <FiChevronDown className='transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]' />
            </Link>
          </li>
          <li className='py-5 hover:text-indigo-400 transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 cursor-pointer font-[500]'>
            <Link to='/' className='flex items-center gap-1'>
              Docs
            </Link>
          </li>
          <li className='py-5  transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 group font-[500] relative group'>
            <Link
              to='/'
              className='flex items-center gap-1 transition duration-100 hover:text-indigo-400'
            >
              Developer
              <FiChevronDown className='transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]' />
            </Link>
            <div className='hidden z-[10] cursor-default group-hover:block  w-[450px] bg-transparent absolute top-[100%] left-[50%] translate-x-[-50%]'>
              <div className='mt-4 w-full h-full bg-white rounded-[20px] shadow-lg flex flex-col gap-6 p-8'>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-Docs.svg'
                    alt='user'
                  />
                  <span className='flex flex-col gap-[2px]'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Documentation
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Refer to our technical documentation to configure Prisma,
                      access APIs, develop and deploy your app
                    </span>
                  </span>
                </Link>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-GetStarted.svg'
                    alt='chart'
                  />

                  <span className='flex  flex-col gap-1'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Get Started
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Setup Prisma for your project
                    </span>
                  </span>
                </Link>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-PrismaExplained.svg'
                    alt='chart'
                  />

                  <span className='flex  flex-col gap-1'>
                    <span className='font-medium text-gray-700 flex items-center gap-1   text-[16px] '>
                      Prisma Examples{' '}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                        />
                      </svg>
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Access dozens of ready-to-run Prisma example projects
                    </span>
                  </span>
                </Link>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-DataGuide.svg'
                    alt='chart'
                  />

                  <span className='flex  flex-col gap-1'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Data Guide
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Refer to expert articles on how databases work
                    </span>
                  </span>
                </Link>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-PrismaInYourStack.svg'
                    alt='chart'
                  />

                  <span className='flex  flex-col gap-1'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Prisma in your Stack
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Learn about Prisma’s integration with modern technology
                      stacks, platforms, and applications
                    </span>
                  </span>
                </Link>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-Support.svg'
                    alt='chart'
                  />

                  <span className='flex  flex-col gap-1'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Support
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Find resources and get help from our support team
                    </span>
                  </span>
                </Link>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-Community.svg'
                    alt='chart'
                  />

                  <span className='flex  flex-col gap-1'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Community
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Join the growing prisma community
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </li>
          <li className='py-5  transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 group font-[500] relative group'>
            <Link
              to='/'
              className='flex items-center gap-1 transition duration-100 hover:text-indigo-400'
            >
              Use Cases
              <FiChevronDown className='transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]' />
            </Link>
            <div className='hidden z-[10] cursor-default group-hover:block  w-[450px] bg-transparent absolute top-[100%] left-[50%] translate-x-[-50%]'>
              <div className='mt-4 w-full h-full bg-white rounded-[20px] shadow-lg flex flex-col gap-4 p-8'>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-CustomerStories.svg'
                    alt='user'
                  />
                  <span className='flex flex-col gap-[2px]'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Customer Stories
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Learn about applications built with Prisma
                    </span>
                  </span>
                </Link>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-Enterprise.svg'
                    alt='chart'
                  />

                  <span className='flex  flex-col gap-1'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Enterprise
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Up-Lever your application with our Data Platform
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </li>
          <li className='py-5 hover:text-indigo-400 transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 cursor-pointer group font-[500]'>
            <Link to='/' className='flex items-center gap-1'>
              Company
              <FiChevronDown className='transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]' />
            </Link>
          </li>
        </ul>
        <div className='flex items-center gap-8'>
          <button className='text-white text-sm bg-secondary transition duration-100 shadow hover:bg-indigo-600/90 rounded py-2 px-6'>
            Get Started
          </button>
          <Link to='/' className='text-gray-700'>
            <FaGithub className='h-6 w-6' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
