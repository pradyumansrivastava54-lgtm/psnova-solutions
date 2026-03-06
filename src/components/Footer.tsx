import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-900 text-slate-300 pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Rocket className="h-8 w-8 text-brand-accent" />
                            <span className="text-2xl font-bold tracking-tight text-white">
                                PSNOVA<span className="text-brand-accent">.</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            We empower businesses through custom software development, intuitive design, and scalable cloud solutions. Your vision, our engineering.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Case Studies', 'Careers', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm hover:text-brand-accent transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {[
                                'Software Development',
                                'Frontend & UI/UX',
                                'Backend & API',
                                'Cloud & DevOps',
                                'IT Support & Maintenance',
                                'Digital & Data Services'
                            ].map((service) => (
                                <li key={service}>
                                    <a href="#" className="text-sm hover:text-brand-accent transition-colors">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-sm mb-4">Subscribe to our newsletter for the latest tech insights and company updates.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-brand-accent text-white rounded-lg text-sm font-medium hover:bg-brand-400 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} PSNOVA Solutions. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
