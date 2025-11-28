import { useState } from "react";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { UseTheme } from "../hooks/Usethem";
import { FaSun, FaMoon } from "react-icons/fa";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { theme, setTheme } = UseTheme();

  return (
    <header className="w-full fixed top-0 shadow-md left-0 z-50 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex justify-between items-center px-6 md:pr-20 sm:px-10 h-[60px]">
        <img src={logo} alt="Logo" className="w-20 h-20" />

        <ul className="hidden md:flex gap-9 text-[17px] items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 underline decoration-2 underline-offset-4 transition"
                : "text-gray-700 hover:text-amber-300 dark:text-gray-300 dark:hover:text-amber-300"
            }
          >
            <li className=" cursor-pointer">Home</li>
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 underline decoration-2 underline-offset-4 transition"
                : "text-gray-700 hover:text-amber-300 dark:text-gray-300 dark:hover:text-amber-300"
            }
          >
            <li className=" cursor-pointer transition">About</li>
          </NavLink>
          <NavLink
            to="/Project"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 underline decoration-2 underline-offset-4 transition"
                : "text-gray-700 hover:text-amber-300 dark:text-gray-300 dark:hover:text-amber-300"
            }
          >
            <li className="cursor-pointer transition">Projects</li>
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 underline decoration-2 underline-offset-4 transition"
                : "text-gray-700 hover:text-amber-300 dark:text-gray-300 dark:hover:text-amber-300"
            }
          >
            <li className="hover:text-[#facc15] cursor-pointer transition dark:hover:text-amber-300">
              Contact
            </li>
          </NavLink>
          <NavLink
            to="/Education"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 underline decoration-2 underline-offset-4 transition"
                : "text-gray-700 hover:text-amber-300 dark:text-gray-300 dark:hover:text-amber-300"
            }
          >
            <li className="hover:text-[#facc15] cursor-pointer transition dark:hover:text-amber-300">
              Education
            </li>
          </NavLink>
        </ul>
        <div className="hidden md:flex gap-5">
          <button onClick={() => setTheme(!theme)}>
            {theme ? (
              <FaSun
                size={25}
                className="text-amber-400 hover:text-amber-300 dark:text-yellow-400 dark:hover:text-yellow-300"
              />
            ) : (
              <FaMoon
                size={25}
                className="text-amber-400 hover:text-amber-300 dark:text-yellow-400 dark:hover:text-yellow-300"
              />
            )}
          </button>

          <NavLink to="/Project">
            <button className="hidden md:block px-4 py-2 bg-[#4f46e5] rounded-2xl text-white hover:bg-[#6366f1] transition-colors text-[15px] dark:bg-indigo-700 dark:hover:bg-indigo-600">
              See Projects
            </button>
          </NavLink>
        </div>
        <div className="md:hidden flex gap-2">
          <button onClick={() => setTheme(!theme)}>
            {theme ? (
              <FaSun
                size={25}
                className="text-amber-400 hover:text-amber-300 dark:text-yellow-400 dark:hover:text-yellow-300"
              />
            ) : (
              <FaMoon
                size={25}
                className="text-amber-400 hover:text-amber-300 dark:text-yellow-400 dark:hover:text-yellow-300"
              />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#4f46e5] hover:text-[#fbbf24] transition dark:text-indigo-400 dark:hover:text-yellow-400"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#ffff] border-t border-gray-700 px-6 pb-4 dark:bg-gray-800 dark:border-gray-700">
          <ul className="flex flex-col gap-4 mt-3 text-[17px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "text-gray-700 hover:text-amber-300 dark:text-gray-300 dark:hover:text-amber-300"
              }
            >
              <li onClick={toggleMenu} className=" cursor-pointer">
                Home
              </li>
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "text-gray-700 hover:text-amber-300 dark:text-gray-300 dark:hover:text-amber-300"
              }
            >
              <li onClick={toggleMenu} className=" cursor-pointer transition">
                About
              </li>
            </NavLink>
            <NavLink
              to="/Project"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "text-gray-700 hover:text-amber-300 dark:text-gray-300 dark:hover:text-amber-300"
              }
            >
              <li onClick={toggleMenu} className="cursor-pointer transition">
                Projects
              </li>
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "text-gray-700 hover:text-amber-300 dark:text-gray-300 dark:hover:text-amber-300"
              }
            >
              <li
                onClick={toggleMenu}
                className="hover:text-[#facc15] cursor-pointer transition dark:hover:text-amber-300"
              >
                Contact
              </li>
            </NavLink>
            <NavLink
              to="/Education"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "text-gray-700 hover:text-amber-300 dark:text-gray-300 dark:hover:text-amber-300"
              }
            >
              <li
                onClick={toggleMenu}
                className="hover:text-[#facc15] cursor-pointer transition dark:hover:text-amber-300"
              >
                Education
              </li>
            </NavLink>
          </ul>
          <NavLink to="/Project">
            <button
              onClick={toggleMenu}
              className="mt-4 w-full px-4 py-2 bg-[#4f46e5] rounded-2xl hover:bg-[#6366f1] text-white transition-colors text-[15px] dark:bg-indigo-700 dark:hover:bg-indigo-600"
            >
              See Projects
            </button>
          </NavLink>
        </div>
      )}
    </header>
  );
}
