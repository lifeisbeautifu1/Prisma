import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-white font-primary fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between container mx-auto">
        <Link to="/">
          <img src="https://website-v9.vercel.app/logo-dark.svg" alt="logo" />
        </Link>
        <ul className="flex items-center gap-12 text-gray-700">
          <li className="py-5 hover:text-indigo-400 transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 cursor-pointer group font-[500]">
            <Link to="/" className="flex items-center gap-1">
              Product
              <FiChevronDown className="transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]" />
            </Link>
          </li>
          <li className="py-5 hover:text-indigo-400 transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 cursor-pointer font-[500]">
            <Link to="/" className="flex items-center gap-1">
              Docs
            </Link>
          </li>
          <li className="py-5 hover:text-indigo-400 transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 cursor-pointer group font-[500]">
            <Link to="/" className="flex items-center gap-1">
              Developer
              <FiChevronDown className="transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]" />
            </Link>
          </li>
          <li className="py-5 hover:text-indigo-400 transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 cursor-pointer group font-[500]">
            <Link to="/" className="flex items-center gap-1">
              Use Cases
              <FiChevronDown className="transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]" />
            </Link>
          </li>
          <li className="py-5 hover:text-indigo-400 transition duration-100 border-b-2 border-transparent  hover:border-indigo-400 cursor-pointer group font-[500]">
            <Link to="/" className="flex items-center gap-1">
              Company
              <FiChevronDown className="transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]" />
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-8">
          <button className="text-white text-sm bg-secondary transition duration-100 hover:bg-indigo-600/90 rounded py-2 px-6">
            Get Started
          </button>
          <Link to="/" className="text-gray-700">
            <FaGithub className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
