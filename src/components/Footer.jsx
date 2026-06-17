const links = [
  ['Home', '#home'],
  ['Layanan', '#layanan'],
  ['Harga', '#harga'],
  ['Portofolio', '#portofolio'],
  ['Kontak', '#kontak'],
];

export default function Footer() {
  return (
    <footer className="bg-[#102033] px-4 py-12 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1">
              <img src="/ox-logo.jpeg" alt="OX Creative logo" className="h-full w-full rounded-full object-cover" />
            </span>
            <span className="text-xl font-extrabold">OX Creative</span>
          </a>
          <p className="mt-5 max-w-md leading-7 text-white/68">
            Jasa website dan bantuan tugas digital dengan tampilan modern, proses cepat, dan hasil rapi.
          </p>
        </div>

        <div>
          <h3 className="font-extrabold">Menu</h3>
          <div className="mt-4 grid gap-3">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="text-white/68 transition hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-extrabold">Kontak</h3>
          <div className="mt-4 grid gap-3 text-white/68">
            <a href="https://wa.me/6280000000000" className="transition hover:text-white">WhatsApp</a>
            <a href="https://instagram.com/" className="transition hover:text-white">Instagram</a>
            <a href="mailto:hello@oxcreative.id" className="transition hover:text-white">Email</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/50">
        Copyright 2026 OX Creative. All rights reserved.
      </div>
    </footer>
  );
}
