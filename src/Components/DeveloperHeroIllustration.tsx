'use client'

import React, { useRef, useState, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  MotionValue,
} from 'framer-motion'
import Image from 'next/image'

const BASE = '/assets/hero-scene'

export interface DeveloperIllustrationProps {
  progressOverride?: MotionValue<number> | null
  interactiveMouse?: boolean
  showDebugHud?: boolean
  className?: string
}

export type TimelinePhase = 'coding' | 'noticing' | 'looking' | 'eye-contact' | 'returning'

export default function DeveloperHeroIllustration({
  progressOverride = null,
  interactiveMouse = true,
  showDebugHud = false,
  className = '',
}: DeveloperIllustrationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [phase, setPhase] = useState<TimelinePhase>('coding')
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768)
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mql.matches)

    checkViewport()
    const handleResize = () => checkViewport()
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)

    window.addEventListener('resize', handleResize)
    mql.addEventListener('change', handleMotionChange)
    return () => {
      window.removeEventListener('resize', handleResize)
      mql.removeEventListener('change', handleMotionChange)
    }
  }, [])

  const { scrollYProgress: defaultScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const rawProgress = progressOverride || defaultScrollProgress

  const smoothProgress = useSpring(rawProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  })

  const scaleFactor = isMobile ? 0.6 : 1.0

  useMotionValueEvent(smoothProgress, 'change', (v) => {
    setCurrentProgress(v)
    if (v < 0.20) setPhase('coding')
    else if (v < 0.40) setPhase('noticing')
    else if (v < 0.60) setPhase('looking')
    else if (v < 0.75) setPhase('eye-contact')
    else setPhase('returning')
  })

  // Camera zoom
  const cameraScale = useTransform(
    smoothProgress,
    [0, 0.20, 0.45, 0.65, 0.78, 1.0],
    [1.0, 1.0, 1.07 * scaleFactor + (1 - scaleFactor), 1.07 * scaleFactor + (1 - scaleFactor), 1.02, 1.0]
  )
  const cameraFocusX = useTransform(
    smoothProgress,
    [0, 0.20, 0.45, 0.65, 0.80, 1.0],
    [0, 0, -18 * scaleFactor, -18 * scaleFactor, -6 * scaleFactor, 0]
  )
  const cameraFocusY = useTransform(
    smoothProgress,
    [0, 0.20, 0.45, 0.65, 0.80, 1.0],
    [0, 0, -12 * scaleFactor, -12 * scaleFactor, -4 * scaleFactor, 0]
  )

  // Pupils (Independent animation)
  const pupilX = useTransform(
    smoothProgress,
    [0, 0.18, 0.35, 0.48, 0.68, 0.82, 1.0],
    [-8 * scaleFactor, -8 * scaleFactor, 2 * scaleFactor, 13 * scaleFactor, 13 * scaleFactor, 0, -8 * scaleFactor]
  )
  const pupilY = useTransform(
    smoothProgress,
    [0, 0.18, 0.35, 0.48, 0.68, 0.82, 1.0],
    [3 * scaleFactor, 3 * scaleFactor, 0, -3.5 * scaleFactor, -3.5 * scaleFactor, 1 * scaleFactor, 3 * scaleFactor]
  )

  // Eyebrows
  const eyebrowY = useTransform(
    smoothProgress,
    [0, 0.20, 0.38, 0.55, 0.70, 0.85, 1.0],
    [0, 0, -4 * scaleFactor, -4.5 * scaleFactor, -4 * scaleFactor, -1 * scaleFactor, 0]
  )
  const eyebrowRotate = useTransform(
    smoothProgress,
    [0, 0.20, 0.45, 0.65, 0.85, 1.0],
    [0, 0, -1.2 * scaleFactor, -1.2 * scaleFactor, 0, 0]
  )

  // Head (rotation & translation around neck)
  const headRotate = useTransform(
    smoothProgress,
    [0, 0.18, 0.38, 0.52, 0.68, 0.82, 1.0],
    [-2.2 * scaleFactor, -2.2 * scaleFactor, 1.5 * scaleFactor, 3.8 * scaleFactor, 3.8 * scaleFactor, 0.5 * scaleFactor, -2.2 * scaleFactor]
  )
  const headX = useTransform(
    smoothProgress,
    [0, 0.18, 0.38, 0.52, 0.68, 0.82, 1.0],
    [-4 * scaleFactor, -4 * scaleFactor, 3 * scaleFactor, 8 * scaleFactor, 8 * scaleFactor, 1 * scaleFactor, -4 * scaleFactor]
  )
  const headY = useTransform(
    smoothProgress,
    [0, 0.18, 0.38, 0.52, 0.68, 0.82, 1.0],
    [1.5 * scaleFactor, 1.5 * scaleFactor, -1.5 * scaleFactor, -3 * scaleFactor, -3 * scaleFactor, 0, 1.5 * scaleFactor]
  )

  // Hair
  const hairRotate = useTransform(
    smoothProgress,
    [0, 0.20, 0.40, 0.55, 0.70, 0.85, 1.0],
    [-0.5 * scaleFactor, -0.5 * scaleFactor, 0.8 * scaleFactor, 1.2 * scaleFactor, 1.0 * scaleFactor, 0.2 * scaleFactor, -0.5 * scaleFactor]
  )

  // Body & Torso
  const bodyY = useTransform(
    smoothProgress,
    [0, 0.25, 0.50, 0.75, 1.0],
    [0, -2 * scaleFactor, 1 * scaleFactor, -2 * scaleFactor, 0]
  )

  // Screen glow
  const screenGlowOpacity = useTransform(
    smoothProgress,
    [0, 0.20, 0.42, 0.65, 0.80, 1.0],
    [0.92, 0.92, 0.30, 0.30, 0.75, 0.92]
  )

  // Viewer warm light
  const viewerLightOpacity = useTransform(
    smoothProgress,
    [0, 0.20, 0.45, 0.68, 0.85, 1.0],
    [0.05, 0.05, 0.75, 0.75, 0.20, 0.05]
  )

  // Parallax layer depths
  const bgY = useTransform(smoothProgress, [0, 1], [0, -14 * scaleFactor])
  const deskY = useTransform(smoothProgress, [0, 1], [0, -22 * scaleFactor])
  const monitorY = useTransform(smoothProgress, [0, 1], [0, -32 * scaleFactor])
  const plantY = useTransform(smoothProgress, [0, 1], [0, -30 * scaleFactor])
  const plantLeavesRotate = useTransform(
    smoothProgress,
    [0, 0.3, 0.6, 1],
    [0, 1.2 * scaleFactor, -0.8 * scaleFactor, 0]
  )
  const fgObjectsY = useTransform(smoothProgress, [0, 1], [0, -42 * scaleFactor])
  const charParallaxY = useTransform(smoothProgress, [0, 1], [0, -46 * scaleFactor])
  const bubbleLeftY = useTransform(smoothProgress, [0, 1], [0, -24 * scaleFactor])
  const bubbleRightY = useTransform(smoothProgress, [0, 1], [0, -30 * scaleFactor])
  const bubbleScale = useTransform(
    smoothProgress,
    [0, 0.20, 0.45, 0.65, 0.85, 1.0],
    [1.0, 1.0, 1.06, 1.06, 0.98, 1.0]
  )

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  useEffect(() => {
    if (!interactiveMouse || prefersReducedMotion) return
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 12
      const y = (e.clientY / innerHeight - 0.5) * 10
      setMouseOffset({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [interactiveMouse, prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <div className={`relative w-full max-w-[1376px] aspect-[1376/768] mx-auto overflow-hidden rounded-2xl ${className}`}>
        <Image
          src={`${BASE}/background.png`}
          alt="Workspace"
          fill
          priority
          className="object-contain"
          unoptimized
        />
        <Image src={`${BASE}/desk.png`} alt="Desk" fill className="object-contain" unoptimized />
        <Image src={`${BASE}/monitor.png`} alt="Monitor" fill className="object-contain" unoptimized />
        <Image src={`${BASE}/character/body.png`} alt="Body" fill className="object-contain" unoptimized />
        <Image src={`${BASE}/character/head.png`} alt="Head" fill className="object-contain" unoptimized />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex items-center justify-center select-none ${className}`}
    >
      {showDebugHud && (
        <div className="absolute top-4 left-4 z-50 bg-black/85 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2.5 font-mono text-xs text-white shadow-2xl pointer-events-none space-y-1">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${
                phase === 'coding'
                  ? 'bg-blue-400'
                  : phase === 'noticing'
                  ? 'bg-amber-400'
                  : phase === 'looking' || phase === 'eye-contact'
                  ? 'bg-emerald-400'
                  : 'bg-indigo-400'
              }`}
            />
            <span className="font-bold uppercase tracking-wider text-amber-300">
              Phase: {phase}
            </span>
          </div>
          <div className="text-white/80">
            Scroll Progress: <span className="text-white font-semibold">{(currentProgress * 100).toFixed(1)}%</span>
          </div>
        </div>
      )}

      {/* 1376x768 Claude Asset Canvas */}
      <motion.div
        style={{
          scale: cameraScale,
          x: cameraFocusX,
          y: cameraFocusY,
          rotateX: interactiveMouse ? -mouseOffset.y * 0.25 : 0,
          rotateY: interactiveMouse ? mouseOffset.x * 0.25 : 0,
        }}
        className="relative w-full max-w-[1376px] aspect-[1376/768] overflow-hidden rounded-2xl bg-black shadow-2xl"
      >
        {/* Layer 1: Background */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
          <Image src={`${BASE}/background.png`} alt="Background" fill priority className="object-contain" unoptimized />
        </motion.div>

        {/* Layer 2: Shadows */}
        <motion.div style={{ y: deskY }} className="absolute inset-0 z-[2] pointer-events-none opacity-60 mix-blend-multiply">
          <Image src={`${BASE}/effects/character-shadow.png`} alt="Character Shadow" fill className="object-contain" unoptimized />
          <Image src={`${BASE}/effects/object-shadows.png`} alt="Object Shadows" fill className="object-contain" unoptimized />
        </motion.div>

        {/* Layer 3: Desk */}
        <motion.div style={{ y: deskY }} className="absolute inset-0 z-[3] pointer-events-none">
          <Image src={`${BASE}/desk.png`} alt="Desk" fill className="object-contain" unoptimized />
        </motion.div>

        {/* Layer 4: Plant */}
        <motion.div style={{ y: plantY }} className="absolute inset-0 z-[4] pointer-events-none">
          <Image src={`${BASE}/objects/plant-pot.png`} alt="Plant Pot" fill className="object-contain" unoptimized />
          <motion.div
            style={{
              rotate: plantLeavesRotate,
              originX: '173px',
              originY: '635px',
            }}
            className="absolute inset-0"
          >
            <Image src={`${BASE}/objects/plant-leaves.png`} alt="Plant Leaves" fill className="object-contain" unoptimized />
          </motion.div>
        </motion.div>

        {/* Layer 5: Monitor & Screen Glow */}
        <motion.div style={{ y: monitorY }} className="absolute inset-0 z-[5] pointer-events-none">
          <Image src={`${BASE}/monitor.png`} alt="Monitor" fill className="object-contain" unoptimized />
          <motion.div style={{ opacity: screenGlowOpacity }} className="absolute inset-0 mix-blend-screen pointer-events-none">
            <Image src={`${BASE}/effects/screen-glow.png`} alt="Screen Glow" fill className="object-contain" unoptimized />
          </motion.div>
        </motion.div>

        {/* Layer 6: Keyboard */}
        <motion.div style={{ y: deskY }} className="absolute inset-0 z-[6] pointer-events-none">
          <Image src={`${BASE}/keyboard.png`} alt="Keyboard" fill className="object-contain" unoptimized />
        </motion.div>

        {/* Layer 7: Character Master Group */}
        <motion.div style={{ y: charParallaxY }} className="absolute inset-0 z-[7] pointer-events-none">
          {/* Body, Torso, Arms & Hands */}
          <motion.div style={{ y: bodyY }} className="absolute inset-0">
            <Image src={`${BASE}/character/body.png`} alt="Body" fill className="object-contain" unoptimized />
            <Image src={`${BASE}/character/hoodie-details.png`} alt="Hoodie Details" fill className="object-contain" unoptimized />
            <Image src={`${BASE}/character/arms.png`} alt="Arms" fill className="object-contain" unoptimized />
            <Image src={`${BASE}/character/hands.png`} alt="Hands" fill className="object-contain" unoptimized />
          </motion.div>

          {/* Character Head Group */}
          <motion.div
            style={{
              rotate: headRotate,
              x: headX,
              y: headY,
              originX: '688px',
              originY: '520px',
            }}
            className="absolute inset-0"
          >
            <Image src={`${BASE}/character/head.png`} alt="Head" fill className="object-contain" unoptimized />
            <Image src={`${BASE}/character/eyes-whites.png`} alt="Eyes Whites" fill className="object-contain" unoptimized />
            
            {/* Pupils */}
            <motion.div style={{ x: pupilX, y: pupilY }} className="absolute inset-0">
              <Image src={`${BASE}/character/pupils.png`} alt="Pupils" fill className="object-contain" unoptimized />
            </motion.div>

            {/* Eyebrows */}
            <motion.div
              style={{
                y: eyebrowY,
                rotate: eyebrowRotate,
                originX: '632px',
                originY: '321px',
              }}
              className="absolute inset-0"
            >
              <Image src={`${BASE}/character/eyebrows.png`} alt="Eyebrows" fill className="object-contain" unoptimized />
            </motion.div>

            {/* Hair */}
            <motion.div
              style={{
                rotate: hairRotate,
                originX: '688px',
                originY: '310px',
              }}
              className="absolute inset-0"
            >
              <Image src={`${BASE}/character/hair.png`} alt="Hair" fill className="object-contain" unoptimized />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Layer 8: Foreground Objects */}
        <motion.div style={{ y: fgObjectsY }} className="absolute inset-0 z-[8] pointer-events-none">
          <Image src={`${BASE}/objects/mug.png`} alt="Mug" fill className="object-contain" unoptimized />
          <Image src={`${BASE}/objects/pen-holder.png`} alt="Pen Holder" fill className="object-contain" unoptimized />
          <Image src={`${BASE}/objects/pens.png`} alt="Pens" fill className="object-contain" unoptimized />
        </motion.div>

        {/* Layer 9: Bubbles */}
        <motion.div
          style={{ y: bubbleLeftY, scale: bubbleScale }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 z-[9] pointer-events-none"
        >
          <Image src={`${BASE}/bubbles/code-icon.png`} alt="Code Icon" fill className="object-contain" unoptimized />
        </motion.div>

        <motion.div
          style={{ y: bubbleRightY, scale: bubbleScale }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute inset-0 z-[9] pointer-events-none"
        >
          <Image src={`${BASE}/bubbles/code-lines.png`} alt="Code Lines" fill className="object-contain" unoptimized />
        </motion.div>

        {/* Layer 10: Warm Backlight */}
        <motion.div style={{ opacity: viewerLightOpacity }} className="absolute inset-0 z-[10] pointer-events-none mix-blend-screen">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,200,120,0.35),transparent_60%)]" />
        </motion.div>
      </motion.div>
    </div>
  )
}
