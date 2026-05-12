import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import BgFlowerHorizontalDown from '../components/BgFlowerHorizontalDown'
import BgFlowerHorizontalUp from '../components/BgFlowerHorizontalUp'
import PageContainer from '../components/PageContainer'
import BrideAndGroom from '../components/sections/BrideAndGroom'
import Thanks from '../components/sections/Thanks'
import dynamic from 'next/dynamic'
import { getWindowDimensions } from '../utils/utils'
import { GetServerSideProps } from 'next'

const Countdown = dynamic(() => import('../components/sections/Countdown'), { ssr: false })
const Map = dynamic(() => import('../components/sections/Map'), { ssr: false })

const WIDTH_CLASS =
  'w-screen h-full lg:w-[420px] lg:aspect-[3/4] xl:w-[520px] xl:h-[900px] laptop:w-[460px] 2xl:w-[560px]'

// ================= ICON =================
const SpeakerOn = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" />
    <path d="M15.5 8.5a5 5 0 010 7" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const SpeakerOff = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" />
    <path d="M16 9l6 6M22 9l-6 6" stroke="currentColor" strokeWidth="2" />
  </svg>
)

// ================= WINDOW =================
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<{ width?: number; height?: number }>({})

  const refresh = () => setWindowDimensions(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { ...windowDimensions, refresh }
}

// ================= MAIN =================
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const scrollContainer = useRef<HTMLDivElement>(null)

  const { height, refresh } = useWindowDimensions()

  useEffect(() => {
    refresh()
  }, [refresh])

  // START MUSIC
  const startAudio = () => {
    if (!audioRef.current) return
    audioRef.current.play().catch(console.error)
    setIsPlaying(true)
  }

  // TOGGLE MUSIC
  const toggleAudio = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play().catch(console.error)
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <main
      className="relative flex flex-row items-center justify-center w-screen bg-gray-900"
      style={{ height: `${height}px` }}
    >
      <Head>
        <title>Undangan Pernikahan Nova & Piyan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <div
        ref={scrollContainer}
        className={`${WIDTH_CLASS} relative overflow-hidden text-gray-100 bg-blue-floral`}
        style={{ maxHeight: `${height}px` }}
      >
        <div className="moving-bg" />

        <BgFlowerHorizontalUp className="top-0 left-0 pointer-events-none" />
        <BgFlowerHorizontalDown className="top-0 left-0 pointer-events-none" />

        <PageContainer
          scrollContainer={scrollContainer}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
      >
          {/* bride and groom */}
          <section
              className={`${WIDTH_CLASS} py-10 md:py-20 laptop:py-16 2xl:py-20`}
              style={{ maxHeight: `${height}px` }}
          >
              <div className="flex flex-col items-center justify-start w-full h-full py-6 md:py-20 laptop:py-6 2xl:py-16 text-gold">
                  <BrideAndGroom isActive={currentIndex === 0} />
              </div>
          </section>

          {/* days countdown */}
          <section
              className={`${WIDTH_CLASS} py-10 md:py-20 laptop:py-16 2xl:py-20`}
              style={{ maxHeight: `${height}px` }}
          >
              <div className="relative flex flex-col items-center justify-start w-full h-full py-6 md:py-20 laptop:py-6 2xl:py-16 text-gold">
                  <Countdown isActive={currentIndex === 1} />
              </div>
          </section>

          {/* map */}
          <section
              className={`${WIDTH_CLASS} py-10 md:py-20 laptop:py-16 2xl:py-20`}
              style={{ maxHeight: `${height}px` }}
          >
              <div className="relative flex flex-col items-center justify-start w-full h-full py-6 md:py-20 laptop:py-6 2xl:py-16 text-gold">
                  <Map isActive={currentIndex === 2} />
              </div>
          </section>

          {/* guest book */}
          {/* <section
              className={`${WIDTH_CLASS} py-10 md:py-20 laptop:py-16 2xl:py-20 relative`}
              style={{ maxHeight: `${height}px` }}
          >
              <div className="flex flex-col items-center justify-start w-full h-full py-6 md:py-20 laptop:py-6 2xl:py-16 text-gold">
                  <GuestBook isActive={currentIndex === 3} />
              </div>
          </section> */}

          {/* prokes */}
          {/* <section
              className={`${WIDTH_CLASS} py-10 md:py-20 laptop:py-16 2xl:py-20`}
              style={{ maxHeight: `${height}px` }}
          >
              <div className="relative flex flex-col items-center justify-start w-full h-full py-6 md:py-20 laptop:py-6 2xl:py-16 text-gold">
                  <Prokes isActive={currentIndex === 4} />
              </div>
          </section> */}

          {/* Thanks */}
          <section
              className={`${WIDTH_CLASS} py-10 md:py-20 laptop:py-16 2xl:py-20`}
              style={{ maxHeight: `${height}px` }}
          >
              <div className="relative flex flex-col items-center justify-start w-full h-full py-6 md:py-20 laptop:py-6 2xl:py-16 text-gold">
                  <Thanks isActive={currentIndex === 3} />
              </div>
          </section>
        </PageContainer>

        {/* SPEAKER TOGGLE */}
        <button
          type="button"
          onClick={toggleAudio}
          className="absolute top-[2rem] right-[1rem] bg-[#D4AF37] text-[#0F1F2E] p-3 rounded-full shadow-lg"
        >
          {isPlaying ? <SpeakerOn /> : <SpeakerOff />}
        </button>

        {/* AUDIO */}
        <audio ref={audioRef} loop>
          <source src="wedding/audio/lagudek.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} }
}

export default Home