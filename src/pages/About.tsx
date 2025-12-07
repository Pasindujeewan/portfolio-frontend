import { NavLink } from "react-router-dom";
import imgme from "../assets/me.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export function About() {
  return (
    <div className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="flex-1 space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-7">
            <span className="block text-4xl md:text-5xl font-bold text-blue-700 dark:text-indigo-400 mb-4">
              Hi, I am Pasindu
            </span>
            I am a passionate and motivated Software Engineering student with a
            strong interest in modern web development, especially React. I enjoy
            building clean, user-focused applications and constantly improving
            my skills through hands-on projects.
            <br />
            <br />
            I’m a driven BICT undergraduate at the University of Sri
            Jayewardenepura, ranked 39th island-wide in the A/L Technology
            stream. Currently developing skills in full-stack development, data
            structures, system design, and real-world engineering best
            practices.
            <br />
            <br />
            My goal is to become a well-rounded developer who writes efficient
            code and understands architecture, UX, and long-term
            maintainability.
          </p>

          <div className="flex items-center gap-6">
            <NavLink to="/Contact">
              <button className="px-6 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-xl shadow hover:bg-indigo-500 dark:hover:bg-indigo-600 transition">
                Get in touch
              </button>
            </NavLink>

            <div className="flex gap-5 text-2xl ml-auto">
              <a
                href="https://github.com/Pasindujeewan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:opacity-80"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/Pasindujeewan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:opacity-80"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/pasindu-jeewan-b4934524b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:opacity-80"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={imgme}
            alt=""
            className="w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
