import { ProfileCard } from "./components/profileCard";
import { AboutMe } from "./components/aboutMe";
import { LangaugesKnown } from "./components/languagesKnown";
import { Technologies } from "./components/technologies";
import { ProjectCard1 } from "./components/projectCard1";
import { ProjectCards } from "./components/projectCards";


function App() {

  return (
    <div className="opacity-0 animate-fadeIn">
      <ProfileCard />
      <AboutMe />
      <LangaugesKnown />
      <Technologies />
      <ProjectCards />
    </div>
  )
}

export default App
