function HeroSection() {
  return (
    <section className="relative z-20 flex h-screen items-center">

      <div className="max-w-2xl px-10 md:px-20">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
          Welcome back,
          <br />
          future clinician
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/90">
          Build critical skills.
          Save lives.
          Feel prepared.
        </p>

        <button
          className="
          mt-8
          rounded-xl
          bg-blue-600
          px-6
          py-3
          text-white
          font-medium
          shadow-lg
          transition
          hover:bg-blue-700
          "
        >
          View Emergencies
        </button>

      </div>

    </section>
  );
}

export default HeroSection;
