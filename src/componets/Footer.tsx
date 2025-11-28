export function Footer() {
  return (
    <div className="w-full bg-gray-800 md:px-20 md:py-10 px-10 py-5 flex flex-col gap-5">
      <div className="flex gap-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-1xl  ">quick links</h1>
          <p className="text-white text-[10px]">Home</p>
          <p className="text-white text-[10px]">About</p>
          <p className="text-white text-[10px]">Projects </p>
          <p className="text-white text-[10px]">Contact</p>
          <p className="text-white text-[10px]">Education</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-1xl ">quick links</h1>
          <p className="text-white text-[10px]">Home</p>
          <p className="text-white text-[10px]">About</p>
          <p className="text-white text-[10px]">Projects </p>
          <p className="text-white text-[10px]">Contact</p>
          <p className="text-white text-[10px]">Education</p>
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-600 "></div>
      <p className="text-center text-[10px] md:text-sm text-white">
        © {new Date().getFullYear()} Pasindu Jeewan — Built with using React &
        Tailwind
      </p>
    </div>
  );
}
