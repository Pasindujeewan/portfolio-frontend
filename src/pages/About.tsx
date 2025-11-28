import imgme from "../assets/me.png";
export function About() {
  return (
    <div className="py-25 px-20 dark:bg-gray-500 ">
      <div className="flex h-[80vh] w-[90vw] py-10 px-10 gap-9 bg-white rounded-md shadow-md  dark:bg-gray-800  ">
        <div>
          <p className="text-[15px] text-gray-600 leading-6 dark:text-gray-300">
            <span className="text-6xl text-blue-700 ">Hi I am Pasindu</span>I am
            a passionate and motivated Software Engineering student with a
            strong interest in modern web development, especially React. I enjoy
            building clean, user-focused applications and constantly improving
            my skills through hands-on projects. I’m always eager to learn new
            technologies, work in real-world environments, and grow as a
            developer while contributing to meaningful projects.
            <br />
            I’m a passionate and driven BICT undergraduate at the University of
            Sri Jayewardenepura with a strong academic foundation, ranked 39th
            island-wide in the A/L Technology stream. My focus is on building a
            career in software engineering, where I can apply my technical
            skills, problem-solving mindset, and continuous learning attitude.
            Currently deepening my knowledge in full-stack development, data
            structures, and system design, with hands-on projects and consistent
            self-learning. I’m enthusiastic about contributing to innovative
            tech teams and building impactful software solutions.
          </p>
        </div>
        <div>
          <div className="w-100 h-120 rounded-md">
            <img
              src={imgme}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
