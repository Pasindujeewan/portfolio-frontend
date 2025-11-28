import { Header } from "./componets/Header";
import { Outlet } from "react-router-dom";
import { useLoad } from "./hooks/UseLoad";
import { Footer } from "./componets/Footer";

function App() {
  const { load } = useLoad();

  if (load) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-70 flex flex-col gap-2 justify-center items-center z-50">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin [animation-duration:2s] "></div>

        <p className="text-1xl text-gray-500 text-center">please wait...</p>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
