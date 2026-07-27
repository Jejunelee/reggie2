import Header from "./components/Header";
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import MyStory from "./components/MyStory"
import Lead from "./components/Lead"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Feature />
      <MyStory />
      <Lead />
    </div>
  );
}