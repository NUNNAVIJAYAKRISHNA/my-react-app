export function LangaugesKnown() {
  return (
    <>
      <p className="text-3xl m-2 p-2 font-semibold">LANGUAGES KNOWN</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 m-2 p-2 opacity-0 animate-fadeIn [animation-delay:600ms]">

        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
          />
          <p className="text-lg font-medium">C++ (DSA)</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          />
          <p className="text-lg font-medium">Python</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
          <p className="text-lg font-medium">JavaScript</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          />
          <p className="text-lg font-medium">Java</p>
        </div>
      </div>
    </>
  );
}