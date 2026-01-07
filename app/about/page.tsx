import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold text-zinc-900 mb-6 tracking-tight">
                        About <span className="text-blue-600">Maa Enterprises</span>
                    </h1>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Leading the way in quality construction materials and hardware solutions.
                        We are committed to building your dreams with strength and colors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/images/owner.jpeg"
                            alt="Owner of Maa Enterprises"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide">
                            MEET THE OWNER
                        </div>
                        <h2 className="text-3xl font-bold text-zinc-900">
                            Visionary Leadership
                        </h2>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            At Maa Enterprises, we believe in trust, quality, and community.
                            Our journey started with a simple mission: to provide the best building materials to our local community at fair prices.
                        </p>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            With years of experience in the hardware and cement industry, we understand what it takes to build a strong foundation.
                            We personally select every product to ensure it meets our high standards of durability and performance.
                        </p>
                        <div className="pt-6 border-t border-zinc-100">
                            <h3 className="text-xl font-semibold text-zinc-900">Mr. Ranjan</h3>
                            <p className="text-blue-600">Founder & Owner</p>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-50 rounded-2xl p-10 md:p-16 text-center">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-6">Why Choose Us?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h4 className="font-semibold text-zinc-900 mb-2">Quality Assurance</h4>
                            <p className="text-sm text-zinc-500">Only the best brands and materials.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h4 className="font-semibold text-zinc-900 mb-2">Timely Delivery</h4>
                            <p className="text-sm text-zinc-500">We value your time and schedule.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <h4 className="font-semibold text-zinc-900 mb-2">Best Prices</h4>
                            <p className="text-sm text-zinc-500">Competitive pricing for all products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
