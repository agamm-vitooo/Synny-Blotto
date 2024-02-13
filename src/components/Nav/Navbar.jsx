import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  // State untuk melacak apakah navbar sedang terbuka atau tertutup
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Fungsi untuk menangani klik pada tombol menu
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-white border-b-2 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a>
          <span className="text-black text-2xl font-bold">
            Synny Blotto
          </span>
        </a>
        <button
          onClick={handleToggleNav} // Menggunakan fungsi handleToggleNav saat tombol menu diklik
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isNavOpen ? "true" : "false"} // Menyesuaikan nilai atribut aria-expanded dengan state isNavOpen
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isNavOpen ? "block" : "hidden"}`} id="navbar-default">
          <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100"
                aria-current="page"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100"
              >
                Blog
              </a>
            </li>
            <li>
              <button className='p-2 rounded-lg items-center shadow-md' style={{ backgroundColor: '#F26666' }} >
                <FiSearch size={20} color='FFFFFF' />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
