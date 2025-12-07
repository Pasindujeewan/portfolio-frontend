import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 px-10 py-10 md:px-20 md:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-400 cursor-pointer">Home</li>
            <li className="hover:text-indigo-400 cursor-pointer">About</li>
            <li className="hover:text-indigo-400 cursor-pointer">Projects</li>
            <li className="hover:text-indigo-400 cursor-pointer">Education</li>
            <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Social</h2>
          <div className="flex gap-5 text-xl">
            <a
              href="https://github.com/Pasindujeewan"
              className="hover:text-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/Pasindujeewan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pasindu-jeewan-b4934524b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <span className="hover:text-indigo-400 cursor-pointer">
                pasindujeewan7@gmail.com
              </span>
            </li>
            <li>Location: Homagama,Sri Lanka</li>
            <li>Open for: Internships & Projects</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-700 my-4"></div>

      <p className="text-center text-xs md:text-sm text-gray-400">
        © {new Date().getFullYear()} Pasindu Jeewan — Built with React &
        Tailwind CSS
      </p>
    </footer>
  );
}
