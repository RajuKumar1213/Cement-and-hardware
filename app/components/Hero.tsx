'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HERO_IMAGES = [
    {
        src: "/images/slide1.jpeg",
        alt: "Construction Site",
    },
    {
        src: "/images/slide2.jpeg",
        alt: "Construction Site",
    },
    {
        src: "/images/slide3.jpeg",
        alt: "Construction Site",
    },
    {
        src: "/images/hero-bg.png",
        alt: "Construction Site",
    },

    {
        src: "/images/hero-construction.png",
        alt: "Modern Construction",
    },
    {
        src: "/images/hero-cement.png",
        alt: "Cement Warehouse",
    },
    {
        src: "/images/p14.jpeg",
        alt: "Cement Warehouse",
    },
    {
        src: "/images/owner.jpeg",
        alt: "High Quality Steel",
    }
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
            {/* Background Image Slider */}
            {HERO_IMAGES.map((image, index) => (
                <div
                    key={image.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover object-center"
                        priority={index === 0}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 flex h-full w-full items-center justify-center text-center">
                <div className="max-w-4xl px-4 sm:px-6">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in-up drop-shadow-lg">
                        Building Dreams with <br className="hidden md:block" />
                        <span className="text-orange-500">Strength & Reliability</span>
                    </h1>
                    <p className="mb-8 text-lg text-zinc-200 sm:text-xl md:max-w-2xl mx-auto drop-shadow-md">
                        Your one-stop destination for premium cement, hardware, and construction materials.
                        Quality you can trust for a foundation that lasts.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="#services"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-8 text-base font-semibold text-white shadow-lg transition-transform hover:bg-orange-700 hover:scale-105"
                        >
                            Our Products
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-transparent border-2 border-white px-8 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Slider Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
                {HERO_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                            ? 'bg-orange-500 scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>  
    );
}
