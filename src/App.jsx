import { ProfileCard } from "./components/profileCard";
import { AboutMe } from "./components/aboutMe";
import { LangaugesKnown } from "./components/languagesKnown";
import { Technologies } from "./components/technologies";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard />
      <AboutMe />
      <LangaugesKnown />
      <Technologies />
    </>
  )
}

export default App
