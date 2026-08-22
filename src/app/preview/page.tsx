'use client'

import Image from 'next/image'
import Link from 'next/link'

const BASE = '/assets/hero-scene'

// Bottom-to-top paint order
const layers: { name: string; src: string; blend?: string; opacity?: number }[] = [
  { name: 'Background', src: `${BASE}/background.png` },
  { name: 'Object shadows', src: `${BASE}/effects/object-shadows.png`, opacity: 0.5 },
  { name: 'Character shadow', src: `${BASE}/effects/character-shadow.png`, opacity: 0.5 },
  { name: 'Desk', src: `${BASE}/desk.png` },
  { name: 'Plant pot', src: `${BASE}/objects/plant-pot.png` },
  { name: 'Plant leaves', src: `${BASE}/objects/plant-leaves.png` },
  { name: 'Monitor', src: `${BASE}/monitor.png` },
  { name: 'Screen glow', src: `${BASE}/effects/screen-glow.png`, blend: 'screen' },
  { name: 'Keyboard', src: `${BASE}/keyboard.png` },
  { name: 'Body', src: `${BASE}/character/body.png` },
  { name: 'Arms', src: `${BASE}/character/arms.png` },
  { name: 'Hands', src: `${BASE}/character/hands.png` },
  { name: 'Hoodie details', src: `${BASE}/character/hoodie-details.png` },
  { name: 'Head', src: `${BASE}/character/head.png` },
  { name: 'Hair', src: `${BASE}/character/hair.png` },
  { name: 'Eyebrows', src: `${BASE}/character/eyebrows.png` },
  { name: 'Eyes (whites)', src: `${BASE}/character/eyes-whites.png` },
  { name: 'Pupils', src: `${BASE}/character/pupils.png` },
  { name: 'Mug', src: `${BASE}/objects/mug.png` },
  { name: 'Pen holder', src: `${BASE}/objects/pen-holder.png` },
  { name: 'Pens', src: `${BASE}/objects/pens.png` },
  { name: 'Code-icon bubble', src: `${BASE}/bubbles/code-icon.png` },
  { name: 'Code-lines bubble', src: `${BASE}/bubbles/code-lines.png` },
]

const NEEDS_REVIEW = ['Mug', 'Pen holder', 'Pens', 'Object shadows']

export default function PreviewPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col">
      <div className="h-16 flex items-center justify-between px-6 bg-black/40 backdrop-blur-md border-b border-white/5 z-50">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-white hover:text-amber-400 transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-widest">
            ← Back to Main
          </Link>
          <span className="text-white/20">|</span>
          <span className="font-mono text-xs text-amber-400 tracking-wider uppercase">
            Hero Scene — Layer Reconstruction Preview
          </span>
          <span className="text-white/20">|</span>
          <Link
            href="/developer-animation-preview"
            className="px-3 py-1 bg-amber-400 text-black font-bold rounded text-xs font-mono hover:bg-amber-300 transition-colors"
          >
            ⚡ View Interactive Scroll Animation →
          </Link>
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-[1fr_360px] overflow-hidden">
        <div className="relative flex items-center justify-center p-6 bg-[#0c0c0c]">
          <div
            className="relative w-full max-w-[1100px] overflow-hidden border border-white/10 rounded-2xl"
            style={{ aspectRatio: '1376 / 768' }}
          >
            {layers.map((l) => (
              <div
                key={l.name}
                className="absolute inset-0"
                style={{
                  mixBlendMode: (l.blend as React.CSSProperties['mixBlendMode']) || 'normal',
                  opacity: l.opacity ?? 1,
                }}
              >
                <Image src={l.src} alt={l.name} fill className="object-contain" unoptimized />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/40 border-l border-white/5 p-6 flex flex-col overflow-y-auto space-y-4 font-mono text-xs">
          <h3 className="text-white/40 uppercase tracking-widest text-[10px] border-b border-white/5 pb-2">
            Layers ({layers.length} stacked, bottom → top)
          </h3>
          <div className="space-y-1.5">
            {layers.map((l, i) => (
              <div key={l.name} className="flex items-center justify-between text-[11px] text-white/70">
                <span>{i + 1}. {l.name}</span>
                {NEEDS_REVIEW.includes(l.name) ? (
                  <span className="text-amber-400 font-bold">⚠ review</span>
                ) : (
                  <span className="text-emerald-400 font-bold">✓ ok</span>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-4 text-[10px] text-white/40 space-y-1">
            <div>Canvas: 1376×768 (normalized)</div>
            <div>Folder: /public/assets/hero-scene/</div>
            <div className="text-amber-400/80 pt-2">
              4 layers (mug, pen holder, pens, object-shadows) drifted from the
              master&apos;s flat illustration style during isolation and need manual
              touch-up or regeneration before shipping.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
