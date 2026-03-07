"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
  return (
    <section id="hero-section" className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-sky-400">
      <div className="absolute inset-0 z-0">
        <Image
          id="hero-img"
          src="/hero1.jpg"
          alt="Get Clean Windows Hero"
          fill
          className="object-cover opacity-60"
          priority
          style={{ filter: 'blur(2px) brightness(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-600/60 to-sky-400/40" />
      </div>
      <div className="relative z-10 text-center px-8 py-12 max-w-2xl mx-auto rounded-3xl shadow-2xl backdrop-blur-xl bg-white/20 border border-white/30">
        <h1 className="text-5xl md:text-7xl font-extrabold font-space-grotesk text-white drop-shadow-xl mb-4">
          Get <span className="text-sky-400">Clean</span> <span className="text-green-400">Windows</span>
        </h1>
        <p className="mt-2 text-2xl md:text-3xl font-inter text-white/90 mb-8 drop-shadow-lg">
          Premium Residential & Commercial Window Cleaning
        </p>
        <a href="/estimate">
          <button className="mt-4 bg-sky-400 hover:bg-green-400 text-slate-900 font-bold px-10 py-4 rounded-2xl text-xl shadow-xl transition-all duration-300">
            Get Instant Estimate
          </button>
        </a>
      </div>
      <div className="particle-bg" />
    </section>
  );
}