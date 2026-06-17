import { motion } from 'framer-motion';
import { CheckCircle2, MonitorSmartphone, Sparkles } from 'lucide-react';
import Mascot from './Mascot';

const points = [
  'Proses cepat dan komunikatif',
  'Desain modern dan responsive',
  'Hasil rapi, jelas, dan siap digunakan',
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFF9EA_0%,#FFFFFF_48%,#F0FFF8_100%)] px-4 py-20 sm:px-6 lg:px-10" id="about">
      <div className="absolute -left-24 top-20 h-60 w-60 rounded-full bg-[#FF8A7A]/18 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#4FF0B7]/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative hidden rounded-[32px] bg-[linear-gradient(145deg,#FFF2B8,#DFFBFF_52%,#EAF1FF)] p-6 shadow-[0_24px_70px_rgba(255,138,122,0.14)] sm:block"
        >
          <div className="rounded-[28px] border border-[#DCE7FF] bg-white p-4">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
              <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
              <span className="h-3 w-3 rounded-full bg-[#2ed573]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
              <div className="space-y-4">
                <div className="h-10 w-3/4 rounded-full bg-[#FF8A7A]" />
                <div className="h-28 rounded-3xl bg-[#FFF3D6]" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 rounded-3xl bg-[#DFF9F0]" />
                  <div className="h-20 rounded-3xl bg-[#EEE9FF]" />
                </div>
              </div>
              <div className="relative flex min-h-56 items-end justify-center rounded-3xl bg-[linear-gradient(145deg,#0050F8,#7C5CFF_55%,#FF8A7A)]">
                <Mascot compact />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0EC] px-4 py-2 text-sm font-extrabold text-[#FF7A59]">
            <Sparkles size={17} />
            Tentang OX Creative
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102033] md:text-5xl">
            Solusi Digital Buat Kamu yang Mau Beres Tanpa Ribet
          </h2>
          <p className="mt-5 text-base leading-8 text-[#6B7A90] md:text-lg">
            Kami membantu pembuatan website dan kebutuhan tugas digital dengan hasil yang rapi, modern, dan mudah dipahami. Cocok untuk mahasiswa, pelajar, UMKM, kreator, dan siapa pun yang butuh bantuan digital secara cepat dan profesional.
          </p>
          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-2xl border border-[#DCE7FF] bg-white p-4 shadow-[0_12px_34px_rgba(0,80,248,0.07)]">
                <CheckCircle2 className="text-[#2BD99F]" size={24} />
                <span className="font-bold text-[#102033]">{point}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm font-extrabold text-[#0050F8]">
            <MonitorSmartphone size={21} />
            Website rapi di HP, tablet, dan desktop.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
