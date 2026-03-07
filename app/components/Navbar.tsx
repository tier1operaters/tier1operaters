export default function Navbar() {
  return (
    <nav className="w-full py-5 px-10 flex justify-between items-center bg-gradient-to-r from-blue-900/90 via-blue-600/80 to-sky-400/70 shadow-xl fixed top-0 z-50 backdrop-blur-lg">
      <div className="font-extrabold text-3xl text-white tracking-tight drop-shadow-lg" style={{letterSpacing: '0.01em'}}>
        <span style={{color: '#38BDF8'}}>Get</span> Clean <span style={{color: '#22C55E'}}>Windows</span>
      </div>
      <div className="space-x-8 text-lg font-semibold">
        <a href="/" className="hover:text-sky-300 transition">Home</a>
        <a href="/services" className="hover:text-sky-300 transition">Services</a>
        <a href="/estimate" className="hover:text-sky-300 transition">Estimate</a>
        <a href="/about" className="hover:text-sky-300 transition">About</a>
        <a href="/contact" className="hover:text-sky-300 transition">Contact</a>
      </div>
    </nav>
  );
}