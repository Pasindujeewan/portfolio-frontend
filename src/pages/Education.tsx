import { ChevronDown, ChevronUp, Award, GraduationCap } from "lucide-react";
import { useState } from "react";

export function Education() {
  const [eduOpen, seteduOpen] = useState(true);
  const [cetiopen, setcetiopen] = useState(true);

  const education = [
    {
      id: 1,
      name: "Bacheler information and comunication technologhy",
      School: "University of Sri jayawardenapure",
      date: "2023-present",
    },
    {
      id: 2,
      name: "Advaced level",
      School: "R/Gankanda cental collage",
      date: "2023-present",
    },
  ];
  const cetficates = [
    {
      id: 1,
      name: "Front End Development Libraries",
      School: "freeCodeCamp",
      date: "2025",
    },
    {
      id: 2,
      name: "Programming in Python - 1. Python for Beginners",
      School: "open learning platform University of Moratuwa",
      date: "2023",
    },
    {
      id: 3,
      name: "Web Development - 1. Web Design for Beginners",
      School: "open learning platform University of Moratuwa",
      date: "2023",
    },
  ];
  return (
    <div className="md:px-20 px-2 md:py-30 py-20 dark:bg-gray-900 h-[150vh] ">
      <div className="py-5">
        <div
          className="flex"
          onClick={() => {
            seteduOpen(!eduOpen);
          }}
        >
          <h1 className="text-2xl dark:text-white">
            education<span className="ml-2">({education.length})</span>
          </h1>
          {eduOpen ? (
            <ChevronUp className="ml-auto dark:text-white" />
          ) : (
            <ChevronDown className="ml-auto dark:text-white" />
          )}
        </div>
        {eduOpen && (
          <ul>
            {education.map((i) => (
              <li className="py-5 bg-amber-100 mt-2 px-2 flex  dark:bg-gray-800 ">
                <GraduationCap className="mr-2  dark:text-yellow-400" />
                <div>
                  <h1 className="text-[20px] dark:text-white">{i.name}</h1>
                  <h1 className="text-gray-700  dark:text-yellow-400">
                    {i.School}
                  </h1>
                  <h1 className="text-gray-700">{i.date}</h1>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <div
          className="flex"
          onClick={() => {
            setcetiopen(!cetiopen);
          }}
        >
          <h1 className="text-2xl dark:text-white">
            cetificates <span className="ml-2">({cetficates.length})</span>
          </h1>
          {cetiopen ? (
            <ChevronUp className="ml-auto dark:text-white" />
          ) : (
            <ChevronDown className="ml-auto dark:text-white" />
          )}
        </div>
        {cetiopen && (
          <ul>
            {cetficates.map((i) => (
              <li className="py-5 bg-blue-100 mt-2 px-2 flex  dark:bg-gray-800">
                <Award className="mr-2  dark:text-[#4f46e5]" />
                <div>
                  <h1 className="text-[20px] dark:text-white">{i.name}</h1>
                  <h1 className="text-gray-700  dark:text-[#4f46e5] ">
                    {i.School}
                  </h1>
                  <h1 className="text-gray-700">{i.date}</h1>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
