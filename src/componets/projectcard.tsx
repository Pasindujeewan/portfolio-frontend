import image12 from "../assets/img12.svg";
import image2 from "../assets/project2.jpg";
export function ProjectCard() {
  const projects = [
    {
      id: 1,
      Title: "A Simple GPA Calculater",
      desc: "A simple GPA Calculator built with React and Tailwind CSS that lets users add courses, select grades, and see their overall GPA instantly.",
      img: image12,
    },
    {
      id: 2,
      Title: "Job finder Full web site",
      desc: "A simple GPA Calculator built with React and Tailwind CSS that lets users add courses, select grades, and see their overall GPA instantly.",
      img: image2,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row  w-100% md:px-5 py-5 gap-[20px]  ">
      {projects.map((item) => (
        <div
          key={item.id}
          className="bg-white  shadow-md flex flex-col px-2 py-2 rounded-2xl gap-2 md:h-120 md:w-[20%] justify-between  dark:bg-gray-800"
        >
          <img
            src={item.img}
            alt=""
            className="rounded-2xl object-cover h-60"
          />
          <h1 className="text-[25px] dark:text-yellow-400">{item.Title}</h1>
          <p className="text-[12px] dark:text-white ">{item.desc}</p>
          <div className=" flex justify-end">
            <button className=" px-3 py-2 bg-[#4f46e5] text-white rounded-2xl text-[14px] hover:cursor-pointer dark:bg-gray-700 dark:text-yellow-400">
              See more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
