import React, { useState } from 'react'

interface ProkesProps {
    isActive: boolean
}

const Prokes: React.FC<ProkesProps> = ({ isActive }) => {
    const [transitionDone, setTransitionDone] = useState(false)

    const handleTransitionEnd: React.TransitionEventHandler<
        HTMLDivElement
    > = event => {
        setTransitionDone(true)
    }

    const images = [
        { src: '/picture/Capture1.PNG', alt: 'Memakai Masker' },
        { src: '/picture/Capture2.PNG', alt: 'Gunakan Hand Sanitizer' },
        { src: '/picture/Capture3.PNG', alt: 'Mencuci Tangan' },
        { src: '/picture/Capture4.PNG', alt: 'Mencuci Tangan' },
        { src: '/picture/Capture5.PNG', alt: 'Mencuci Tangan' },
    ]

    const CLASSES = [
        transitionDone
            ? 'scale-100 translate-x-0'
            : 'scale-0 translate-x-full pointer-events-none transition-transform duration-[700ms] ease-in-out',
        'scale-100 translate-x-0 transition-transform duration-[700ms] ease-in-out',
        'scale-100 translate-x-0 transition-transform duration-[700ms] ease-in-out',
        'scale-100 translate-x-0 transition-transform duration-[700ms] ease-in-out',
    ]

    return (
        <>
            <div className={`${CLASSES[0]} w-full`}>
                <h1 className="text-2xl text-center md:text-4xl laptop:text-3xl 2xl:text-4xl font-HinaMincho">
                    Gallery Kami
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full p-4 md:p-10 overflow-y-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${
                            CLASSES[index + 1]
                        } flex flex-col items-center p-2 rounded-md shadow-md hover:shadow-xl transition-shadow`}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        <div className="w-200 md:w-200">
                            <img
                                src={image.src}
                                alt={image.alt}
                                width="400"
                                height="200"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Prokes
