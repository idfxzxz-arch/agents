import { Menu } from 'lucide-react';

const links = [
  ['Home', '#home'],
  ['Layanan', '#layanan'],
  ['Harga', '#harga'],
  ['Portofolio', '#portofolio'],
  ['Kontak', '#kontak'],
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 py-5 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/18 bg-white/10 px-4 py-3 text-white shadow-[0_18px_50px_rgba(0,35,120,0.16)] backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-lg">
            <img src="/ox-logo.jpeg" alt="OX Creative logo" className="h-full w-full rounded-full object-cover" />
          </span>
          <span className="text-lg font-extrabold">OX Creative</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold transition hover:opacity-70">
              {label}
            </a>
          ))}
        </div>

        <a
          href="#kontak"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-[#0050F8] shadow-lg transition hover:bg-[#EAF1FF] sm:inline-flex"
        >
          Chat WhatsApp
        </a>

        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/14 md:hidden" aria-label="Buka menu">
          <Menu size={22} />
        </button>
      </nav>
    </header>
  );
}
