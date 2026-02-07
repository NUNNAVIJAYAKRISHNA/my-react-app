export function ProjectCard2() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 max-w-3xl 
    min-h-[420px] flex flex-col">

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        CampusCare
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Smart Campus Maintenance Management System
      </p>

      <p className="text-gray-700 leading-relaxed mb-4 text-2xl">
        CampusCare is a full-stack web application designed to digitize and
        streamline campus maintenance and issue reporting. It replaces
        traditional manual complaint systems with a centralized platform that
        enables students, faculty, and maintenance teams to report, track, and
        resolve campus issues efficiently.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4 text-2xl">
        The platform supports role-based authentication using Firebase, providing
        dedicated dashboards for students, maintenance staff, and administrators.
        Students can report issues with images and location details, track
        real-time status updates, and communicate with maintenance teams, while
        staff can manage assignments and update issue progress transparently.
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
          Full Stack
        </span>
        <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
          Real-Time Updates
        </span>
        <span className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
          Role-Based Access
        </span>
        <span className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full">
          Firebase
        </span>
        <a href="https://campus-care01.netlify.app" class="text-decoration-line: underline text-blue-800 bg-gray-300 rounded-full  px-4" target="blank">Website</a>
      </div>

    </div>
  );
}
