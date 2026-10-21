import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BottomNav from "../components/BottomNav";

function Home() {
  return (
    <div className="relative h-screen overflow-hidden">

      {/* Video Background */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      >
        <source
          src="/videos/homepage-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/50"></div>

      <Navbar />

      <HeroSection />

      <BottomNav />

    </div>
  );
}

export default Home;