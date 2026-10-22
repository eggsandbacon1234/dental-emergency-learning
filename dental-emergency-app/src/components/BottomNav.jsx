import { House, TriangleAlert } from "lucide-react";

function BottomNav() {
  return (
    <footer
      className="
      bg-white
      border-t
      border-slate-200
      "
    >
      <div
        className="
        flex
        justify-around
        py-4
        "
      >

        <button className="flex items-center gap-2 text-slate-700">
          <House size={20} />
          Home
        </button>

        <button className="flex items-center gap-2 text-slate-700">
          <TriangleAlert size={20} />
          Emergencies
        </button>

      </div>
    </footer>
  );
}

export default BottomNav;