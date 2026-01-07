import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Construction Site"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full w-full items-center justify-center text-center">
                <div className="max-w-4xl px-4 sm:px-6">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in-up">
                        Building Dreams with <br className="hidden md:block" />
                        <span className="text-orange-500">Strength & Reliability</span>
                    </h1>
                    <p className="mb-8 text-lg text-zinc-200 sm:text-xl md:max-w-2xl mx-auto">
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
        </section>
    );
}
