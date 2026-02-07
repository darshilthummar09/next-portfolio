'use client'

import Link from 'next/link'
import Image from 'next/image'
import ConstrainedBox from '../core/constrained-box'
import ResponsiveBox from '../core/ResponsiveBox'
import Row from '../core/Row'
import socialLinks from '../../data/importantLinks'

const highlights = [
  { title: 'MERN + Next.js', subtitle: 'Product-ready stacks' },
  { title: 'API-first', subtitle: 'Scalable services' },
  { title: 'Design-aware', subtitle: 'Polished UI' },
]

const principles = [
  'Clean architecture with TypeScript.',
  'Performance-minded UI and API design.',
  'Collaborative, product-first mindset.',
]

const HomeSection = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="section-shell min-h-screen items-center justify-center relative overflow-hidden"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="pill w-fit">Available for collaboration</span>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[var(--textColorLight)] mb-4">
                Full Stack Developer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                I build{' '}
                <span className="gradient-text font-display">fast, modern</span>{' '}
                web products and scalable backends.
              </h1>
              <p className="text-base sm:text-lg text-[var(--textColorLight)] mt-5 max-w-xl">
                I am Darshil Thummar, a MERN and Next.js developer focused on
                crafting polished experiences, clear architecture, and reliable
                performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-[var(--primaryColor)] text-black font-semibold shadow-[0_10px_24px_rgba(244,184,74,0.35)] hover:translate-y-[-2px] transition"
              >
                Let's build something
              </Link>
              <a
                href="/Darshil Thummar.pdf"
                className="px-6 py-3 rounded-full border border-white/15 text-[var(--textColor)] hover:border-[var(--primaryColor)] hover:text-[var(--primaryColor)] transition"
                download="Darshil_Thummar_Resume.pdf"
              >
                View resume
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item.title} className="section-surface p-4">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-[var(--textColorLight)] mt-2">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--textColorLight)]">
                Find me on
              </p>
              <Row classNames="mt-3 gap-4">
                {socialLinks?.map((link, index) => (
                  <Link
                    key={`social-link-${index}`}
                    href={link.url}
                    target="_blank"
                    aria-label={`${link.name}`}
                    className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 text-xl text-[var(--textColor)] hover:border-[var(--primaryColor)] hover:text-[var(--primaryColor)] transition"
                  >
                    {link.iconImage ? (
                      <Image
                        src={link.iconImage}
                        alt={`${link.name ?? "Social"} logo`}
                        width={22}
                        height={22}
                        className="w-5 h-5 object-contain"
                      />
                    ) : (
                      <i className={link.icon} />
                    )}
                  </Link>
                ))}
              </Row>
            </div>
          </div>

          <div className="glass-card p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--primaryColor30)] blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-2xl overflow-hidden border border-white/15">
                  <Image
                    src="/darshilthummar.JPG"
                    alt="Darshil Thummar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold">Darshil Thummar</p>
                  <p className="text-sm text-[var(--textColorLight)]">
                    MERN Stack and Next.js
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {principles.map((item) => (
                  <div
                    key={item}
                    className="section-surface px-4 py-3 text-sm text-[var(--textColorLight)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  )
}

export default HomeSection
