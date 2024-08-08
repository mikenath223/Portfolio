import Header from "./components/Header";
import Intro from "./components/Intro";
import FeaturedProjects from "./components/FeaturedProjects";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="main-container">
      <Header />
      <Intro />
      <FeaturedProjects />
      <Articles />
      <Footer />
    </main>
  );
}
