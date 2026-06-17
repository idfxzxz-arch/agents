const items = [
  ['Website Development', '#0050F8', '#EAF1FF'],
  ['Landing Page', '#22C7F2', '#E8FAFF'],
  ['UI Design', '#FF7A59', '#FFF0EC'],
  ['Coding Help', '#7C5CFF', '#F0EDFF'],
  ['Presentation Design', '#FFB703', '#FFF6DA'],
  ['Document Revision', '#2BD99F', '#E9FFF7'],
  ['Online Store', '#0050F8', '#EAF1FF'],
  ['Portfolio Website', '#22C7F2', '#E8FAFF'],
  ['Academic Consultation', '#FF7A59', '#FFF0EC'],
  ['Task Assistance', '#7C5CFF', '#F0EDFF'],
];

export default function ServiceMarquee() {
  return (
    <section className="overflow-hidden border-y border-[#DCE7FF] bg-white py-5">
      <div className="marquee-track flex w-max gap-3">
        {[...items, ...items].map(([item, color, background], index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-[#DCE7FF] px-5 py-2 text-sm font-extrabold"
            style={{ color, background }}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
