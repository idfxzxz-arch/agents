import { ProjectCard, SectionTitle } from './ui';

const projects = [
  {
    title: 'Asoka',
    category: 'Website Bisnis',
    href: 'https://asoka-chi.vercel.app/',
    image: '/portfolio/asoka.png',
    accent: '#FF7A59',
  },
  {
    title: 'Bakpia Raizhel',
    category: 'Website Produk UMKM',
    href: 'https://bakpia-raizhel.vercel.app/',
    image: '/portfolio/bakpia-raizhel.png',
    accent: '#FFB703',
  },
  {
    title: 'Jadah Tempe',
    category: 'Landing Page Kuliner',
    href: 'https://jadah-tempe.vercel.app/',
    image: '/portfolio/jadah-tempe.png',
    accent: '#2BD99F',
  },
  {
    title: 'Obigo',
    category: 'Website Brand',
    href: 'https://obigo.vercel.app/',
    image: '/portfolio/obigo.png',
    accent: '#5B7CFA',
  },
  {
    title: 'RT RW Beryl',
    category: 'Website Informasi',
    href: 'https://rt-rw-beryl.vercel.app',
    image: '/portfolio/rt-rw-beryl.png',
    accent: '#19D3FF',
  },
  {
    title: 'Maps Rose Kappa',
    category: 'Website Maps',
    href: 'https://maps-rose-kappa.vercel.app',
    image: '/portfolio/maps-rose-kappa.png',
    accent: '#FF8A7A',
  },
];

export default function Projects() {
  return (
    <section id="portofolio" className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_20%,#FF8A7A_0%,transparent_24%),radial-gradient(circle_at_88%_12%,#FFE66D_0%,transparent_20%),radial-gradient(circle_at_80%_86%,#2BD99F_0%,transparent_22%),linear-gradient(135deg,#102033_0%,#233A8B_50%,#5B2C83_100%)] px-4 py-20 sm:px-6 lg:px-10">
      <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
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
