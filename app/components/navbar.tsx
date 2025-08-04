'use client';

import Link from "next/link";
import { Menu } from 'lucide-react';
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

return (
    <div>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Left: Site Title */}
            <div className="text-xl font-bold text-blue-800">
                Next.js Course
            </div>

            {/* Right: Nav for desktop */}
            <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            {/* Right: Hamburger menu for mobile */}
            <div className="md:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 text-2xl focus:outline-none"
                >
                    <Menu />
                </button>
            </div>
        </div>

        {isOpen && (
        <div className={`md:hidden bg-white px-4 pb-4 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        >
            <nav className="flex flex-col gap-2 text-gray-700 font-medium">
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </nav>
        </div>
        )}
    </div>
    );
}