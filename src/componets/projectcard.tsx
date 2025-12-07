import type { Project } from "../pages/Project";
import { Rating } from "./rating";

type ProjectCardProps = {
  item: Project;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div
      className="flex flex-col border border-gray-300 dark:border-gray-700 
      rounded-lg p-4 hover:shadow-xl transition-shadow 
      bg-white/60 dark:bg-white/10 backdrop-blur-md
      md:h-120 md:w-80 h-100 w-72"
    >
      <div className="w-full h-[60%] overflow-hidden rounded-md relative">
        <img
          src={item.img}
          alt=""
          className="w-full h-full object-cover absolute"
        />

        <div
          className="absolute top-2 right-2 bg-yellow-500 text-black 
        dark:text-white px-2 py-1 rounded-md shadow"
        >
          {item.category}
        </div>
      </div>

      <div>
        <h3 className="md:text-lg text-[15px] font-semibold mt-4 text-gray-900 dark:text-gray-100">
          {item.Title}
        </h3>
        <p className="md:text-sm text-[9px] text-gray-600 dark:text-gray-400 mt-2">
          {item.desc}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap mt-4">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 dark:bg-gray-700 
              text-gray-800 dark:text-gray-200 
              rounded-full px-2 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex mt-2 items-center">
          <a href={item.demo}>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 
            dark:bg-indigo-500 dark:hover:bg-indigo-600 
            md:px-6 px-2 md:text-sm text-[12px] py-1 rounded-full text-white 
            transition-colors cursor-pointer"
            >
              Live Demo
            </button>
          </a>

          <div className="flex items-center ml-auto space-x-1">
            <Rating stars={5} />
          </div>
        </div>
      </div>
    </div>
  );
}
