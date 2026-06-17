import Mascot from './Mascot';
import { ButtonPrimary } from './ui';

export default function CTA() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_22%,#FFE66D_0%,transparent_24%),radial-gradient(circle_at_84%_18%,#FF8A7A_0%,transparent_25%),radial-gradient(circle_at_74%_88%,#4FF0B7_0%,transparent_24%),linear-gradient(135deg,#0050F8_0%,#7C5CFF_50%,#003ECC_100%)] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -left-24 bottom-8 h-64 w-64 rounded-full bg-[#FF8A7A]/22 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div className="relative z-10 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
            Butuh Website atau Bantuan Tugas Digital?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 md:text-lg lg:mx-0">
            Konsultasi dulu aja. Jelaskan kebutuhanmu, nanti kami bantu arahkan paket yang paling cocok.
          </p>
          <div className="mt-8">
            <ButtonPrimary href="https://wa.me/6280000000000">Chat WhatsApp Sekarang</ButtonPrimary>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-8 rounded-full bg-white/25 blur-3xl" />
          <Mascot compact />
        </div>
      </div>
    </section>
  );
}
