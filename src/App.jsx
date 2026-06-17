import { Github, Mail, Twitter } from 'lucide-react';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4';
const ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4';
const CTA_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4';

const navItems = ['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'];
const socialIcons = [Mail, Twitter, Github];

const nftCards = [
  {
    score: '8.7/10',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
  },
  {
    score: '9/10',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
  },
  {
    score: '8.2/10',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
  },
];

function VideoBackground({ src }) {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

function SocialButton({ Icon }) {
  return (
    <a
      href="#contact"
      className="liquid-glass flex h-14 w-14 items-center justify-center rounded-[1rem] text-cream transition hover:bg-white/10"
      aria-label="Social link"
    >
      <Icon size={20} strokeWidth={1.8} />
    </a>
  );
}

function SocialButtons({ className = '' }) {
  return (
    <div className={className}>
      {socialIcons.map((Icon) => (
        <SocialButton key={Icon.displayName || Icon.name} Icon={Icon} />
      ))}
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between px-5 py-6 text-cream sm:px-8 lg:px-12 lg:py-10">
      <a href="#home" className="group flex items-center gap-3">
        <span className="liquid-glass flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl p-1 shadow-[0_0_30px_rgba(111,255,0,0.16)]">
          <img
            src="/alphacode-logo.jpeg"
            alt="AlphaCode logo"
            className="h-full w-full rounded-xl object-cover"
          />
        </span>
        <span className="font-grotesk text-base uppercase tracking-wide transition group-hover:text-neon">
          AlphaCode
        </span>
      </a>

      <nav className="liquid-glass hidden rounded-[28px] px-[52px] py-[24px] lg:block">
        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
              className="font-grotesk text-[13px] uppercase tracking-wide transition hover:text-neon"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="h-6 w-[72px]" />
    </header>
  );
}

function AlphaCodeWatermark() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] max-w-[18rem] text-right sm:bottom-6 sm:right-6">
      <div className="liquid-glass rounded-2xl px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
        <div className="flex items-center justify-end gap-3">
          <img
            src="/alphacode-logo.jpeg"
            alt="AlphaCode logo"
            className="h-9 w-9 rounded-xl object-cover"
          />
          <p className="font-grotesk text-xl uppercase leading-none text-cream sm:text-2xl">
            AlphaCode
          </p>
        </div>
        <p className="mt-1 font-mono text-[10px] uppercase leading-4 text-cream/70 sm:text-xs">
          Melayani jasa pembuatan website & bantuan tugas
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden rounded-b-[32px] bg-background">
      <VideoBackground src={HERO_VIDEO} />
      <div className="absolute inset-0 bg-background/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1831px] flex-col">
        <Header />

        <div className="relative flex flex-1 items-center px-5 pb-16 pt-12 sm:px-8 lg:px-12">
          <div className="relative lg:ml-32">
            <h1 className="max-w-[780px] font-grotesk text-[40px] uppercase leading-[1.05] text-cream sm:text-[60px] md:text-[75px] md:leading-none lg:text-[90px]">
              Beyond earth
              <br />
              and ( its ) familiar boundaries
            </h1>
            <p className="absolute -right-3 top-[47%] rotate-[-1deg] font-condiment text-2xl normal-case text-neon opacity-90 mix-blend-exclusion sm:-right-14 sm:text-4xl md:text-5xl lg:right-[-8.5rem]">
              Nft collection
            </p>

            <SocialButtons className="mt-12 flex justify-center gap-4 lg:hidden" />
          </div>

          <SocialButtons className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-4 lg:flex" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const intro =
    'A digital object fixed beyond time and place. An exploration of distance, form, and silence in space';

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <VideoBackground src={ABOUT_VIDEO} />
      <div className="absolute inset-0 bg-background/10" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1831px] flex-col justify-between px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative inline-block">
            <h2 className="font-grotesk text-[32px] uppercase leading-none text-cream sm:text-[48px] lg:text-[60px]">
              Hello!
              <br />
              I&apos;m orbis
            </h2>
            <span className="absolute -bottom-6 right-0 rotate-[-4deg] font-condiment text-[36px] normal-case text-neon mix-blend-exclusion sm:text-[52px] lg:text-[68px]">
              Orbis
            </span>
          </div>

          <p className="max-w-[266px] font-mono text-sm uppercase leading-6 text-cream sm:text-base">
            {intro}
          </p>
        </div>

        <div className="flex justify-between gap-10 pt-20 font-mono text-sm uppercase leading-6 text-[#010828] lg:text-cream/10">
          <div className="max-w-[330px] space-y-6">
            <p>{intro}</p>
            <p>{intro}</p>
          </div>
          <div className="hidden max-w-[330px] space-y-6 lg:block">
            <p>{intro}</p>
            <p>{intro}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CollectionCard({ video, score }) {
  return (
    <article className="liquid-glass group rounded-[32px] p-[18px] transition hover:bg-white/10">
      <div className="relative overflow-hidden rounded-[24px] pb-[100%]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="liquid-glass absolute inset-x-4 bottom-4 flex items-center justify-between rounded-[20px] px-5 py-4 text-cream">
          <div>
            <p className="font-grotesk text-[11px] uppercase tracking-wide text-cream/70">
              Rarity score:
            </p>
            <p className="mt-1 font-mono text-base">{score}</p>
          </div>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] text-cream shadow-lg shadow-purple-500/50 transition group-hover:scale-110">
            <ArrowIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

function Collection() {
  return (
    <section id="gallery" className="bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1831px]">
        <div className="mb-12 flex flex-col gap-10 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-grotesk text-[32px] uppercase leading-none text-cream sm:text-[48px] lg:text-[60px]">
            Collection of
            <br />
            <span className="ml-12 sm:ml-24 lg:ml-32">
              <span className="font-condiment normal-case text-neon">Space</span> objects
            </span>
          </h2>

          <a href="#buy-nft" className="group w-fit font-grotesk uppercase text-cream">
            <span className="flex items-end gap-3">
              <span className="text-[32px] leading-none sm:text-[48px] lg:text-[60px]">See</span>
              <span className="pb-1 text-[20px] leading-[0.9] sm:text-[28px] lg:text-[36px]">
                All
                <br />
                Creators
              </span>
            </span>
            <span className="mt-2 block h-[6px] w-full bg-neon transition group-hover:scale-x-105 sm:h-2 lg:h-[10px]" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nftCards.map((card) => (
            <CollectionCard key={card.video} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background">
      <video className="block h-auto w-full" src={CTA_VIDEO} autoPlay loop muted playsInline />

      <div className="absolute inset-0 flex items-center justify-end px-5 text-right text-cream sm:px-8 lg:px-12 lg:pl-[15%] lg:pr-[20%]">
        <div className="relative">
          <p className="absolute -left-6 -top-5 rotate-[-4deg] font-condiment text-[17px] normal-case text-neon mix-blend-exclusion sm:-top-10 sm:text-[38px] lg:-left-20 lg:text-[68px]">
            Go beyond
          </p>
          <h2 className="font-grotesk text-[16px] uppercase leading-[1.05] text-cream sm:text-[34px] md:text-[48px] lg:text-[60px]">
            <span className="mb-4 block sm:mb-8 lg:mb-12">Join us.</span>
            Reveal what&apos;s hidden.
            <br />
            Define what&apos;s next.
            <br />
            Follow the signal.
          </h2>
        </div>
      </div>

      <div className="liquid-glass absolute bottom-[12%] left-[8%] flex flex-col overflow-hidden rounded-[0.5rem] sm:bottom-[16%] sm:rounded-[1rem] lg:bottom-[20%] lg:rounded-[1.25rem]">
        {socialIcons.map((Icon, index) => (
          <a
            key={Icon.displayName || Icon.name}
            href="#contact"
            className={`flex h-[12vw] w-[14vw] items-center justify-center text-cream transition hover:bg-white/10 sm:h-[7.5rem] sm:w-[14.375rem] md:h-[6rem] md:w-[10.78125rem] lg:h-[8.25rem] lg:w-[16.77rem] ${
              index < socialIcons.length - 1 ? 'border-b border-white/10' : ''
            }`}
            aria-label="Social link"
          >
            <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.8} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-cream">
      <div className="texture-overlay" />
      <AlphaCodeWatermark />
      <Hero />
      <About />
      <Collection />
      <FinalCta />
    </main>
  );
}
