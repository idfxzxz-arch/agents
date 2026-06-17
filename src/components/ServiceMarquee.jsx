const items = [
  'Website Development',
  'Landing Page',
  'UI Design',
  'Coding Help',
  'Presentation Design',
  'Document Revision',
  'Online Store',
  'Portfolio Website',
  'Academic Consultation',
  'Task Assistance',
];

export default function ServiceMarquee() {
  return (
    <section className="overflow-hidden border-y border-[#DCE7FF] bg-white py-5">
      <div className="marquee-track flex w-max gap-3">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-[#DCE7FF] bg-[#EAF1FF] px-5 py-2 text-sm font-extrabold text-[#0050F8]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
