import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import BgFlowerHorizontalUp from '../BgFlowerHorizontalUp'
import BgFlowerHorizontalDown from '../BgFlowerHorizontalDown'

interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

const Cover: React.FC<Props> = ({ open, setOpen }) => {
    const router = useRouter()

    const mainDivRef = useRef<HTMLDivElement>(null)
    const audioRef = useRef<HTMLAudioElement>(null)

    const [audioIsPlaying, setAudioIsPlaying] = useState(false)

    // guest dari URL
    const guestParam = router.query.guest

    const guestName =
        typeof guestParam === 'string' && guestParam.trim() !== ''
            ? decodeURIComponent(guestParam)
            : 'Kerabat Tercinta'

    const handleDivTouch = useCallback((e: TouchEvent) => {
        e.stopPropagation()
    }, [])

    const handleDivWheel: React.WheelEventHandler<HTMLDivElement> = e => {
        e.stopPropagation()
    }

    useEffect(() => {
        const instance = mainDivRef.current

        instance?.addEventListener('touchstart', handleDivTouch, {
            passive: true,
        })

        instance?.addEventListener('touchmove', handleDivTouch, {
            passive: true,
        })

        return () => {
            instance?.removeEventListener('touchstart', handleDivTouch)
            instance?.removeEventListener('touchmove', handleDivTouch)
        }
    }, [handleDivTouch])

    const toggleAudio = () => {
        if (!audioRef.current) return

        if (audioIsPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play().catch(console.error)
        }

        setAudioIsPlaying(!audioIsPlaying)
    }

    return (
        <div
            className={`absolute top-0 left-0 w-full h-full overflow-hidden bg-[#0F1F2E] transition-opacity duration-[1500ms] ${
                open ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            ref={mainDivRef}
            onWheel={handleDivWheel}
        >
            {/* background */}
            <div className="absolute inset-0 opacity-20">
                <div className="moving-bg"></div>
            </div>

            <BgFlowerHorizontalUp className="top-0 left-0 pointer-events-none opacity-70" />
            <BgFlowerHorizontalDown className="top-0 left-0 pointer-events-none opacity-70" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1F2E]/30 via-[#0F1F2E]/70 to-[#0F1F2E]" />

            {/* content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center">

                <p className="mb-3 text-xs tracking-[0.45em] uppercase text-white/60">
                    The Wedding Of
                </p>

                {/* nama */}
                <div className="mb-8 text-[#D4AF37]">
                    <h1 className="text-5xl md:text-7xl font-AlexBrush">
                        Nova
                    </h1>

                    <div className="my-2 text-3xl md:text-5xl text-white/70 font-AlexBrush">
                        &
                    </div>

                    <h1 className="text-5xl md:text-7xl font-AlexBrush">
                        Piyan
                    </h1>
                </div>

                <div className="w-24 h-[1px] bg-[#D4AF37] mb-6" />

                {/* tanggal */}
                <div className="flex items-center mb-12 text-[#D4AF37] font-HinaMincho">
                    <span className="text-xl md:text-3xl">JUN</span>
                    <span className="mx-4 text-6xl md:text-8xl">14</span>
                    <span className="text-xl md:text-3xl">2026</span>
                </div>

                {/* guest */}
                <div className="w-full max-w-md">
                    <p className="mb-3 text-xs tracking-[0.35em] uppercase text-white/60">
                        Kepada Yth.
                    </p>

                    <div className="px-6 py-6 border rounded-3xl border-[#D4AF37]/40 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.15)]">

                        <h2 className="text-2xl text-white md:text-3xl font-HinaMincho">
                            {guestName}
                        </h2>

                        <p className="mt-3 text-sm tracking-[0.25em] uppercase text-[#D4AF37]">
                            Di <br /> Tempat
                        </p>
                    </div>
                </div>

                {/* button */}
                <button
                    type="button"
                    className="px-8 py-3 mt-10 text-sm tracking-[0.25em] uppercase transition-all duration-300 border rounded-full md:text-base border-[#D4AF37] bg-[#D4AF37] text-[#0F1F2E] hover:scale-105 hover:bg-transparent hover:text-[#D4AF37]"
                    onClick={() => {
                        setOpen(false) // 🔥 INI YANG BIKIN PINDAH SLIDE
                    }}
                >
                    Buka Undangan
                </button>
            </div>
        </div>
    )
}

export default Cover