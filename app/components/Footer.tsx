export default function Footer() {
  return (
    <footer className="w-full py-8 px-8 bg-gradient-to-r from-blue-900 via-blue-700 to-sky-400 text-white text-center mt-16 shadow-inner">
      <div className="font-bold text-lg tracking-wide">
        © {new Date().getFullYear()} Get Clean Windows. All rights reserved.
      </div>
    </footer>
  );
}