import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

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
                    <div className="flex items-center gap-2">
                        <Rocket className={`h-8 w-8 ${isScrolled ? 'text-brand-accent' : 'text-brand-accent'}`} />
                        <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-900' : 'text-slate-900'}`}>
                            PSNOVA<span className="text-brand-accent">.</span>
                        </span>
                    </div>

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
            {isMobileMenuOpen && (
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
            )}
        </header>
    );
};

export default Navbar;
