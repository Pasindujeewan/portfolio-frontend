import { useForm } from "react-hook-form";
import about from "../assets/About.jpg";
import axios from "axios";
import { Notification } from "../componets/Notification";
import { useState } from "react";

type formData = {
  Name: string;
  Email: string;
  Text: string;
};
export function Contact() {
  const [alert, setalert] = useState(false);
  const [suc, setsuc] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>();

  async function onsubmit(data: formData) {
    console.log(data);
    console.log(errors.Name?.message);

    try {
      const res = await axios.post("http://localhost:5001/api/messages", {
        name: data.Name,
        email: data.Email,
        message: data.Text,
      });
      reset();
      setalert(true);
      setsuc(true);
      console.log(res.data);
    } catch (e) {
      setalert(true);
      setsuc(false);
      console.error(e);
    }
  }

  return (
    <div className="md:pt-30 pb-10 pt-20 md:px-20 h-auto  dark:bg-gray-700 ">
      {alert && <Notification type={suc ? "suc" : "err"} setalert={setalert} />}
      <div className="flex md:flex-row flex-col gap-2 md:px-6 md:py-6 rounded-2xl bg-white md:h-[75vh] overflow-hidden dark:bg-gray-800 py-10 shadow-md ">
        <form
          className="flex flex-col gap-9 md:w-1/2 w-full h-auto px-3 py-3 relative "
          onSubmit={handleSubmit(onsubmit)}
        >
          <h1 className="text-3xl dark:text-amber-400">Let’s Connect</h1>
          <p className="text-[15px] dark:text-gray-300 text-gray-600">
            Drop me a message below. I’m always open to discussing new ideas,
            creative projects, or opportunities.
          </p>
          <input
            className="w-full  p-3 border border-gray-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300 "
            placeholder="Enter Your Name"
            {...register("Name", { required: "Name is required" })}
          />

          {errors.Name && (
            <p className="text-red-500 text-[15px] absolute md:top-55 top-61 left-5">
              {errors.Name.message}
            </p>
          )}

          <input
            className="w-full  p-3 border border-gray-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300 "
            placeholder="Enter Your Mail"
            {...register("Email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.Email && (
            <p className="text-red-500 text-[15px] absolute md:top-76 top-82 left-5">
              {errors.Email.message}
            </p>
          )}
          <textarea
            {...register("Text", {
              required: "Text is required",
            })}
            className="w-full h-40 p-3 border border-gray-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300"
            placeholder="Write your message here..."
          ></textarea>
          {errors.Text && (
            <p className="text-red-500 text-[15px] absolute md:top-105 top-131 left-5">
              {errors.Text.message}
            </p>
          )}

          <button
            type="submit"
            className="px-4 py-2 bg-[#4f46e5] rounded-2xl text-white hover:bg-[#6366f1] transition-colors dark:bg-indigo-700 dark:hover:bg-indigo-600"
          >
            Send
          </button>
        </form>
        <div
          className="w-1/2 h-auto bg-cover bg-center rounded-2xl px-20 py-10 hidden md:flex"
          style={{ backgroundImage: `url(${about})` }}
        ></div>
      </div>
    </div>
  );
}
