export default function Services() {
    const products = [
        {
            title: "Premium Cement",
            description: "Ambuja, Acc, Shree Jungrodhak, Roofon and other top-tier brands available for strong foundations.",
            icon: "🏗️",
        },
        {
            title: "Iron Rods (TMT)",
            description: "High-grade TMT bars for superior structural integrity and earthquake resistance.",
            icon: "🔩",
        },
        {
            title: "Paints & Finishes",
            description: "Wide range of interior and exterior paints to bring your walls to life.",
            icon: "🎨",
        },
        {
            title: "Plumbing Hardware",
            description: "Pipes, fittings, and faucets from reliable manufacturers.",
            icon: "🔧",
        },

    ];

    return (
        <section id="services" className="bg-zinc-900 py-24 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2">Our Offerings</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Everything You Need to Build</h3>
                    <div className="mt-4 h-1 w-24 bg-orange-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl bg-zinc-800 p-8 hover:bg-zinc-700 transition-all duration-300 hover:-translate-y-2 border border-zinc-700/50 hover:border-orange-500/50"
                        >
                            <div className="mb-4 text-4xl">{product.icon}</div>
                            <h4 className="mb-3 text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                {product.title}
                            </h4>
                            <p className="text-zinc-400 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Decorative accent */}
                            <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-zinc-600 group-hover:bg-orange-500 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
