import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export function ButtonPrimary({ children, href = '#kontak', className = '' }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0050F8] shadow-[0_18px_50px_rgba(16,32,51,0.18)] transition hover:bg-[#EAF1FF] ${className}`}
    >
      {children}
      <ArrowRight size={18} strokeWidth={2.4} />
    </motion.a>
  );
}

export function ButtonSecondary({ children, href = '#layanan', className = '' }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-full border border-white/45 bg-white/12 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20 ${className}`}
    >
      {children}
    </motion.a>
  );
}

export function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      {eyebrow && (
        <p className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${light ? 'text-white/70' : 'text-[#0050F8]'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-extrabold leading-tight md:text-5xl ${light ? 'text-white' : 'text-[#102033]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mx-auto mt-4 max-w-2xl text-base leading-8 md:text-lg ${light ? 'text-white/78' : 'text-[#6B7A90]'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="rounded-[28px] border border-[#DCE7FF] bg-white p-6 shadow-[0_18px_55px_rgba(0,80,248,0.08)] transition-shadow hover:shadow-[0_24px_70px_rgba(0,80,248,0.16)]"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[linear-gradient(145deg,#FFFFFF,#DCE7FF)] text-[#0050F8] shadow-[inset_-8px_-8px_18px_rgba(0,80,248,0.12),inset_8px_8px_18px_rgba(255,255,255,0.9),0_18px_34px_rgba(0,80,248,0.18)]">
        <Icon size={30} strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-extrabold text-[#102033]">{title}</h3>
      <p className="mt-3 leading-7 text-[#6B7A90]">{description}</p>
    </motion.article>
  );
}

export function PricingCard({ name, features, popular = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className={`relative rounded-[28px] border p-7 shadow-[0_18px_55px_rgba(16,32,51,0.08)] ${popular ? 'border-[#0050F8] bg-[#0050F8] text-white shadow-[0_26px_70px_rgba(0,80,248,0.28)]' : 'border-[#DCE7FF] bg-white text-[#102033]'}`}
    >
      {popular && (
        <span className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-[#0050F8]">
          Paling Populer
        </span>
      )}
      <h3 className="max-w-[13rem] text-2xl font-extrabold">{name}</h3>
      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-6">
            <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${popular ? 'bg-white/18 text-white' : 'bg-[#EAF1FF] text-[#0050F8]'}`}>
              <Check size={15} strokeWidth={3} />
            </span>
            <span className={popular ? 'text-white/86' : 'text-[#6B7A90]'}>{feature}</span>
          </li>
        ))}
      </ul>
      <motion.a
        href="#kontak"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-extrabold ${popular ? 'bg-white text-[#0050F8]' : 'bg-[#0050F8] text-white'}`}
      >
        Konsultasi via WhatsApp
      </motion.a>
    </motion.article>
  );
}

export function ProjectCard({ title, category, href, accent = '#0050F8' }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
    >
      <div className="overflow-hidden rounded-3xl bg-white p-3">
        <div className="rounded-2xl border border-[#DCE7FF] bg-[#EAF1FF] p-3 transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2ed573]" />
          </div>
          <div className="grid min-h-[150px] gap-3 rounded-xl bg-white p-4">
            <div className="h-7 w-2/3 rounded-full" style={{ background: accent }} />
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 rounded-2xl bg-[#EAF1FF]" />
              <div className="aspect-square rounded-2xl" style={{ background: accent }} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-12 rounded-2xl bg-[#DCE7FF]" />
              <div className="h-12 rounded-2xl bg-[#DCE7FF]" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm font-bold text-white/60">{category}</p>
        <h3 className="mt-1 text-xl font-extrabold text-white">{title}</h3>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-extrabold text-[#0050F8]"
        >
          Lihat Detail
        </a>
      </div>
    </motion.article>
  );
}
