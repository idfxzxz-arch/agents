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
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-10" id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative hidden rounded-[32px] bg-[#EAF1FF] p-6 shadow-[0_24px_70px_rgba(0,80,248,0.12)] sm:block"
        >
          <div className="rounded-[28px] border border-[#DCE7FF] bg-white p-4">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
              <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
              <span className="h-3 w-3 rounded-full bg-[#2ed573]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
              <div className="space-y-4">
                <div className="h-10 w-3/4 rounded-full bg-[#0050F8]" />
                <div className="h-28 rounded-3xl bg-[#EAF1FF]" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 rounded-3xl bg-[#DCE7FF]" />
                  <div className="h-20 rounded-3xl bg-[#DCE7FF]" />
                </div>
              </div>
              <div className="relative flex min-h-56 items-end justify-center rounded-3xl bg-[linear-gradient(145deg,#0050F8,#003ECC)]">
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
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF1FF] px-4 py-2 text-sm font-extrabold text-[#0050F8]">
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
                <CheckCircle2 className="text-[#0050F8]" size={24} />
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
