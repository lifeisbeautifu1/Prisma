import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className=" bg-gray-900 font-primary">
      <div className="flex items-center justify-between container mx-auto">
        <Link to="/">
          <img src="https://website-v9.vercel.app/logo-white.svg" alt="logo" />
        </Link>
        <ul className="flex items-center gap-12 text-white">
          <li className="py-5 hover:text-indigo-300 transition duration-100 border-b-2 border-transparent  hover:border-indigo-300 cursor-pointer group">
            <Link to="/" className="flex items-center gap-1">
              Product
              <FiChevronDown className="transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]" />
            </Link>
          </li>
          <li className="py-5 hover:text-indigo-300 transition duration-100 border-b-2 border-transparent  hover:border-indigo-300 cursor-pointer">
            <Link to="/" className="flex items-center gap-1">
              Docs
            </Link>
          </li>
          <li className="py-5 hover:text-indigo-300 transition duration-100 border-b-2 border-transparent  hover:border-indigo-300 cursor-pointer group">
            <Link to="/" className="flex items-center gap-1">
              Developer
              <FiChevronDown className="transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]" />
            </Link>
          </li>
          <li className="py-5 hover:text-indigo-300 transition duration-100 border-b-2 border-transparent  hover:border-indigo-300 cursor-pointer group">
            <Link to="/" className="flex items-center gap-1">
              Use Cases
              <FiChevronDown className="transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]" />
            </Link>
          </li>
          <li className="py-5 hover:text-indigo-300 transition duration-100 border-b-2 border-transparent  hover:border-indigo-300 cursor-pointer group">
            <Link to="/" className="flex items-center gap-1">
              Company
              <FiChevronDown className="transition duration-100 w-6 h-6 group-hover:rotate-[-180deg]" />
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-8">
          <button className="text-white text-sm bg-indigo-500 transition duration-100 hover:bg-indigo-600/90 rounded py-2 px-6">
            Get Started
          </button>
          <Link to="/" className="text-white">
            <FaGithub className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
