export function AboutMe() {
  return (
    <div className="bg-white flex flex-col gap-4 p-6 rounded-xl w-fit max-w-3xl border-l-8 border-orange-500 shadow-md m-2">
      <p className="text-lg text-gray-700 leading-relaxed">
        I work primarily with <b>React and Tailwind CSS</b> to build responsive,
        structured user interfaces.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        I’m strengthening my <b>JavaScript</b> fundamentals and working with{" "}
        <b>Node.js</b> for backend logic.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        I value clean code, clarity in design, and building things that are
        practical and maintainable.
      </p>
    </div>
  );
}