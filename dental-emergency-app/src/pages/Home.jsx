import Navbar from "../components/Navbar";
import VideoContainer from "../components/VideoContainer";
import EmergencyButton from "../components/EmergencyButton";

function Home() {
  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br from-slate-100 to-blue-50
      flex
      flex-col
      "
    >
      <Navbar />

      <main
        className="
        flex-1
        flex
        flex-col
        items-center
        justify-center
        px-6
        "
      >
        <VideoContainer />

        <div className="mt-6 flex items-center gap-8">
          <EmergencyButton />

          <div className="max-w-xs">
            <p className="text-xs text-slate-500">
              <strong>Disclaimer:</strong>
              <br />
              This guide is intended for educational and quick reference
              purposes only and does not replace professional clinical
              judgement.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;