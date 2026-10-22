function EmergencyCard({ title, image }) {
  return (
    <div
      className="
      relative
      h-64
      overflow-hidden
      rounded-xl
      border-4
      border-white
      shadow-lg
      cursor-pointer
      "
    >
      <img
        src={image}
        alt={title}
        className="
        h-full
        w-full
        object-cover
        "
      />

      <div
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        bg-black/30
        "
      >
        <h2
          className="
          text-center
          text-3xl
          font-bold
          text-red-500
          drop-shadow-lg
          "
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export default EmergencyCard;