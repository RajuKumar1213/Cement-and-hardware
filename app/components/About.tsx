export default function About() {
    return (
        <section id="about" className="py-20 bg-zinc-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                                Who We Are
                            </h2>
                            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-zinc-900 sm:text-4xl">
                                Maa Enterprises - Hardware and  Cement Center
                            </h3>
                        </div>

                        <p className="text-lg text-zinc-600 leading-relaxed">
                            We have been a pillar of the construction community, providing top-tier materials to homeowners, contractors, and builders. Our commitment goes beyond just selling products; we sell assurance and durability.
                        </p>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                            <h4 className="text-xl font-bold text-zinc-900 mb-3">About Myself</h4>
                            <p className="text-zinc-600 italic">
                                "As the founder, I believe that every structure stands on the quality of its materials. My goal has always been to offer the best cement and hardware at the most competitive prices, ensuring that your dream home or project stands tall for generations. I personally verify the quality of every batch that enters our shop."
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                                    S
                                </div>
                                <div>
                                    <p className="font-semibold text-zinc-900">Mr. Rajkumar Ranjan</p>
                                    <p className="text-xs text-zinc-500">Proprietor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Graphic/Image Placeholder */}
                    <div className="relative lg:h-full min-h-[400px]">
                        <div className="absolute inset-0 rounded-3xl bg-zinc-200 overflow-hidden shadow-2xl skew-y-3 transform transition-transform hover:skew-y-0 duration-700">
                            {/* Gradient Placeholder if no image */}
                            <div className="h-full w-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <span className="text-6xl text-white opacity-20 font-black">100%</span>
                                    <p className="text-zinc-400 mt-2 font-mono uppercase tracking-widest">Quality Guaranteed</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
