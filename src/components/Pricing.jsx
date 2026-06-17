import { SectionTitle, PricingCard } from './ui';

const plans = [
  {
    name: 'Paket Basic Website',
    features: ['Landing page sederhana', '1 halaman', 'Responsive mobile', 'Desain clean', 'Cocok untuk promosi cepat'],
  },
  {
    name: 'Paket Pro Website',
    popular: true,
    features: ['Website 3 sampai 5 halaman', 'Desain custom', 'Responsive', 'Form kontak / WhatsApp', 'Cocok untuk bisnis dan portofolio'],
  },
  {
    name: 'Paket Student Help',
    features: ['Bantuan tugas digital', 'Revisi file', 'Desain presentasi', 'Konsultasi coding dasar', 'Layout dokumen'],
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="bg-white px-4 py-20 sm:px-6 lg:px-10">
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
