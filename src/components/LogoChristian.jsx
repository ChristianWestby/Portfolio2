export default function LogoChristian() {
  return (
    <div className="flex flex-col items-center text-white w-full max-w-[300px]">
      {/* Øverste linje */}
      <div className="w-full h-px bg-white mb-2" />

      {/* Navn */}
      <div className="text-center leading-tight">
        <p className="text-xl md:text-2xl font-serif tracking-wider uppercase">Christian</p>
        <p className="text-lg md:text-xl font-light tracking-widest uppercase">Westby</p>
      </div>

      {/* Nederste linje */}
      <div className="w-full h-px bg-white mt-2" />
    </div>
  );
}