import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";

function Home() {
  return (
    <>
      <Navbar />
      
      <Hero />
      <Stats />
      <NewsCard/>
      
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;