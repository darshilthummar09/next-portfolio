'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import DeveloperHeroIllustration from '@/Components/DeveloperHeroIllustration'

const PHASES_INFO = [
  {
    range: '0% – 20%',
    title: '1. CODING',
    color: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    desc: 'Boy focused on screen. Pupils look down-left at monitor. Head slightly angled toward screen. Screen glow high.',
  },
  {
    range: '20% – 40%',
    title: '2. NOTICES USER',
    color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
    desc: 'Pupils begin moving toward viewer. Head turns smoothly toward center. Eyebrows elevate slightly with interest.',
  },
  {
    range: '40% – 60%',
    title: '3. LOOKING AT USER',
    color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    desc: 'Boy makes direct eye contact with visitor. Cinematic camera zoom engages. 2.5D layer depth separates layers.',
  },
  {
    range: '60% – 75%',
    title: '4. EYE CONTACT',
    color: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    desc: 'Holds direct gaze briefly. Subtle breathing and atmospheric focus. Warm backlight glows.',
  },
  {
    range: '75% – 100%',
    title: '5. BACK TO CODING',
    color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
    desc: 'Head turns smoothly back toward screen. Pupils return to monitor. Camera smoothly resets.',
  },
]

export default function DeveloperAnimationPreviewPage() {
  const [controlMode, setControlMode] = useState<'scroll' | 'scrubber'>('scroll')
  const [scrubberValue, setScrubberValue] = useState(0)
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [zoomFace, setZoomFace] = useState(false)
  const [showOriginalRef, setShowOriginalRef] = useState(false)

  const manualProgress = useMotionValue(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  })

  const handleScrubberChange = (val: number) => {
    setScrubberValue(val)
    manualProgress.set(val / 100)
  }

  return (
    <div className="min-h-screen bg-[#070709] text-gray-100 font-sans selection:bg-amber-500/30 pt-24 pb-16">
      {/* Top Header / Control Bar (offset below main site header) */}
      <header className="sticky top-20 z-40 bg-[#0e0f17]/95 backdrop-blur-xl border-y border-white/10 px-4 lg:px-8 py-3 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-mono text-xs text-white/60 hover:text-amber-400 transition-colors uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>←</span> Portfolio Home
            </Link>
            <span className="text-white/20">|</span>
            <h1 className="font-mono text-xs lg:text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Developer Scroll Animation Preview
            </h1>
          </div>

          {/* Quick Toolbar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Mode Switcher */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1 text-xs font-mono">
              <button
                type="button"
                onClick={() => setControlMode('scroll')}
                className={`px-3 py-1 rounded-md transition-all ${
                  controlMode === 'scroll'
                    ? 'bg-amber-400 text-black font-bold shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                📜 Scroll Mode
              </button>
              <button
                type="button"
                onClick={() => {
                  setControlMode('scrubber')
                  handleScrubberChange(scrubberValue)
                }}
                className={`px-3 py-1 rounded-md transition-all ${
                  controlMode === 'scrubber'
                    ? 'bg-amber-400 text-black font-bold shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                🎛️ Scrubber Mode
              </button>
            </div>

            {/* Viewport Width Presets */}
            <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-lg p-1 text-xs font-mono">
              <button
                type="button"
                onClick={() => setViewportMode('desktop')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  viewportMode === 'desktop' ? 'bg-white/20 text-white font-bold' : 'text-white/50'
                }`}
              >
                🖥️ Desktop
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('tablet')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  viewportMode === 'tablet' ? 'bg-white/20 text-white font-bold' : 'text-white/50'
                }`}
              >
                📱 Tablet
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('mobile')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  viewportMode === 'mobile' ? 'bg-white/20 text-white font-bold' : 'text-white/50'
                }`}
              >
                📱 Mobile
              </button>
            </div>

            {/* Face Zoom Toggle */}
            <button
              type="button"
              onClick={() => setZoomFace(!zoomFace)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                zoomFace
                  ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold'
                  : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
              }`}
            >
              🔍 {zoomFace ? 'Reset Zoom' : 'Inspect Eyes/Face'}
            </button>

            {/* Master Ref Compare Toggle */}
            <button
              type="button"
              onClick={() => setShowOriginalRef(!showOriginalRef)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                showOriginalRef
                  ? 'bg-blue-500/20 border-blue-400 text-blue-300 font-bold'
                  : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
              }`}
            >
              🖼️ {showOriginalRef ? 'Hide Master Ref' : 'Compare Master (Image 2)'}
            </button>
          </div>
        </div>
      </header>

      {/* Scrubber floating bar when in scrubber mode */}
      {controlMode === 'scrubber' && (
        <div className="sticky top-[138px] z-30 bg-[#141520]/95 border-b border-amber-400/30 px-6 py-3 shadow-2xl">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider whitespace-nowrap">
              Timeline: {scrubberValue}%
            </span>
            <input
              type="range"
              min="0"
              max="100"
              step="0.5"
              value={scrubberValue}
              onChange={(e) => handleScrubberChange(parseFloat(e.target.value))}
              className="w-full accent-amber-400 h-2 bg-white/10 rounded-lg cursor-pointer"
            />
            {/* Quick jump pills */}
            <div className="flex items-center gap-1 font-mono text-[10px]">
              {[0, 20, 50, 70, 100].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => handleScrubberChange(pct)}
                  className={`px-2 py-0.5 rounded border transition-colors ${
                    Math.abs(scrubberValue - pct) < 5
                      ? 'bg-amber-400 text-black border-amber-300 font-bold'
                      : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Interactive Stage Container */}
      <main
        ref={scrollContainerRef}
        className={`relative w-full ${controlMode === 'scroll' ? 'h-[320vh]' : 'min-h-[75vh]'}`}
      >
        <div
          className={`${
            controlMode === 'scroll' ? 'sticky top-36 h-[calc(100vh-10rem)]' : 'min-h-[70vh]'
          } flex flex-col items-center justify-center p-4 lg:p-6 overflow-hidden`}
        >
          {/* Viewport Frame */}
          <div
            className="w-full transition-all duration-300 flex items-center justify-center"
            style={{
              maxWidth:
                viewportMode === 'mobile'
                  ? '440px'
                  : viewportMode === 'tablet'
                  ? '768px'
                  : '1100px',
            }}
          >
            <div
              className={`relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl transition-transform duration-500 ${
                zoomFace ? 'scale-[1.8] translate-y-16 -translate-x-12' : 'scale-100'
              }`}
            >
              {/* The Reconstructed Animated Scene */}
              <DeveloperHeroIllustration
                progressOverride={controlMode === 'scrubber' ? manualProgress : scrollYProgress}
                showDebugHud
              />

              {/* Master reference comparison overlay */}
              {showOriginalRef && (
                <div className="absolute inset-0 z-30 pointer-events-none opacity-50 border-2 border-dashed border-red-500">
                  <Image
                    src="/hero-illustration.png"
                    alt="Master Illustration"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                  <span className="absolute top-2 right-2 bg-red-600 text-white font-mono text-[10px] px-2 py-0.5 rounded font-bold">
                    Master Reference Overlay (Image 2) (50% Opacity)
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Scroll instruction pill when in scroll mode */}
          {controlMode === 'scroll' && (
            <div className="mt-4 flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono text-white/70">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" />
              Scroll down to animate • Scroll up to reverse smoothly
            </div>
          )}
        </div>
      </main>

      {/* Detailed Spec & Phase Cards Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-12 border-t border-white/10 space-y-8">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
            Animation Timeline Architecture
          </h2>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            5-Stage Reversible Scroll Interaction Matching Master Artwork
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PHASES_INFO.map((p) => (
            <div
              key={p.title}
              className={`p-4 rounded-xl border ${p.color} transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between`}
            >
              <div>
                <span className="font-mono text-[11px] font-black uppercase tracking-wider block mb-1">
                  {p.range}
                </span>
                <h4 className="font-bold text-sm text-white mb-2">{p.title}</h4>
                <p className="text-xs text-gray-300/80 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
