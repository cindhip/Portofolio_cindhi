import Aside from "./components/Aside";
import More from "./components/More";

function App() {
  return (
    <>
      <div className="bg-gradient-to-t from-dark-blue to-even-dark-blue w-full h-full xl:h-screen">
        <div className="flex flex-col lg:flex-row justify-around items-center min-h-full w-screen relative p-2 px-4 gap-5">
          <Aside />
          
          <div className="bg-black max-w-[1200px] py-4 md:py-8 px-6 md:px-12 rounded-xl overflow-y-scroll h-[700px] w-auto text-white no-scrollbar">
            <More />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
