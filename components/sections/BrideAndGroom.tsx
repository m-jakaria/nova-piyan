import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Cover from '../modals/Cover'

interface BrideAndGroomProps {
    isActive: boolean
}

const BrideAndGroom: React.FC<BrideAndGroomProps> = ({ isActive }) => {
    const [coverModalOpen, setCoverModalOpen] = useState<boolean>(true)
    const [transitionDone, setTransitionDone] = useState<boolean>(false)

    const router = useRouter()

    const handleTransitionEnd: React.TransitionEventHandler<HTMLDivElement> = () => {
        setTransitionDone(true)
    }

    // amanin router.query (string | string[] | undefined)
    const recipient: string | undefined =
        typeof router.query.to === 'string'
            ? router.query.to
            : Array.isArray(router.query.to)
            ? router.query.to[0]
            : undefined

    // helper class biar gak rusak Tailwind
    const fadeClass = (active: boolean, delay: string): string => {
        const base =
            transitionDone
                ? ''
                : active && !coverModalOpen
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'

        return `${base} transition-opacity duration-1000 ${delay} ease-in-out`
    }

    return (
        <>
            {/* TITLE */}
            <div className={`${fadeClass(isActive, 'delay-[600ms]')} w-full`}>
                <h1 className="text-2xl text-center md:text-4xl font-HinaMincho">
                    Bismillahirrahmanirrahim
                </h1>
            </div>

            {/* INTRO */}
            <div className="w-full mt-10 text-center md:mt-14 lg:mt-28">
                <div className={`${fadeClass(isActive, 'delay-[900ms]')} px-4 md:px-20`}>
                    <h2 className="text-xl text-center font-Peddana md:text-3xl">
                        Assalamu&apos;alaikum Warahmatullahi Wabarakatuh. Dengan
                        memohon rahmat dan ridho Allah SWT, kami bermaksud
                        menyelenggarakan acara pernikahan:
                    </h2>
                </div>

                {/* BRIDE */}
                <div className={`${fadeClass(isActive, 'delay-[1200ms]')} mt-12`}>
                    <h2 className="text-[2.5rem] md:text-7xl text-center font-AlexBrush">
                        Julva Ariska
                    </h2>
                    <ul className="mt-2 text-lg md:text-3xl font-Peddana text-center">
                        <li>Putri Bungsu dari Bpk. Misja & Ibu Saah</li>
                    </ul>
                </div>

                {/* AND */}
                <div className={`${fadeClass(isActive, 'delay-[1400ms]')} mt-10`}>
                    <h2 className="text-5xl md:text-7xl text-center font-AlexBrush">
                        &
                    </h2>
                </div>

                {/* GROOM */}
                <div
                    className={`${fadeClass(isActive, 'delay-[1600ms]')} mt-10`}
                    onTransitionEnd={handleTransitionEnd}
                >
                    <h2 className="text-[2.5rem] md:text-7xl text-center font-AlexBrush">
                        Ahmad Sopyan
                    </h2>
                    <ul className="mt-2 text-lg md:text-3xl font-Peddana text-center">
                        <li>Putra Ke-5 Dari Bpk. Hasan & Ibu Aah</li>
                    </ul>
                </div>
            </div>

            {/* COVER MODAL */}
            <Cover
                open={coverModalOpen}
                setOpen={setCoverModalOpen}
                recipient={recipient}
            />
        </>
    )
}

export default BrideAndGroom