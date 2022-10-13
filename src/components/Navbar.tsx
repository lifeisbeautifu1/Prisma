import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isSideMenuOpen2, setIsSideMenuOpen2] = useState(false);
  const [isSideMenuOpen3, setIsSideMenuOpen3] = useState(false);
  const [isSideMenuOpen4, setIsSideMenuOpen4] = useState(false);
  return (
    <div
      className={`bg-[#1a202c] xl:bg-white text-white py-6 xl:py-0 font-primary fixed  z-[10] top-0 left-0 right-0 ${
        isMenuOpen && 'h-screen xl:h-auto overflow-scroll'
      }`}
    >
      <div className='w-[90%] lg:w-[85%] mx-auto flex items-center justify-between'>
        <Link to='/' className='block xl:hidden'>
          <img src='https://website-v9.vercel.app/logo-white.svg' alt='logo' />
        </Link>
        <Link to='/' className='hidden xl:block'>
          <img src='https://website-v9.vercel.app/logo-dark.svg' alt='logo' />
        </Link>
        <ul className='hidden xl:flex items-center gap-12 text-white xl:text-gray-700'>
          <li className='py-5  transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 group font-[500] relative group'>
            <Link
              to='/'
              className='flex items-center gap-1 transition duration-100 hover:text-indigo-400'
            >
              Product
              <FiChevronDown className='transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]' />
            </Link>
            <div className='hidden z-[10] cursor-default group-hover:block  w-[400px] bg-transparent absolute top-[100%] left-[50%] translate-x-[-50%]'>
              <div className='mt-4 w-full h-full bg-white rounded-[20px] shadow-lg flex flex-col gap-4 p-8'>
                <h1 className='font-secondary text-[18px] text-gray-500 uppercase tracking-[0.1em] font-semibold'>
                  Prisma ORM
                </h1>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-Client.svg'
                    alt='user'
                  />
                  <span className='flex flex-col gap-[2px]'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Client
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Write Queries the way you think
                    </span>
                  </span>
                </Link>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-Migrate.svg'
                    alt='chart'
                  />

                  <span className='flex  flex-col gap-1'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Migrate
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Generate Customisable SQL migrations
                    </span>
                  </span>
                </Link>
                <h1 className='font-secondary text-[18px] text-gray-500 uppercase tracking-[0.1em] font-semibold mt-4'>
                  Prisma data platform
                </h1>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-DataBrowser.svg'
                    alt='user'
                  />
                  <span className='flex flex-col gap-[2px]'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Data Browser
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Explore and manipulate data in your project
                    </span>
                  </span>
                </Link>
                <Link
                  to='/'
                  className='flex gap-3 my-group items-center hover:text-primary'
                >
                  <img
                    src='https://prismalens.netlify.app//header/icons/Icon-ServerlessDataProxy.svg'
                    alt='chart'
                  />

                  <span className='flex  flex-col gap-1'>
                    <span className='font-medium text-gray-700   text-[16px] '>
                      Data Proxy
                    </span>
                    <span className='text-sm text-gray-500  font-light'>
                      Manage and scale your connection pool
                    </span>
                  </span>
                </Link>
              </div>
            </div>
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
          <li className='py-5  transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 group font-[500] relative group'>
            <Link
              to='/'
              className='flex items-center gap-1 transition duration-100 hover:text-indigo-400'
            >
              Company
              <FiChevronDown className='transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]' />
            </Link>
            <div className='hidden z-[10] cursor-default group-hover:block  w-[600px] bg-transparent absolute top-[100%] left-[50%] translate-x-[-50%]'>
              <div className='mt-4 w-full h-full bg-white rounded-[20px] shadow-lg flex flex-row  p-8'>
                <ul className='text-[#333] w-[345px] flex flex-col gap-4 '>
                  <li>
                    <Link to='/' className='hover:text-primary'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='hover:text-primary'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/'
                      className='hover:text-primary flex items-center gap-2'
                    >
                      Careers{' '}
                      <span className='bg-[#16a394] py-1 px-2 rounded text-white text-xs'>
                        We're Hiring
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='hover:text-primary'>
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='hover:text-primary'>
                      Causes
                    </Link>
                  </li>
                </ul>
                <div className='flex flex-col gap-4 border-l border-gray-100 pl-4'>
                  <h1 className='font-secondary text-[18px] text-gray-500 uppercase tracking-[0.1em] font-semibold'>
                    latest from the blog
                  </h1>
                  <Link
                    to='/'
                    className='flex gap-4 items-center my-group w-full '
                  >
                    <div className='shrink-0 w-[148px] rounded overflow-hidden'>
                      <img
                        className='max-w-full h-auto'
                        src='https://prisma-blog-ebon.vercel.app/blog/posts/indexes-and-prisma/meta-image-2.png'
                        alt=''
                      />
                    </div>
                    <span className='text-[#718096]/90 leading-[1.3] w-full block text-[16px] font-primary font-normal'>
                      Improving Query Performance with Indexes using Prisma:
                      B-Tree Index
                    </span>
                  </Link>
                  <Link
                    to='/'
                    className='flex gap-4 mt-4 items-center my-group w-full '
                  >
                    <div className='shrink-0 w-[148px] rounded overflow-hidden'>
                      <img
                        className='max-w-full h-auto'
                        src='https://prisma-blog-ebon.vercel.app/blog/posts/indexes-and-prisma/meta-image-2.png'
                        alt=''
                      />
                    </div>
                    <span className='text-[#718096]/90 leading-[1.3] w-full block text-[16px] font-primary font-normal'>
                      Improving Query Performance with Indexes using Prisma:
                      Introduction
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className='hidden xl:flex items-center gap-8'>
          <button className='text-white text-sm bg-secondary transition duration-100 shadow hover:bg-indigo-600/90 rounded py-2 px-6'>
            Get Started
          </button>
          <Link to='/' className='text-gray-700'>
            <FaGithub className='h-6 w-6' />
          </Link>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='flex xl:hidden py-3 px-5 border border-transparent hover:border-primary outline outline-transparent active:outline-white hover:bg-primary rounded-md transition'
        >
          {isMenuOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`my-6 flex xl:hidden flex-col  ${!isMenuOpen && 'hidden'}`}
      >
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col w-[90%] lg:w-[85%]  mx-auto  border-b border-gray-50/30'>
            <div
              onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
              className='flex justify-between items-center cursor-pointer pb-8 text-white  overflow-hidden '
            >
              <h1 className='font-medium '>Product</h1>
              <div>
                {isSideMenuOpen ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 15.75l7.5-7.5 7.5 7.5'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`bg-[#2d3748] overflow-hidden  transition-all duration-500  ${
                isSideMenuOpen ? 'h-[490px] py-6' : 'h-0 p-0'
              }`}
            >
              <div className='flex flex-col w-[90%] lg:w-[85%] mx-auto '>
                <h1 className='text-[18px] font-secondary tracking-[0.1em] text-[#cbd5e0] uppercase font-semibold mb-8 '>
                  Prisma orm
                </h1>
                <div className='flex flex-col mb-8'>
                  <h1 className='font-medium mb-1'>Client</h1>
                  <p className='text-[14px]'>Write queries the way you think</p>
                </div>
                <div className='flex flex-col mb-8'>
                  <h1 className='font-medium mb-1'>Migrate</h1>
                  <p className='text-[14px]'>
                    Generate customisable SQL migrations
                  </p>
                </div>
              </div>
              <div className='w-[90%] lg:w-[85%] mx-auto mt-4'>
                <h1 className='text-[18px] font-secondary tracking-[0.1em] text-[#cbd5e0] uppercase font-semibold mb-8'>
                  Prisma data platform
                </h1>
                <div className='flex flex-col mb-8'>
                  <h1 className='font-medium mb-1'>Data Browser</h1>
                  <p className='text-[14px]'>
                    Explore and manipulate data in your project
                  </p>
                </div>
                <div className='flex flex-col mb-8'>
                  <h1 className='font-medium mb-1'>Data Client</h1>
                  <p className='text-[14px]'>
                    Manage and scale your connection pool
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col w-[90%] lg:w-[85%]  mx-auto border-b border-gray-50/30'>
              <div className='flex justify-between items-center cursor-pointer pb-8 text-white  overflow-hidden '>
                <h1 className='font-medium'>Docs</h1>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[90%] lg:w-[85%] mx-auto border-b border-gray-50/30'>
            <div
              onClick={() => setIsSideMenuOpen2(!isSideMenuOpen2)}
              className='flex justify-between items-center cursor-pointer pb-8 text-white overflow-hidden '
            >
              <h1 className='font-semibold '>Developer</h1>
              <div>
                {isSideMenuOpen2 ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 15.75l7.5-7.5 7.5 7.5'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`bg-[#2d3748] overflow-hidden  transition-all duration-500 ${
                isSideMenuOpen2 ? 'h-[290px] py-6' : 'h-0 p-0'
              }`}
            >
              <div className='flex flex-col gap-4 w-[90%] lg:w-[85%] mx-auto '>
                <Link to='/' className='font-medium mb-1 cursor-pointer'>
                  Get Started
                </Link>

                <Link
                  to='/'
                  className='font-medium mb-1 flex items-center gap-1'
                >
                  Prisma examples{' '}
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
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </Link>
                <Link to='/' className='font-medium mb-1'>
                  Data Guide
                </Link>
                <Link to='/' className='font-medium mb-1'>
                  Prisma in your stack
                </Link>
                <Link to='/' className='font-medium mb-1'>
                  Support
                </Link>
                <Link to='/' className='font-medium mb-1'>
                  Community
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[90%] lg:w-[85%] mx-auto border-b border-gray-50/30'>
            <div
              onClick={() => setIsSideMenuOpen3(!isSideMenuOpen3)}
              className='flex justify-between items-center cursor-pointer pb-8 text-white overflow-hidden '
            >
              <h1 className='font-semibold '>Use Cases</h1>
              <div>
                {isSideMenuOpen3 ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 15.75l7.5-7.5 7.5 7.5'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`bg-[#2d3748] overflow-hidden  transition-all duration-500 ${
                isSideMenuOpen3 ? 'h-[120px] py-6' : 'h-0 p-0'
              }`}
            >
              <div className='flex flex-col gap-4 w-[90%] lg:w-[85%] mx-auto '>
                <Link to='/' className='font-medium mb-1'>
                  Customer Stories
                </Link>

                <Link to='/' className='font-medium mb-1'>
                  Enterprise
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[90%] lg:w-[85%] mx-auto border-b border-gray-50/30'>
            <div
              onClick={() => setIsSideMenuOpen4(!isSideMenuOpen4)}
              className='flex justify-between items-center cursor-pointer pb-8 text-white overflow-hidden '
            >
              <h1 className='font-semibold '>Company</h1>
              <div>
                {isSideMenuOpen4 ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 15.75l7.5-7.5 7.5 7.5'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`bg-[#2d3748] overflow-hidden  transition-all duration-500 ${
                isSideMenuOpen4 ? 'h-[250px] py-6' : 'h-0 p-0'
              }`}
            >
              <div className='flex flex-col gap-4 w-[90%] lg:w-[85%] mx-auto '>
                <Link to='/' className='font-medium mb-1 cursor-pointer'>
                  About
                </Link>

                <Link to='/' className='font-medium mb-1'>
                  Blog
                </Link>
                <Link
                  to='/'
                  className='font-medium mb-1 flex items-center gap-2'
                >
                  Careers{' '}
                  <span className='bg-[#16a394] py-1 px-2 rounded text-white text-xs'>
                    We're Hiring
                  </span>
                </Link>
                <Link to='/' className='font-medium mb-1'>
                  Events
                </Link>
                <Link
                  to='/'
                  className='font-medium mb-1 flex items-center gap-1'
                >
                  Causes{' '}
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
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[90%] lg:w-[85%] mt-6 mx-auto flex xl:hidden flex-col  ${
          !isMenuOpen && 'hidden'
        }`}
      >
        <button className='text-white text-sm bg-secondary transition duration-100 shadow hover:bg-indigo-600/90 rounded py-3 px-6'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
