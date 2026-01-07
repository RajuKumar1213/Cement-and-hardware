import Image from 'next/image';

export default function Gallery() {

    const titles = [
        'Wall Paints',
        'Exterior Protection',
        'Enamels & Primers',
    ];

    const paints = Array.from({ length: 26 }, (_, i) => ({
        src: `/images/p${i + 1}.jpeg`,
        alt: `Premium Paint ${i + 1}`,
        title: titles[i % titles.length],
    }));

    const cements = Array.from({ length: 14 }, (_, i) => ({
        src: `/images/s1 (${i + 1}).jpeg`,
        alt: `Premium Paint ${i + 1}`,
        title: titles[i % titles.length],
    }));

    const steels = Array.from({ length: 8 }, (_, i) => ({
        src: `/images/steel (${i + 1}).jpeg`,
        alt: `Premium Paint ${i + 1}`,
        title: titles[i % titles.length],
    }));


    const hardware = Array.from({ length: 46 }, (_, i) => ({
        src: `/images/hardware (${i + 1}).jpeg`,
        alt: `Premium Paint ${i + 1}`,
        title: titles[i % titles.length],
    }));

    return (
        <div className="bg-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-zinc-900 text-center mb-12 tracking-tight">
                    Product <span className="text-blue-600">Gallery</span>
                </h1>

                {/* Cements Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-zinc-800 mb-8 border-b border-zinc-200 pb-4">
                        Cement & Construction
                    </h2>
                    <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">
                        {cements.map((item, index) => (
                            <div key={index} className="break-inside-avoid mb-4">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Paints Section */}
                <section>
                    <h2 className="text-3xl font-bold text-zinc-800 mb-8 border-b border-zinc-200 pb-4">
                        Paints & Colors
                    </h2>
                    <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
                        {paints.map((item, index) => (
                            <div key={index} className="break-inside-avoid mb-4">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Steel Section */}
                <section>
                    <h2 className="text-3xl font-bold text-zinc-800 mb-8 border-b border-zinc-200 py-4">
                        Steel & Hardware
                    </h2>
                    <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
                        {steels.map((item, index) => (
                            <div key={index} className="break-inside-avoid mb-4">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hardware Section */}
                <section>
                    <h2 className="text-3xl font-bold text-zinc-800 mb-8 border-b border-zinc-200 py-4">
                        Hardware
                    </h2>
                    <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
                        {hardware.map((item, index) => (
                            <div key={index} className="break-inside-avoid mb-4">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
