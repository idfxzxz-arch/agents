import { ProjectCard, SectionTitle } from './ui';

const projects = [
  {
    title: 'Asoka',
    category: 'Website Bisnis',
    href: 'https://asoka-chi.vercel.app/',
    accent: '#0050F8',
  },
  {
    title: 'Bakpia Raizhel',
    category: 'Website Produk UMKM',
    href: 'https://bakpia-raizhel.vercel.app/',
    accent: '#00A6FF',
  },
  {
    title: 'Jadah Tempe',
    category: 'Landing Page Kuliner',
    href: 'https://jadah-tempe.vercel.app/',
    accent: '#003ECC',
  },
  {
    title: 'Obigo',
    category: 'Website Brand',
    href: 'https://obigo.vercel.app/',
    accent: '#5B7CFA',
  },
  {
    title: 'RT RW Beryl',
    category: 'Website Informasi',
    href: 'https://rt-rw-beryl.vercel.app',
    accent: '#1E7BFF',
  },
  {
    title: 'Maps Rose Kappa',
    category: 'Website Maps',
    href: 'https://maps-rose-kappa.vercel.app',
    accent: '#2CCBFF',
  },
];

export default function Projects() {
  return (
    <section id="portofolio" className="bg-[#0050F8] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle light title="Portofolio" description="Beberapa website yang sudah pernah dibuat dengan tampilan modern, rapi, dan siap diakses online." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
