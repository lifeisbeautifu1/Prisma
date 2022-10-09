import { Link } from 'react-router-dom';
import { BsCheck2 } from 'react-icons/bs';

const Client = () => {
  return (
    <div className="w-full dark-gradient pb-12 mt-12">
      <div className="pt-16 pb-8 w-[90%] lg:min-w-[80%] mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            className="object-cover"
            src="https://www.prisma.io/home-page/typesafe-database-client.svg"
            alt="Client"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col">
          <h2 className="font-secondary text-[16px] text-gray-500 uppercase font-[700] tracking-[0.1em]">
            Prisma Client
          </h2>
          <h1 className="font-secondary text-[32px] lg:text-[48px] text-white tracking-[-0.02em] mt-1 font-bold leading-[1.1] ">
            Type-Safe database client
          </h1>
          <p className="font-primary text-[18px] leading-[1.4] text-gray-300 mt-6">
            Prisma Client is a query builder that’s tailored to your schema. We
            designed its API to be intuitive, both for SQL veterans and
            developers brand new to databases. The auto-completion helps you
            figure out your query without the need for documentation.
          </p>
          <button className="font-primary bg-[#319795] text-white  shadow rounded py-3 px-6 mt-8 text-[18px] hover:bg-[#2c7a7b] self-start">
            Explore Prisma Client
          </button>
        </div>
      </div>
      <div className="w-[90%] pt-8 pb-12 lg:min-w-[80%] mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
          <div className="h-20 w-20 md:w-40">
            <img
              src="https://www.prisma.io/home-page/icon-vscode.svg"
              alt="VSCode"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-[20px] font-bold">Extra ergonomy in VS Code</h1>
            <p className="text-gray-300">
              Auto-completion, linting, formatting and more help Prisma
              developers in VSCode stay confident and productive.
            </p>
            <Link
              className="text-[18px] underline font-semibold text-[#38b2ac] flex items-center gap-1"
              to="/"
            >
              Download Prisma VSCode Extension
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex gap-4 flex-col md:flex-row">
          <div className="h-20 w-20 md:w-40">
            <img
              src="https://www.prisma.io/home-page/icon-ts.svg"
              alt="VSCode"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-[20px] font-bold">
              Make fewer errors with TypeScript
            </h1>
            <p className="text-gray-300">
              Prisma provides the strongest type-safety guarantees of all the
              ORMs in the TypeScript ecosystem.
            </p>
            <Link
              className="text-[18px] underline font-semibold text-[#38b2ac] flex items-center gap-1"
              to="/"
            >
              Read comparison with TypeORM
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[90%] lg:min-w-[80%] mx-auto  bg-white rounded shadow ">
        <div className="flex text-[14px] xl:text-[18px] flex-row justify-center gap-12 border-b border-gray-200 py-8 px-14 ">
          <ul className="flex flex-col gap-4 items-start">
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" />{' '}
              Auto-Generated
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Raw Database
              Access
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" />{' '}
              Case-insensitive Mode
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> JSON Field
              Support
            </li>
          </ul>
          <ul className="flex flex-col gap-4 items-start">
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Easy Relation
              API
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Sorting and
              Filtering
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Select
              Distinct
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Native
              Database Types
            </li>
          </ul>
          <ul className="flex flex-col gap-4 items-start">
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Advanced
              Pagination
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Transactions
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Helpful Error
              Messages
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Custom
              Generators
            </li>
          </ul>
          <ul className="flex flex-col gap-4 items-start">
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Nested Writes
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Aggregations
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> SQL Query
              Logging
            </li>
            <li className=" flex items-center font-semibold text-gray-500">
              <BsCheck2 className="h-6 w-6 mr-3 text-[#38b2ac]" /> Middleware
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="text-gray-400 flex w-full items-center justify-center py-6 font-semibold"
        >
          Explore the up-to-date Prisma Client Documentation
        </Link>
      </div>
    </div>
  );
};

export default Client;
