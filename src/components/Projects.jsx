import { ProjectCard, SectionTitle } from './ui';

const projects = [
  ['Website UMKM', 'Company Profile', '#0050F8'],
  ['Landing Page Produk', 'Campaign Page', '#00A6FF'],
  ['Website Portofolio', 'Personal Brand', '#003ECC'],
  ['Desain Presentasi', 'Pitch Deck', '#5B7CFA'],
];

export default function Projects() {
  return (
    <section id="portofolio" className="bg-[#0050F8] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle light title="Portofolio" description="Beberapa contoh arah visual yang bisa dibuat: clean, modern, mudah dibaca, dan tetap punya karakter." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map(([title, category, accent]) => (
            <ProjectCard key={title} title={title} category={category} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  );
}
