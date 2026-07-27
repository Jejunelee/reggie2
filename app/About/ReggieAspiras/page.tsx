import MyJourney from "@/app/About/ReggieAspiras/components/MyJourney";
import AboutMe from "@/app/About/ReggieAspiras/components/AboutMe";
import Drive from "@/app/About/ReggieAspiras/components/Drive";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <AboutMe />
      <MyJourney />
      <Drive />
    </div>
  );
}