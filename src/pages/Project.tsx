import { useState } from "react";
import ProjectCard from "../componets/projectcard";
import { ChevronRight, ChevronLeft } from "lucide-react";

export type Project = {
  id: number;
  Title: string;
  desc: string;
  img: string;
  tags: string[];
  stars: number;
  demo: string;
  source: string;
  like: boolean;
  label: string;
  category: string;
  date: Date;
};

type ProjectProps = {
  projects: Project[];
};

export function Project({ projects }: ProjectProps) {
  const filter = [
    "All",
    "Web Development",
    "Mobile Development",
    "Web Design",
    "Game Development",
  ];
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<string[]>(["All"]);
  const [sort, setSort] = useState("Newest");
  const [results, setResults] = useState<Project[]>(projects);

  function handlefiltersort(option: string[], sortValue: string) {
    let result = [...projects];
    if (!option.includes("All")) {
      result = result.filter((result) => option.includes(result.category));
    }

    if (sortValue === "Newest") {
      result.sort((a, b) => b.date.getTime() - a.date.getTime());
    } else if (sortValue === "Oldest") {
      result.sort((a, b) => a.date.getTime() - b.date.getTime());
    } else if (sortValue === "Most Popular") {
      result.sort((a, b) => b.stars - a.stars);
    }

    setResults(result);
  }

  function handleFilter(option: string, checked: boolean) {
    let updatedOptions = [...options];
    if (checked) {
      if (option === "All") {
        updatedOptions = ["All"];
      } else {
        updatedOptions = updatedOptions.filter((opt) => opt !== "All");
        updatedOptions.push(option);
      }
    } else {
      updatedOptions = updatedOptions.filter((opt) => opt !== option);
    }

    setOptions(updatedOptions);
    handlefiltersort(updatedOptions, sort);
  }

  function handleSort(sortValue: string) {
    setSort(sortValue);
    handlefiltersort(options, sortValue);
  }

  return (
    <div className="flex py-15 w-full">
      <div
        onClick={() => setOpen(!open)}
        className={`absolute md:hidden ${
          open ? "left-35 top-16" : "left-0 top-16"
        } border-b border-t border-r border-gray-400 py-3.5 rounded-r-lg px-2 bg-amber-300 cursor-pointer flex items-center gap-2 z-30`}
      >
        <p>Filters</p>
        {open ? (
          <ChevronLeft className="w-6 h-6 cursor-pointer" />
        ) : (
          <ChevronRight className="w-6 h-6 cursor-pointer" />
        )}
      </div>

      <div
        className={`${
          open ? "flex absolute top-15 left-0 z-20 w-[40%]" : "hidden"
        } md:flex flex-col h-screen md:w-[20%] border-r border-gray-300 px-4 py-5 bg-white`}
      >
        <h2 className="text-2xl font-bold mb-5">Filters</h2>
        <div>
          {filter.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                checked={options.includes(option)}
                onChange={(e) => handleFilter(option, e.target.checked)}
              />
              <label className="ml-2 text-gray-700">{option}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="w-screen">
        <div className="flex w-auto md:h-[10%] py-5 md:py-10 px-4 border-b border-gray-300 items-center">
          <select
            value={sort}
            onChange={(e) => handleSort(e.target.value)}
            className="ml-auto bg-white border border-gray-200 rounded-lg px-2 py-2 md:px-4 md:py-2 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="Newest">Sort by: Newest</option>
            <option value="Oldest">Sort by: Oldest</option>
            <option value="Most Popular">Sort by: Most Popular</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row py-5 md:px-10 gap-5 justify-center items-center md:items-baseline">
          {results.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
