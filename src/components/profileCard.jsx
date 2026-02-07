import profilePic from '../assets/images/profile_picture.jpg'
export function ProfileCard() {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center gap-4 p-6 rounded-xl w-fit border-l-8 border-orange-500 shadow-md m-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <img
        src={profilePic}
        alt="Profile"
        className="rounded-full h-40 w-40 object-cover"
      />
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
        <p className="text-3xl font-semibold">NUNNA VIJAYA KRISHNA</p>
        <p className="text-xl">Computer Science and Engineering</p>
        <p className="text-xl">Aditya Institute of Technology and Management</p>
        <p className="text-lg">CGPA: 8.71 | Expected Graduation: 2027</p>
      </div>
    </div>

  );
}