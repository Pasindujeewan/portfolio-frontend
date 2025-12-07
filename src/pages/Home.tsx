import home from "../assets/Home.svg";
import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { FadeInSection } from "../componets/Animate";
import img4 from "../assets/img4.jpg";
import img11 from "../assets/img11.svg";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "react-router-dom";
import { projects } from "../componets/projects";
import ProjectCard from "../componets/projectcard";

export function Home() {
  const services = [
    {
      img: img1,
      title: "Interactive Interfaces",
      desc: "Building responsive and user-friendly web applications with modern frameworks like React and Tailwind CSS.",
    },
    {
      img: img2,
      title: "Creative Web Design",
      desc: "Crafting visually appealing and intuitive websites with attention to UX and modern design principles.",
    },
    {
      img: img3,
      title: "Robust Backends",
      desc: "Designing scalable server-side systems, APIs, and databases to power fast, secure, and reliable web applications.",
    },
  ];

  const [isopen, setisopen] = useState(false);

  function handleclick() {
    setisopen(!isopen);
  }

  return (
    <div className="dark:bg-gray-900  ">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-25 md:py-35 gap-10 md:pr-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <button className="mb-5 px-3 py-1 bg-[#e0e7ff] rounded-2xl text-[#4f46e5] text-[14px] hover:cursor-pointer dark:bg-gray-700 dark:text-yellow-400">
            Available For Work
          </button>

          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5 font-bold leading-tight dark:text-white">
            Hi, I’m Pasindu <br />
            <span className="text-[#fbbf24]">Jeewana</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-3 text-gray-800 dark:text-gray-200">
            A passionate Full-Stack Developer
          </h2>

          <p className="text-[16px] sm:text-[18px] mt-5 text-gray-600 max-w-md mx-auto md:mx-0 dark:text-gray-300">
            From building responsive UI to designing robust server-side APIs, I
            develop end-to-end solutions.
          </p>
          <NavLink to="/Project">
            <button className="mt-7 px-6 py-3 bg-[#4f46e5] rounded-2xl text-white hover:bg-[#6366f1] transition-colors text-[15px] dark:bg-indigo-700 dark:hover:bg-indigo-600">
              See My Work
            </button>
          </NavLink>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={home}
          alt="Home illustration"
          className="w-[280px] sm:w-[350px] md:w-[45vw]"
        />
      </div>

      <div className="mt-0 text-center px-6 sm:px-10 md:px-20 mb-20">
        <FadeInSection>
          <h1 className="text-3xl sm:text-4xl text-[#4f46e5] font-semibold dark:text-yellow-400">
            What I Do ..
          </h1>
          <p className="text-[15px] sm:text-[16px] mt-3 text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
            I design and build modern web applications from scratch — from
            intuitive user interfaces to powerful backend systems. I focus on
            clean code, performance, and scalable architecture to create
            products that look great and work flawlessly across devices.
          </p>
        </FadeInSection>

        <FadeInSection>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="relative group rounded-2xl overflow-hidden shadow-lg w-[90%] sm:w-[320px] md:w-[360px] h-[420px] sm:h-[460px] cursor-pointer"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute  bottom-6 left-2 md:left-6 group-hover:bottom-4 transition-all duration-500">
                  <h2 className="text-[18px] sm:text-[20px] font-semibold text-white dark:text-yellow-400">
                    {service.title}
                  </h2>
                  <p className="text-[13px] sm:text-[14px] text-gray-200 mt-1 max-w-[280px] sm:max-w-[300px] dark:text-gray-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>

      <FadeInSection>
        <div className="flex flex-col md:flex-row justify-between items-center px-9 md:px-20 mb-20 gap-10 md:mt-40">
          <div className="flex flex-col gap-2 md:w-[50%]">
            <p className="text-[#fbbf24] text-[15px]">Hi, I'm Pasindu</p>
            <h1 className="md:text-5xl text-4xl dark:text-white">
              Turning Ideas into Modern Web Solutions
            </h1>
            <p className="text-[15px] sm:text-[16px] mt-3 text-gray-700 dark:text-gray-300">
              I’m a passionate full-stack web developer who loves turning ideas
              into modern, user-friendly digital experiences. I build fast,
              responsive websites—from smooth frontend interfaces to reliable
              backend systems. I’m always improving my skills, exploring new
              design trends, and creating projects that push my creativity
              further.
            </p>
            <div className="mt-4">
              <NavLink to="/about">
                <button className="px-6 py-2 bg-[#4f46e5] rounded-2xl text-white hover:bg-[#6366f1] transition-colors dark:bg-indigo-700 dark:hover:bg-indigo-600">
                  See more
                </button>
              </NavLink>
            </div>
          </div>
          <img src={img4} alt="Home Image" />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex bg-[#1F2937] md:px-19 px-9 py-9 justify-between mt-35 gap-0 items-center dark:bg-gray-800">
          <img
            src={img11}
            alt=""
            className="md:inline h-auto w-[35vw] hidden"
          />
          <div className="flex flex-col md:w-[55%]">
            <p className="text-[#fbbf24] text-[15px]">Let’s talk</p>

            <h1 className="md:text-5xl text-4xl text-white dark:text-yellow-400">
              Get In Touch
            </h1>
            <p className="text-[15px] sm:text-[16px] mt-3 text-white dark:text-gray-300">
              Need a developer who understands both design and functionality? I
              specialize in creating smooth user experiences and scalable
              solutions that truly meet user needs. From responsive UI to strong
              backend architecture, I focus on delivering quality, performance,
              and attention to detail. Let’s discuss your requirements and find
              the best way forward — I’m excited to help bring your ideas to
              life!
            </p>
            <div className="relative md:hidden mt-2">
              <button
                className="md:hidden px-2 py-2 text-1xl text-white ring-1 ring-white rounded-md mt-4 flex items-center gap-2 dark:text-gray-300 dark:ring-gray-300"
                onClick={handleclick}
              >
                Contact me
                {isopen ? (
                  <ChevronUp className="inline" />
                ) : (
                  <ChevronDown className="inline" />
                )}
              </button>

              {isopen && (
                <ul className="absolute right-0 left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50 px-2 py-2 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  <NavLink to="/Contact">
                    <li className="py-2">
                      Via website{" "}
                      <Mail className="inline-block ml-2" size={15} />
                    </li>
                  </NavLink>
                  <a
                    href="https://wa.me/94728756911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500"
                  >
                    <li className="py-2">
                      Via whatsapp
                      <FaWhatsapp className="inline-block ml-2" size={15} />
                    </li>
                  </a>
                  <a href="tel:0728765911">
                    <li className="py-2">
                      Via Call <Phone className="inline-block ml-2" size={15} />
                    </li>
                  </a>
                </ul>
              )}
            </div>

            <div className="md:flex gap-6 mt-6 flex-wrap hidden">
              <div className="flex flex-col gap-4 justify-around items-center bg-white rounded-lg py-4 px-5 h-50 w-42 dark:bg-gray-700 dark:text-gray-200">
                <Mail size={35} />
                <h1 className="text-[12px] text-center sm:text-[11px]">
                  Contact via website
                </h1>
                <NavLink to="/Contact">
                  <button
                    className="px-4 py-2 bg-[#1F2937] rounded-2xl text-white 
    transition-all duration-200 ease-in-out 
    hover:bg-[#6366f1] hover:scale-105 hover:shadow-md 
    dark:bg-indigo-700 dark:hover:bg-indigo-600"
                  >
                    contact me
                  </button>
                </NavLink>
              </div>

              <div className="flex flex-col gap-4 justify-around items-center bg-white rounded-lg py-4 px-5 h-50 w-42 dark:bg-gray-700 dark:text-gray-200">
                <FaWhatsapp size={35} />
                <h1 className="text-[11px] text-center sm:text-[11px]">
                  Contact via whatsapp
                </h1>
                <a
                  href="https://wa.me/94728756911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  <button
                    className="px-4 py-2 bg-[#1F2937] rounded-2xl text-white 
    transition-all duration-200 ease-in-out 
    hover:bg-green-600 hover:scale-105 hover:shadow-md 
    dark:bg-green-700 dark:hover:bg-green-600"
                  >
                    contact me
                  </button>
                </a>
              </div>

              <div className="flex flex-col gap-4 justify-around items-center bg-white rounded-lg py-4 px-5 h-50 w-42 dark:bg-gray-700 dark:text-gray-200">
                <Phone size={35} />
                <h1 className="text-[11px] sm:text-[12px]">Contact via call</h1>
                <a href="tel:0728765911">
                  <button
                    className="px-4 py-2 bg-[#1F2937] rounded-2xl text-white 
    transition-all duration-200 ease-in-out 
    hover:bg-yellow-500 hover:text-gray-900 
    hover:scale-105 hover:shadow-md
    dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300"
                  >
                    contact me
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="flex flex-col items-center md:py-29 px-6 py-20">
        <div className="flex flex-col justify-center md:items-center">
          <h1 className="md:text-5xl text-4xl text-blak dark:text-yellow-400">
            Recent My Work
          </h1>
        </div>
        <p className="text-[15px] text-center sm:text-[16px] mt-3 text-gray-500 dark:text-gray-300 md:text-center">
          A collection of my recent projects, showcasing my skills in web
          development, design, and problem-solving
        </p>
        <div className="flex md:flex-row gap-10 flex-col  md:px-50 py-5">
          {projects.map((i) => (
            <ProjectCard item={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
