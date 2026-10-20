function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 w-full p-8">
      <div className="flex items-center gap-3">

        <img
          src="/images/logo.png"
          alt="Dental Emergency Learning"
          className="w-14 h-14"
        />

        <div>
          <h2 className="font-bold text-white">
            Dental Emergency
          </h2>

          <p className="text-sm text-white/80">
            Learning
          </p>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;