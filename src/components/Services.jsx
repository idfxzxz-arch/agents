import { Code2, LayoutDashboard, Palette, Presentation, ShoppingBag, Wand2 } from 'lucide-react';
import { SectionTitle, ServiceCard } from './ui';

const services = [
  {
    icon: LayoutDashboard,
    title: 'Pembuatan Website',
    description: 'Landing page, company profile, portofolio, dan website bisnis yang responsive.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Desain tampilan website yang modern, clean, dan nyaman digunakan.',
  },
  {
    icon: Code2,
    title: 'Bantuan Coding',
    description: 'Konsultasi HTML, CSS, JavaScript, React, PHP, dan project dasar.',
  },
  {
    icon: Wand2,
    title: 'Bantuan Tugas Digital',
    description: 'Pendampingan pengerjaan, revisi, layout, dan penyusunan tugas agar lebih rapi.',
  },
  {
    icon: Presentation,
    title: 'Desain Presentasi',
    description: 'Slide PPT modern, aesthetic, dan siap untuk presentasi.',
  },
  {
    icon: ShoppingBag,
    title: 'Toko Online Sederhana',
    description: 'Website katalog produk, halaman promosi, dan form pemesanan.',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="bg-[#EAF1FF] px-4 py-20 sm:px-6 lg:px-10">
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
