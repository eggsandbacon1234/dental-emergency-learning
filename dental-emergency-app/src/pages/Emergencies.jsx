import EmergencyCard from "../components/EmergencyCard";
import { emergencies } from "../data/emergencies";
import { useNavigate } from "react-router-dom";

function Emergencies() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sky-50 text-slate-800">

      <div className="mx-auto max-w-6xl p-8">

        <h1 className="mb-8 text-5xl font-bold text-sky-700">
          Select Emergency Type
        </h1>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          "
        >
          {emergencies.map((emergency) => (
            <EmergencyCard
              key={emergency.id}
              title={emergency.title}
              image={emergency.image}
            />
          ))}
        </div>

      </div>

      <button
        onClick={() => navigate("/")}
        className="
        fixed
        bottom-6
        left-6
        rounded-full
        bg-blue-500
        p-4
        text-white
        shadow-lg
        "
      >
        Home
      </button>

    </div>
  );
}

export default Emergencies;