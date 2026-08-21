'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ConstrainedBox from '../core/constrained-box'
import { cn } from '@/utils/cn'

const badges = [
  { icon: '/skills/react.svg', label: 'React.js' },
  { icon: '/skills/nextjs.png', label: 'Next.js' },
  { icon: '/skills/nodejs.svg', label: 'Node.js' },
]

const particles = [
  { top: '14%', left: '30%', size: 3, duration: 5.5, delay: 0 },
  { top: '58%', left: '20%', size: 2, duration: 6.5, delay: 0.8 },
  { top: '30%', left: '72%', size: 2.5, duration: 5, delay: 1.4 },
  { top: '72%', left: '64%', size: 3, duration: 7, delay: 0.4 },
]

type GazePhase = 'coding' | 'noticing' | 'looking' | 'returning'

const HomeSection = (_props: { id?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // -------------------------------------------------------------------
  // SCROLL TIMELINE — the outer container is ~3× viewport height so the
  // sticky inner viewport stays pinned while scrollYProgress travels
  // 0 → 1 across the full scroll distance, driving the cinematic arc.
  // -------------------------------------------------------------------
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.5,
  })

  // ---- Gaze phase — derived from scroll position for the status chip ----
  const [gazePhase, setGazePhase] = useState<GazePhase>('coding')

  useMotionValueEvent(smoothProgress, 'change', (v) => {
    if (v < 0.20) setGazePhase('coding')
    else if (v < 0.42) setGazePhase('noticing')
    else if (v < 0.78) setGazePhase('looking')
    else setGazePhase('returning')
  })

  const gazeLabel = useMemo(() => {
    switch (gazePhase) {
      case 'coding':
        return { text: 'In the zone 💻', color: 'bg-[var(--primaryColor)]' }
      case 'noticing':
        return { text: 'Hmm? 👀', color: 'bg-amber-400' }
      case 'looking':
        return { text: 'Says hi 👋', color: 'bg-emerald-400' }
      case 'returning':
        return { text: 'Back to work 💻', color: 'bg-[var(--primaryColor)]' }
    }
  }, [gazePhase])

  // Mobile multiplier — scales down extreme rotations to prevent cropping
  const m = isMobile ? 0.55 : 1

  // -------------------------------------------------------------------
  // CINEMATIC GAZE TIMELINE — purely scroll-position-driven.
  // Each transform maps scroll progress → transform values.
  // The arc: coding → notices → faces viewer → holds → returns.
  // Because useTransform interpolates, scroll reversal (scrolling UP)
  // automatically plays the animation in reverse.
  // -------------------------------------------------------------------

  // Head/body Y-rotation: positive = toward screen, negative = toward viewer
  const gazeRotateY = useTransform(
    smoothProgress,
    [0, 0.18, 0.32, 0.45, 0.65, 0.82, 1],
    [14 * m, 14 * m, 4 * m, -6 * m, -6 * m, 8 * m, 14 * m]
  )

  // Head/body X-tilt: slight nod
  const gazeRotateX = useTransform(
    smoothProgress,
    [0, 0.18, 0.45, 0.65, 0.82, 1],
    [2 * m, 2 * m, -2.5 * m, -2.5 * m, 1 * m, 2 * m]
  )

  // Subtle zoom — peaks at interaction point
  const gazeScale = useTransform(
    smoothProgress,
    [0, 0.18, 0.45, 0.65, 0.82, 1],
    [0.97, 0.97, 1.05, 1.05, 1.0, 0.97]
  )

  // Horizontal drift to sell the head-turn illusion
  const gazeX = useTransform(
    smoothProgress,
    [0, 0.18, 0.45, 0.65, 0.82, 1],
    [-12 * m, -12 * m, 10 * m, 10 * m, 0, -12 * m]
  )

  // Screen glow: bright during coding, dims during interaction, returns
  const screenGlowOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.40, 0.65, 0.82, 1],
    [0.85, 0.85, 0.10, 0.10, 0.65, 0.85]
  )

  // Viewer glow: dim during coding, bright during interaction, returns
  const viewerGlowOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.40, 0.65, 0.82, 1],
    [0.10, 0.10, 0.80, 0.80, 0.18, 0.10]
  )

  // ---- Subtle camera — much gentler than the old fly-away effect ----
  const cameraRotateX = useTransform(
    smoothProgress,
    [0, 0.40, 0.65, 1],
    [0, -2.5 * m, -2.5 * m, 0]
  )
  const cameraRotateY = useTransform(
    smoothProgress,
    [0, 0.40, 0.65, 1],
    [0, 1.5 * m, 1.5 * m, 0]
  )
  const cameraScale = useTransform(
    smoothProgress,
    [0, 0.40, 0.65, 1],
    [1, 1.02, 1.02, 1]
  )

  // ---- Background layers ----
  const scaleGlow = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.06, 1])
  const gridOpacity = useTransform(
    smoothProgress,
    [0, 0.40, 0.65, 1],
    [0.06, 0.025, 0.025, 0.06]
  )

  // Blurred echo layer
  const scaleEcho = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.12, 1])
  const opacityEcho = useTransform(
    smoothProgress,
    [0, 0.30, 0.70, 1],
    [0.35, 0.12, 0.12, 0.35]
  )

  // ---- Badge / floating chip participation ----
  const badgeOpacity = useTransform(
    smoothProgress,
    [0, 0.32, 0.48, 0.72, 0.88, 1],
    [1, 1, 0.35, 0.35, 0.92, 1]
  )
  const badgeScale = useTransform(
    smoothProgress,
    [0, 0.32, 0.48, 0.72, 0.88, 1],
    [1, 1, 0.82, 0.82, 0.97, 1]
  )

  // Cinematic vignette — darkens edges at peak interaction to focus on character
  const vignetteOpacity = useTransform(
    smoothProgress,
    [0, 0.38, 0.52, 0.68, 0.85, 1],
    [0, 0, 0.4, 0.4, 0, 0]
  )

  // Section fade at the very end as sticky releases
  const sectionOpacity = useTransform(smoothProgress, [0, 0.94, 1], [1, 1, 0.88])

  // Scroll indicator fades out quickly once scrolling begins
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.10], [1, 0])

  // Text column subtle counter-rotation for depth
  const textRotateY = useTransform(
    smoothProgress,
    [0, 0.40, 0.65, 1],
    [0, -1.5 * m, -1.5 * m, 0]
  )

  // ---- Pointer-driven local tilt (unchanged — composes with scroll camera) ----
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const roomRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), { damping: 20, stiffness: 50 })
  const roomRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), { damping: 20, stiffness: 50 })
  const xText = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 50 })

  const panelRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { damping: 18, stiffness: 90 })
  const panelRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { damping: 18, stiffness: 90 })
  const panelX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 18, stiffness: 90 })
  const panelY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), { damping: 18, stiffness: 90 })

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      const xPct = e.clientX / window.innerWidth - 0.5
      const yPct = e.clientY / window.innerHeight - 0.5
      mouseX.set(xPct)
      mouseY.set(yPct)
    }

    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[var(--background)]"
      style={{ height: isMobile ? '250vh' : '300vh' }}
      id="home"
    >
      {/* Sticky viewport — stays pinned while the outer container scrolls,
          giving the scroll-driven animation room to unfold cinematically */}
      <motion.div
        style={{ opacity: sectionOpacity }}
        className="sticky top-0 h-screen w-full overflow-hidden perspective-1200"
      >
        <motion.div
          style={{ rotateX: roomRotateX, rotateY: roomRotateY }}
          className="relative h-full w-full flex flex-col items-center justify-center pt-32 lg:pt-28 transform-style-3d preserve-3d origin-center"
        >
          {/* Scroll-driven camera — gentle tilt/zoom that adds cinematic depth */}
          <motion.div
            style={{
              rotateX: cameraRotateX,
              rotateY: cameraRotateY,
              scale: cameraScale,
            }}
            className="relative w-full h-full flex flex-col items-center justify-center preserve-3d origin-center"
          >
            {/* Layer 0 — deep ambient glow + grid */}
            <motion.div
              style={{ scale: scaleGlow, translateZ: -300 }}
              className="absolute inset-0 preserve-3d pointer-events-none"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(212,175,55,0.14),transparent_60%)]" />
              <motion.div
                className="absolute inset-0"
                style={{
                  opacity: gridOpacity,
                  backgroundImage:
                    'linear-gradient(rgba(245,245,240,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,0.6) 1px, transparent 1px)',
                  backgroundSize: '64px 64px',
                }}
              />
            </motion.div>

            {/* Layer 1 — blurred echo of the illustration */}
            <motion.div
              style={{ scale: scaleEcho, opacity: opacityEcho, translateZ: -160 }}
              className="absolute right-[-15%] lg:right-[2%] top-1/2 -translate-y-1/2 w-[85vw] max-w-[640px] aspect-square pointer-events-none preserve-3d"
              aria-hidden
            >
              <Image src="/hero-illustration.png" alt="" fill className="object-contain blur-3xl scale-110" />
            </motion.div>

            <ConstrainedBox classNames="relative z-10 w-full h-full preserve-3d">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center h-full preserve-3d px-4">
                {/* Text column */}
                <motion.div
                  style={{ x: xText, rotateY: textRotateY, translateZ: 60 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 preserve-3d"
                >
                  <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[var(--primaryColor)] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
                  >
                    Building Scalable Digital Experiences
                  </motion.h2>

                  <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.88] text-white uppercase drop-shadow-2xl"
                  >
                    Darshil
                    <br />
                    <span className="gradient-text-gold">Thummar</span>
                  </motion.h1>

                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 font-sans text-base md:text-lg text-gray-300 max-w-md font-light tracking-wide"
                  >
                    Full Stack Developer specializing in React, Next.js, and Node.js.
                    I craft modern, high-performance web applications that drive impact.
                  </motion.p>

                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 flex items-center gap-6 preserve-3d"
                    style={{ translateZ: 50 }}
                  >
                    <Link href="#contact" className="premium-button">
                      Let&apos;s Build It
                    </Link>
                    <Link
                      href="#projects"
                      className="font-sans text-white hover:text-[var(--primaryColor)] transition-colors uppercase tracking-[0.2em] text-sm"
                    >
                      View Work
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Illustration column — cinematic scroll-driven gaze.
                    The gaze transforms create a narrative arc controlled
                    entirely by scroll position, not scroll direction. */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    rotateY: gazeRotateY,
                    rotateX: gazeRotateX,
                    scale: gazeScale,
                    x: gazeX,
                    translateZ: 90,
                  }}
                  className="relative order-2 preserve-3d perspective-1200 w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[600px] mx-auto lg:mx-0 lg:-mr-10"
                >
                  <motion.div
                    ref={panelRef}
                    style={{
                      rotateX: panelRotateX,
                      rotateY: panelRotateY,
                      x: panelX,
                      y: panelY,
                    }}
                    className="relative aspect-[4/5] overflow-hidden preserve-3d"
                  >
                    {/* Breathing wrapper — very subtle idle animation */}
                    <div className="developer-breathe absolute inset-0">
                      <Image
                        src="/hero-illustration.png"
                        alt="Illustration of Darshil Thummar coding at his desk"
                        fill
                        priority
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 90vw, 600px"
                      />
                    </div>

                    {/* Monitor-side glow — cool light, brightest while coding */}
                    <motion.div
                      style={{ opacity: screenGlowOpacity }}
                      className="absolute left-0 top-[20%] w-[55%] h-[68%] pointer-events-none"
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_38%_45%,rgba(130,195,255,0.4),transparent_65%)] blur-2xl" />
                    </motion.div>

                    {/* Viewer-side glow — warm light, brightest during interaction */}
                    <motion.div
                      style={{ opacity: viewerGlowOpacity }}
                      className="absolute right-0 top-[6%] w-[62%] h-[58%] pointer-events-none"
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_62%_40%,rgba(255,200,120,0.45),transparent_65%)] blur-2xl" />
                    </motion.div>

                    {/* Cinematic vignette — tightens focus on the character at peak interaction */}
                    <motion.div
                      style={{ opacity: vignetteOpacity }}
                      className="absolute inset-0 pointer-events-none"
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_58%_38%,transparent_30%,rgba(0,0,0,0.65)_100%)]" />
                    </motion.div>

                    {/* Ambient dust motes drifting inside the frame */}
                    {particles.map((p, i) => (
                      <motion.span
                        key={`particle-${i}`}
                        className="absolute rounded-full bg-[var(--primaryColor)] pointer-events-none"
                        style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
                        animate={{ y: [0, -22, 0], opacity: [0, 0.55, 0] }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
                        aria-hidden
                      />
                    ))}

                    {/* Bleed the edges into the background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-transparent opacity-60" />
                    <div className="hidden lg:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--background)] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--background)]/40" />

                    {/* Status chip — narrates the gaze phase so the scroll story reads clearly */}
                    <div className="absolute top-4 left-4 z-20 preserve-3d" style={{ transform: 'translateZ(110px)' }}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={gazePhase}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-center gap-2 glass-panel px-3 py-1.5 rounded-full border border-white/10"
                        >
                          <span
                            className={cn(
                              'w-1.5 h-1.5 rounded-full transition-colors duration-300',
                              gazeLabel.color
                            )}
                          />
                          <span className="font-mono text-[10px] uppercase tracking-widest text-white/85">
                            {gazeLabel.text}
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Foreground floating chips — scroll participation via opacity/scale */}
                  <motion.div
                    style={{ translateZ: 140, opacity: badgeOpacity, scale: badgeScale }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-2 -left-5 sm:-left-10 preserve-3d hidden sm:flex items-center gap-2 glass-panel px-4 py-3 rounded-2xl border border-white/10"
                  >
                    <Image src={badges[0].icon} alt="" width={18} height={18} />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-white/90">{badges[0].label}</span>
                  </motion.div>

                  <motion.div
                    style={{ translateZ: 160, opacity: badgeOpacity, scale: badgeScale }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                    className="absolute top-8 -right-4 sm:-right-10 preserve-3d hidden sm:flex items-center gap-2 glass-panel px-4 py-3 rounded-2xl border border-white/10"
                  >
                    <Image src={badges[1].icon} alt="" width={18} height={18} />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-white/90">{badges[1].label}</span>
                  </motion.div>

                  <motion.div
                    style={{ translateZ: 150, opacity: badgeOpacity, scale: badgeScale }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 preserve-3d flex items-center gap-3 glass-panel px-5 py-3 rounded-2xl border border-[var(--primaryColor)]/20"
                  >
                    <span className="font-display text-xl font-bold text-[var(--primaryColor)]">2+</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 leading-tight">
                      Years<br />Experience
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </ConstrainedBox>
          </motion.div>

          {/* Scroll Indicator — entrance animation + scroll-driven fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div
              style={{ opacity: scrollIndicatorOpacity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Scroll</span>
              <div className="w-[1px] h-[50px] bg-white/20 relative overflow-hidden">
                <motion.div
                  className="w-full h-[50%] bg-[var(--primaryColor)] absolute top-0"
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HomeSection
