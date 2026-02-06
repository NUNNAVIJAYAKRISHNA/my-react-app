export function Technologies() {
  return (
    <>
      <p className="text-3xl m-2 p-2 font-semibold">TECHNOLOGIES WORKING WITH</p>
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 m-2 p-2">
        {/* CARD */}
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          />
          <p className="text-lg font-medium">HTML</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md">
          <img
            className="h-24 w-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          />
          <p className="text-lg font-medium">CSS</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
          <p className="text-lg font-medium">JavaScript</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />
          <p className="text-lg font-medium">TailwindCSS</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
          <p className="text-lg font-medium">React.js</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          />
          <p className="text-lg font-medium">Node.js</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          />
          <p className="text-lg font-medium">Express</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          />
          <p className="text-lg font-medium">MongoDB</p>
        </div>
        <div className="bg-white flex flex-col items-center gap-4 p-6 rounded-xl border-l-8 border-orange-500 shadow-md">
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          />
          <p className="text-lg font-medium">GitHub</p>
        </div>
      </div>
    </>

  );
}