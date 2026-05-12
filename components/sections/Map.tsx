import React, { useState } from 'react'

interface MapProps {
    isActive: boolean
}

const Map: React.FC<MapProps> = ({ isActive }) => {
    const [transitionDone, setTransitionDone] = useState(false)

    const handleTransitionEnd: React.TransitionEventHandler<
        HTMLDivElement
    > = event => {
        setTransitionDone(true)
    }

    const CLASESS = [
        transitionDone
            ? ''
            : (isActive ? 'translate-x-0' : 'translate-x-full pointer-events-none') +
              'transition-transform duration-500 delay-[400ms] ease-in-out',
        transitionDone
            ? ''
            : (isActive ? 'translate-x-0' : 'translate-x-full pointer-events-none') +
              'transition-transform duration-500 delay-[900ms] ease-in-out',
        transitionDone
            ? ''
            : (isActive ? 'translate-x-0' : 'translate-x-full pointer-events-none') +
              'transition-transform duration-500 delay-[1100ms] ease-in-out',
    ]

    return (
        <>
            <div className={`${CLASESS[0]} w-full`}>
                <h1 className="text-2xl text-center md:text-4xl laptop:text-3xl 2xl:text-4xl font-HinaMincho">
                    PETA
                </h1>
            </div>

            <div
                className={`${CLASESS[1]} w-full px-4 mt-10 md:px-20 laptop:px-16 2xl:px-20 md:mt-14 lg:mt-28 laptop:mt-6 2xl:mt-24`}
            >
                <span className="text-sm text-left md:text-base font-Inter">
                    Kp Sungapan Batukarut RT 01 / RW 05 Desa Pasirbuncir Kec Caringin Kab. Bogor
                </span>
            </div>

            <div
                className={`${CLASESS[2]} w-full h-full px-4 pb-20 mt-2 md:pb-10 md:px-20 laptop:px-16 2xl:px-20`}
                onTransitionEnd={handleTransitionEnd}
            >
                <iframe
                    className="w-full h-full border-4 md:border-[6px] rounded-md border-gold"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen={false}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3962.1058768686657!2d106.83211141!3d-6.75694179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cb8ea54c2039%3A0x16f27aad13b02b65!2sKp.%20Batukarut!5e0!3m2!1sen!2sid!4v1778573542764!5m2!1sen!2sid"
                ></iframe>
            </div>
        </>
    )
}


export default Map
