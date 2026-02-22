export function ProjectCard1() {
  return (
    <div className="bg-royal border-gray-200 rounded-xl shadow-md p-6 max-w-3xl 
    min-h-[420px] flex flex-col">

      <h2 className="text-2xl font-semibold text-white mb-2">
        CampusConnect
      </h2>

      <p className="text-sm text-white mb-4">
        College Event & Circular Management Platform
      </p>

      <p className="text-white leading-relaxed mb-4 text-2xl">
        CampusConnect is a full-stack web application designed to streamline how
        students and administrators manage college events, circulars, and campus
        activities on a single centralized platform. The project addresses the
        common problem of fragmented communication and manual event handling.
      </p>

      <p className="text-white leading-relaxed mb-4 text-2xl">
        The platform supports role-based access, allowing students and
        administrators to interact with the system according to their
        responsibilities. Students can discover events, register seamlessly,
        view official circulars, and manage their profiles, while administrators
        can create and manage events, publish circulars, and monitor participant
        data efficiently.
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
          Full Stack
        </span>
        <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
          Role-Based Access
        </span>
        <span className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
          Event Management
        </span>
        <span className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full">
          Campus Platform
        </span>

        <a href="https://connectthecampus.netlify.app" class="text-decoration-line: underline text-blue-800 bg-gray-300 rounded-full  px-4" target="blank">Website</a>
      </div>

    </div>
  );
}
