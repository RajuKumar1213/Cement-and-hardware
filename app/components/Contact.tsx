export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-2">Get in Touch</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">Place Your Order / Contact Us</h3>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-100">

                    {/* Contact Info Sidebar */}
                    <div className="bg-zinc-900 p-10 text-white flex flex-col justify-between">
                        <div>
                            <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
                            <p className="text-zinc-400 mb-8">
                                Fill up the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <span className="text-2xl">📍</span>
                                    <div>
                                        <p className="font-semibold text-white">Location</p>
                                        <p className="text-zinc-400">123 Market Road, Near City Center, Your City, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="text-2xl">📞</span>
                                    <div>
                                        <p className="font-semibold text-white">Phone</p>
                                        <p className="text-zinc-400">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="text-2xl">✉️</span>
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <p className="text-zinc-400">contact@shankarcement.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm text-zinc-500">
                                Operating Hours: <br />Mon - Sat: 8:00 AM - 8:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-10">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-orange-500 focus:ring-orange-500 focus:outline-none transition-all"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+91 99999..."
                                        className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-orange-500 focus:ring-orange-500 focus:outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="item" className="block text-sm font-medium text-zinc-700 mb-1">Item Needed</label>
                                    <select
                                        id="item"
                                        className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-orange-500 focus:ring-orange-500 focus:outline-none transition-all"
                                    >
                                        <option>Cement</option>
                                        <option>Iron Rods</option>
                                        <option>Paints</option>
                                        <option>Tools</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">Details / Quantity</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="e.g., 50 bags of Ambuja Cement..."
                                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-orange-500 focus:ring-orange-500 focus:outline-none transition-all"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-orange-600 px-6 py-4 text-base font-bold text-white shadow-lg transition-transform hover:bg-orange-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            >
                                Send Message / Place Order
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
