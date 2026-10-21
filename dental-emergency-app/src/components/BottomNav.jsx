import { House, TriangleAlert } from "lucide-react";

function BottomNav() {
  return (
    <div className="absolute bottom-0 left-0 z-20 w-full">

      <div
        className="
        mx-auto
        flex
        justify-around
        border-t
        border-white/20
        bg-black/30
        py-4
        backdrop-blur-md
        "
      >

        <button className="flex items-center gap-2 text-white">
          <House size={20} />
          Home
        </button>

        <button className="flex items-center gap-2 text-white">
          <TriangleAlert size={20} />
          Emergencies
        </button>

      </div>

    </div>
  );
}

export default BottomNav;