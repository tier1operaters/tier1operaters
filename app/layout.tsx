import "../styles/globals.css";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata = {
  title: "Get Clean Windows | Premium Window Cleaning",
  description:
    "Get Clean Windows offers premium residential and commercial window cleaning with instant quotes, stunning results, and modern service.",
  keywords: [
    "window cleaning",
    "get clean windows",
    "residential window cleaning",
    "commercial window cleaning",
    "window washers near me",
    "glass cleaning",
    "modern window cleaning",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 60%, #38BDF8 100%)', minHeight: '100vh' }}
    >
      <body
        className="bg-gradient-to-br from-blue-950 via-blue-800 to-sky-400 text-white font-inter min-h-screen"
        style={{ color: '#F8FAFC', minHeight: '100vh', margin: 0 }}
      >
        {children}
        <script src="/particles.js" />
      </body>
    </html>
  );
}
