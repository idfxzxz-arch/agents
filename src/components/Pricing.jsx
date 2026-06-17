import { SectionTitle, PricingCard } from './ui';

const plans = [
  {
    name: 'Paket Basic Website',
    features: ['Landing page sederhana', '1 halaman', 'Responsive mobile', 'Desain clean', 'Cocok untuk promosi cepat'],
    accent: '#22C7F2',
  },
  {
    name: 'Paket Pro Website',
    popular: true,
    features: ['Website 3 sampai 5 halaman', 'Desain custom', 'Responsive', 'Form kontak / WhatsApp', 'Cocok untuk bisnis dan portofolio'],
    accent: '#0050F8',
  },
  {
    name: 'Paket Student Help',
    features: ['Bantuan tugas digital', 'Revisi file', 'Desain presentasi', 'Konsultasi coding dasar', 'Layout dokumen'],
    accent: '#FFB703',
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-10">
      <div className="absolute -left-16 top-32 h-48 w-48 rounded-full bg-[#19D3FF]/12 blur-3xl" />
      <div className="absolute -right-16 bottom-16 h-52 w-52 rounded-full bg-[#FF8A7A]/14 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Pilih Paket Sesuai Kebutuhan" description="Mulai dari website promosi sampai pendampingan tugas digital. Konsultasi dulu biar arahnya jelas." />
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
