import React, { useState } from 'react'

interface ThankProps {
    isActive: boolean
}

const Thanks: React.FC<ThankProps> = ({ isActive }) => {
    const [transitionDone, setTransitionDone] = useState(false)

    const handleTransitionEnd: React.TransitionEventHandler<HTMLDivElement> = () => {
        setTransitionDone(true)
    }

    const CLASESS = [
        transitionDone
            ? ''
            : `${isActive ? 'translate-y-0 opacity-100' : 'opacity-0 translate-y-full pointer-events-none'} transition-all duration-1000 delay-[600ms] ease-in-out`,
        transitionDone
            ? ''
            : `${isActive ? 'translate-y-0 opacity-100' : 'opacity-0 translate-y-full pointer-events-none'} transition-all duration-1000 delay-[800ms] ease-in-out`,
        transitionDone
            ? ''
            : `${isActive ? 'translate-y-0 opacity-100' : 'opacity-0 translate-y-full pointer-events-none'} transition-all duration-1000 delay-[1000ms] ease-in-out`,
        transitionDone
            ? ''
            : `${isActive ? 'scale-100 opacity-100' : 'opacity-0 scale-0 pointer-events-none'} transition-all duration-1000 delay-[1200ms] ease-in-out`,
    ]

    return (
        <>
            {/* Judul Islami */}
            <div className={`${CLASESS[0]} w-full`}>
                <h1 className="text-3xl md:text-5xl text-center font-HinaMincho text-[#D4AF37]">
                </h1>
            </div>

            {/* Pesan Terima Kasih */}
            <div className="w-full mt-10 text-center md:mt-14 lg:mt-28 laptop:mt-10 2xl:mt-24">
                <div className="px-4 md:px-20 laptop:px-16 2xl:px-20">
                    <h2
                        className={`${CLASESS[1]} text-lg md:text-2xl laptop:text-xl 2xl:text-2xl text-white font-Peddana`}
                    >
                        Merupakan suatu kehormatan dan kebahagiaan bagi kami
                        apabila Bapak/Ibu/Saudara/i berkenan hadir dan
                        mendoakan kedua mempelai.
                    </h2>

                    <h2
                        className={`${CLASESS[2]} mt-8 text-lg md:text-2xl laptop:text-xl 2xl:text-2xl text-white font-Peddana`}
                    >
                        Semoga Allah memberkahi dan meridhoi pernikahan ini.
                    </h2>

                    <h2
                        className={`${CLASESS[3]} mt-8 mb-9 text-lg md:text-2xl laptop:text-xl 2xl:text-2xl text-white font-Peddana`}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh.
                    </h2>
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
                </div>
            </div>
        </>
    )
}

export default Thanks