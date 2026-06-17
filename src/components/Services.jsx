import { Code2, LayoutDashboard, Palette, Presentation, ShoppingBag, Wand2 } from 'lucide-react';
import { SectionTitle, ServiceCard } from './ui';

const services = [
  {
    icon: LayoutDashboard,
    title: 'Pembuatan Website',
    description: 'Landing page, company profile, portofolio, dan website bisnis yang responsive.',
    accent: '#0050F8',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Desain tampilan website yang modern, clean, dan nyaman digunakan.',
    accent: '#FF7A59',
  },
  {
    icon: Code2,
    title: 'Bantuan Coding',
    description: 'Konsultasi HTML, CSS, JavaScript, React, PHP, dan project dasar.',
    accent: '#22C7F2',
  },
  {
    icon: Wand2,
    title: 'Bantuan Tugas Digital',
    description: 'Pendampingan pengerjaan, revisi, layout, dan penyusunan tugas agar lebih rapi.',
    accent: '#7C5CFF',
  },
  {
    icon: Presentation,
    title: 'Desain Presentasi',
    description: 'Slide PPT modern, aesthetic, dan siap untuk presentasi.',
    accent: '#FFB703',
  },
  {
    icon: ShoppingBag,
    title: 'Toko Online Sederhana',
    description: 'Website katalog produk, halaman promosi, dan form pemesanan.',
    accent: '#2BD99F',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-[#EAF1FF] px-4 py-20 sm:px-6 lg:px-10">
      <div className="absolute left-0 top-20 h-52 w-52 rounded-full bg-[#FFB703]/20 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-60 w-60 rounded-full bg-[#2BD99F]/20 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Layanan Kami" description="Pilih bantuan digital yang paling pas. Semua dibuat dengan alur yang jelas, visual yang clean, dan hasil yang siap dipakai." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
