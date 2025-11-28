import { CheckCircle, XCircle } from "lucide-react";
type Pros = {
  type: string;
  setalert: (a: boolean) => void;
};
export function Notification({ type, setalert }: Pros) {
  return (
    <>
      <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm z-40"></div>

      <div
        className="fixed flex flex-col top-1/4 left-1/2 transform -translate-x-1/2 
                    bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200 
                    md:px-6 py-4 px-2 w-70 md:w-100 rounded shadow-lg z-50 justify-center items-center gap-2"
      >
        <button
          onClick={() => setalert(false)}
          className="ml-auto font-bold hover:text-gray-500 dark:hover:text-gray-400"
        >
          ✕
        </button>

        <div className="flex justify-center">
          {type == "suc" ? (
            <CheckCircle className="text-green-500 w-10 h-10 text-center" />
          ) : (
            <XCircle className="text-red-500 w-10 h-10" />
          )}
        </div>

        <p
          className={`text-[15px] text-center ${
            type == "suc"
              ? "text-green-500 dark:text-green-400"
              : "text-red-500 dark:text-red-400"
          }mt-4`}
        >
          {type == "suc"
            ? "Your message was sent successfully"
            : "Your message is not sent successfully"}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          {type == "suc"
            ? "Thank you for messaging me. I will contact you soon."
            : "Something going wrong.try Contact me another way"}
        </p>

        <button
          onClick={() => setalert(false)}
          className={`px-10 py-2 text-white rounded-md ${
            type == "suc"
              ? "bg-green-500 dark:bg-green-600  hover:bg-green-600 dark:hover:bg-green-500"
              : "bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-500"
          } transition`}
        >
          Ok
        </button>
      </div>
    </>
  );
}
