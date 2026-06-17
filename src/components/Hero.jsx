import { motion } from 'framer-motion';
import { Code2, FileText, Laptop, MessageCircle, PanelsTopLeft } from 'lucide-react';
import Mascot from './Mascot';
import { ButtonPrimary, ButtonSecondary } from './ui';

const decorations = [
  { Icon: Laptop, label: 'Laptop', className: 'left-0 top-20 bg-[#19D3FF]/30 text-white', delay: 0 },
  { Icon: PanelsTopLeft, label: 'Browser', className: 'right-4 top-8 bg-[#FFF0A8] text-[#102033]', delay: 0.2 },
  { Icon: Code2, label: 'Code', className: 'left-8 bottom-12 bg-[#FFE66D]/34 text-white', delay: 0.4 },
  { Icon: FileText, label: 'Dokumen', className: 'right-10 bottom-20 bg-[#4FF0B7]/34 text-white', delay: 0.6 },
  { Icon: MessageCircle, label: 'Chat', className: 'right-28 top-40 bg-[#FF8A7A]/34 text-white', delay: 0.8 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_16%_22%,#FF8A7A_0%,transparent_26%),radial-gradient(circle_at_82%_18%,#FFE66D_0%,transparent_22%),radial-gradient(circle_at_72%_76%,#4FF0B7_0%,transparent_24%),linear-gradient(135deg,#0050F8_0%,#6C5CFF_48%,#003ECC_100%)] px-4 pb-16 pt-32 text-white sm:px-6 lg:px-10 lg:pb-24 lg:pt-36"
    >
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-white/18 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-52 w-52 rounded-full bg-[#4FF0B7]/25 blur-3xl" />
      <div className="absolute -right-16 top-24 h-56 w-56 rounded-full bg-[#FFE66D]/22 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.02fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative z-10 text-center lg:text-left"
        >
          <span className="inline-flex rounded-full border border-white/24 bg-white/14 px-4 py-2 text-sm font-bold shadow-lg backdrop-blur-xl">
            Website • Coding • Tugas Digital
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl xl:text-7xl">
            Jasa Website & Bantuan Tugas Digital
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg lg:mx-0">
            Bikin website, desain, coding, presentasi, dan tugas digital jadi lebih rapi, cepat, dan profesional.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <ButtonPrimary href="#kontak">Pesan Sekarang</ButtonPrimary>
            <ButtonSecondary href="#layanan">Lihat Layanan</ButtonSecondary>
          </div>
        </motion.div>

        <div className="relative hidden min-h-[30rem] sm:block">
          <div className="absolute inset-x-4 top-14 h-64 rounded-full bg-white/20 blur-3xl" />
          <Mascot />
          {decorations.map(({ Icon, label, className, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ opacity: { delay, duration: 0.4 }, scale: { delay, duration: 0.4 }, y: { delay, duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
              className={`absolute hidden items-center gap-2 rounded-2xl border border-white/24 px-4 py-3 text-sm font-bold shadow-[0_18px_40px_rgba(0,35,120,0.18)] backdrop-blur-xl sm:flex ${className}`}
            >
              <Icon size={18} />
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
