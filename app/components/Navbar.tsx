'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
                            <img src="/images/logo.svg" alt="Maa Enterprises Logo" className="h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="text-zinc-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Home
                            </Link>
                            <Link href="/gallery" className="text-zinc-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Gallery
                            </Link>
                            <Link href="/about" className="text-zinc-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                About Us
                            </Link>
                            <Link href="/#contact" className="bg-zinc-900 text-white hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-zinc-200" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                            Gallery
                        </Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                            About Us
                        </Link>
                        <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
