import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiTwitter, FiYoutube, FiSlack, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='flex flex-col py-10'>
      <div className='flex flex-col-reverse md:flex-col'>
        <div className='w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row gap-12 justify-between mb-10 md:mb-0'>
          <ul>
            <li className='py-1 uppercase font-[300] text-[16px] tracking-[0.03em]'>
              Product
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Client</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Migrate</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Data Browser</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Data Proxy</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Pricing</Link>
            </li>
          </ul>
          <ul>
            <li className='py-1 uppercase font-[300] text-[16px] tracking-[0.03em]'>
              Developers
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Get Started</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/' className='flex items-center gap-2'>
                <span>Prisma Examples</span> <AiOutlineArrowRight />
              </Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Data Guide</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Prisma in your Stack</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Support</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Community</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/' className='flex items-center gap-2'>
                Data Platform Status <AiOutlineArrowRight />
              </Link>
            </li>
          </ul>
          <ul>
            <li className='py-1 uppercase font-[300] text-[16px] tracking-[0.03em]'>
              Use Cases
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Customer Stories</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/' className='flex items-center gap-2'>
                Enterprise
              </Link>
            </li>
          </ul>
          <ul>
            <li className='py-1 uppercase font-[300] text-[16px] tracking-[0.03em]'>
              Company
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>About</Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/' className='flex items-center gap-2'>
                Blog
              </Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px] flex items-center gap-2'>
              <Link to='/'>Careers</Link>
              <span className='bg-[#16a394] py-1 px-2 rounded text-white text-sm'>
                We're Hiring
              </span>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/'>Events</Link>
            </li>

            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/' className='flex items-center gap-2'>
                Causes <AiOutlineArrowRight />
              </Link>
            </li>
            <li className='py-4 md:py-2 font-medium text-gray-700 hover:text-primary text-[18px]'>
              <Link to='/' className='flex items-center gap-2'>
                Terms &amp; Privacy <AiOutlineArrowRight />
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-[90%] lg:w-[85%] mx-auto my-12 border-t border-b border-gray-200 py-16'>
          <div className='flex flex-col lg:flex-row  md:items-center justify-between gap-4'>
            <h1 className='font-[400] uppercase tracking-[0.08em] text-gray-500 mr-8'>
              Newsletter
            </h1>
            <div className='flex flex-col lg:flex-row items-center lg:items-center gap-4'>
              <div className='flex items-center py-3 px-4 rounded-lg border border-gray-200 w-full max-h-[48px] text-[18px] shadow-inner '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mr-2 text-gray-400'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                  />
                </svg>

                <input
                  className='outline-none w-full'
                  type='text'
                  placeholder='Name'
                />
              </div>
              <div className='flex items-center py-3 px-4 rounded-lg border border-gray-200 w-full max-h-[48px] text-[18px] shadow-inner'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mr-2 text-gray-400'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  />
                </svg>

                <input
                  className='outline-none w-full'
                  type='email'
                  placeholder='Email'
                />
              </div>
              <button className='w-full shadow-lg rounded-lg bg-secondary hover:bg-primary text-white font-primary text-[18px] py-3 px-6 max-h-12 self-start'>
                Subscribe for updates
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[90%] lg:w-[85%] mx-auto flex justify-between mb-10'>
        <div className='flex flex-col gap-2'>
          <div>
            <img src='https://website-v9.vercel.app/logo-dark.svg' alt='logo' />
          </div>
          <h2 className='font-light'>
            &copy; {new Date().getFullYear()} Prisma Data, Inc.
          </h2>
        </div>
        <div className='hidden md:flex items-center gap-4 text-[24px]'>
          <FiTwitter className='cursor-pointer hover:text-secondary' />
          <FiYoutube className='cursor-pointer hover:text-secondary' />
          <FiSlack className='cursor-pointer hover:text-secondary' />
          <FiGithub className='cursor-pointer hover:text-secondary' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
