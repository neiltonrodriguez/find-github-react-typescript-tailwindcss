import { Outlet } from "react-router-dom";

function App() {
  return (

      <div className="mx-auto w-full bg-slate-900 h-screen p-5 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white text-center">
          GitHub Search
        </h1>

        <Outlet />

    </div>
  );
}

export default App
