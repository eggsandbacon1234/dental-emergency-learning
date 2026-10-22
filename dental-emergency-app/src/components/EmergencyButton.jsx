import { useNavigate } from "react-router-dom";
function EmergencyButton() {

  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/emergencies")}
      className="
      rounded-full
      border-4
      border-red-300
      bg-red-600
      px-14
      py-4
      text-lg
      font-bold
      text-white
      shadow-[0_0_40px_rgba(239,68,68,0.6)]
      transition
      hover:bg-red-700
      "
    >
      EMERGENCY
    </button>
  );
}

export default EmergencyButton;