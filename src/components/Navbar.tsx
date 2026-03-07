import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <a href="#home" className="group">
                        <div className="flex flex-col items-center pl-4 pt-1">
                            <div className="flex items-center text-[2.75rem] leading-none font-sans font-black text-[#1a1b24] tracking-[-0.08em]">
                                <span className="pr-[0.05rem]">psn</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#8b5cf6] via-[#3b82f6] to-[#0ea5e9]">o</span>
                                <span className="pl-[0.05rem]">va</span>
                            </div>
                            <div className="w-full pl-[5.5rem] -mt-1">
                                <span className="text-[11px] font-bold text-[#1a1b24] tracking-[0.35em] uppercase">SOLUTIONS</span>
                            </div>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-700 hover:text-brand-accent transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 py-2.5 bg-brand-900 text-white rounded-full text-sm font-medium hover:bg-brand-accent transition-colors shadow-lg shadow-brand-900/20"
                        >
                            Get Started
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-slate-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {
                isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-slate-800 p-2 hover:bg-slate-50 rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="mt-2 text-center px-6 py-3 bg-brand-900 text-white rounded-xl text-base font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </a>
                    </div>
                )
            }
        </header >
    );
};

export default Navbar;
