// import { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { NavLink } from "react-router-dom";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="h-28 w-full bg-red-50 p-4 flex justify-center sticky top-0 z-20">
//       <div className="lg:w-5/6 w-full flex-wrap  flex justify-between items-center">
//         <span className="p-4 text-lg font-bold cursor-pointer">
//           <NavLink to="/">
//             <img
//               src="/image/my logo.jpg"
//               alt="logo"
//               width={200}
//               height={200}
//               className="rounded-lg object-fit w-14 h-full"
//               quality={100}
//             />
//           </NavLink>
//         </span>

//         <div className="lg:hidden">
//           <button
//             className="p-4 text-gray-500 cursor-pointer relative"
//             onClick={toggleMenu}
//           >
//             {
//               !menuOpen ?  <FiMenu size={24} /> : "x"
//             }

//           </button>
//         </div>

//         <nav
//           className={` mt-28 lg:mt-0 lg:bg-transparent bg-blue-200 h-2/4 lg:flex lg:w-3/6 w-full ${
//             menuOpen ? "block" : "hidden"
//           } items-center`}
//         >
//           <ul className="flex flex-col lg:flex-row lg:gap-4">
//             <li className="p-4 text-lg cursor-pointer border-b-4 border-transparent ">
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-600 border-b-4 border-blue-600"
//                     : "text-gray-500 hover:text-blue-600"
//                 }
//               >
//                 About Me
//               </NavLink>
//             </li>
//             <li className="p-4  text-lg cursor-pointer border-b-4 border-transparent ">
//               <NavLink
//                 to="/projects"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-600 border-b-4 border-blue-600"
//                     : "text-gray-500 hover:text-blue-600"
//                 }
//               >
//                 Projects
//               </NavLink>
//             </li>
//             <li className="p-4">
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "contact py-3 px-6 font-medium text-blue-500 text-lg border border-blue-300 rounded-sm hover:bg-red-600 hover:shadow-none hover:text-white cursor-pointer"
//                     : "contact py-3 px-6 font-medium text-gray-500 text-lg border border-gray-300 rounded-sm hover:bg-red-600 hover:shadow-none hover:text-white cursor-pointer"
//                 }
//               >
//                 Contact Me
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// import { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { NavLink } from "react-router-dom";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-50 bg-red-50">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <span className="p-4 text-lg font-bold cursor-pointer">
//           <NavLink to="/">
//             <img
//               src="/image/my logo.jpg"
//               alt="logo"
//               width={200}
//               height={200}
//               className="rounded-lg object-fit w-14 h-full"
//               quality={100}
//             />
//           </NavLink>
//         </span>

//         <div className="lg:hidden md-hidden">
//           <button
//             className="p-4 text-gray-500 cursor-pointer relative"
//             onClick={toggleMenu}
//           >
//             {
//               !menuOpen ?  <FiMenu size={24} /> : "x"
//             }

//           </button>
//         </div>

//         <nav
//           className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto} id="navbar-solid-bg`}
//         >
//           <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//             <li className="p-4 text-lg cursor-pointer border-b-4 border-transparent ">
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-600 border-b-4 border-blue-600"
//                     : "text-gray-500 hover:text-blue-600"
//                 }
//               >
//                 About Me
//               </NavLink>
//             </li>
//             <li className="p-4  text-lg cursor-pointer border-b-4 border-transparent ">
//               <NavLink
//                 to="/projects"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-600 border-b-4 border-blue-600"
//                     : "text-gray-500 hover:text-blue-600"
//                 }
//               >
//                 Projects
//               </NavLink>
//             </li>
//             <li className="p-4">
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "contact py-3 px-6 font-medium text-blue-500 text-lg border border-blue-300 rounded-sm hover:bg-red-600 hover:shadow-none hover:text-white cursor-pointer"
//                     : "contact py-3 px-6 font-medium text-gray-500 text-lg border border-gray-300 rounded-sm hover:bg-red-600 hover:shadow-none hover:text-white cursor-pointer"
//                 }
//               >
//                 Contact Me
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const getLinkClasses = (path) => {
    return pathname === path
      ? "block py-2 px-3 md:p-0 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent"
      : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  };

  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="border-gray-200 bg-red-50 dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/image/my logo.jpg"
            alt="bg"
            width={200}
            height={200}
            className="rounded-lg object-fit w-14 h-full"
            quality={100}
          />
        </NavLink>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu className="w-5 h-5" />
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col lg:space-y-0 space-y-8 font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent lg:items-center items-start dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <NavLink
                to="/about"
                className={getLinkClasses("/about")}
                aria-current="page"
                onClick={handleLinkClick}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={getLinkClasses("/projects")}
                onClick={handleLinkClick}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "contact py-3 px-6 font-medium text-blue-500 text-lg border border-blue-300 rounded-sm hover:bg-red-600 hover:shadow-none hover:text-white cursor-pointer"
                    : "contact py-3 px-6 font-medium text-gray-500 text-lg border border-gray-300 rounded-sm hover:bg-red-600 hover:shadow-none hover:text-white cursor-pointer"
                }
              >
                Contact Me
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/contact" className={getLinkClasses("/contact")} onClick={handleLinkClick}>
                Contact Me
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
