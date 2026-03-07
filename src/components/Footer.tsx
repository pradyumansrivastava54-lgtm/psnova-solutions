import React, { useState } from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import logo from '../assets/logo_2.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call to subscribe user
        setTimeout(() => {
            setStatus('success');
            setMessage('Thanks for subscribing! You will now receive our latest updates.');
            setEmail('');

            // Revert status after a few seconds
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        }, 1500);
    };

    return (
        <footer className="bg-brand-900 text-slate-300 pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="space-y-6">
                        <div className="flex flex-col items-start pt-[0.4rem] gap-0 group">
                            <div className="flex items-center text-[2.75rem] font-sans font-black tracking-[-0.05em] text-white leading-none">
                                <span className="pr-[0.05rem]">psn</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#8b5cf6] via-[#3b82f6] to-[#0ea5e9]">o</span>
                                <span className="pl-[0.05rem]">va</span>
                            </div>
                            <div className="pl-[4.95rem] -mt-[0.35rem]">
                                <span className="text-[10px] font-bold text-white tracking-[0.42em] uppercase">SOLUTIONS</span>
                            </div>
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
                                { name: 'Software Development', id: '01' },
                                { name: 'Frontend & UI/UX', id: '02' },
                                { name: 'Backend & API', id: '03' },
                                { name: 'Cloud & DevOps', id: '04' },
                                { name: 'IT Support & Maintenance', id: '05' },
                                { name: 'Digital & Data Services', id: '06' }
                            ].map((service) => (
                                <li key={service.id}>
                                    <a href={`#service-${service.id}`} className="text-sm hover:text-brand-accent transition-colors">
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-sm mb-4">Subscribe to our newsletter for the latest tech insights and company updates.</p>
                        <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'loading'}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="px-4 py-2 bg-brand-accent text-white rounded-lg text-sm font-medium hover:bg-brand-400 transition-colors disabled:opacity-50 whitespace-nowrap"
                                >
                                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </div>
                            {message && (
                                <p className={`text-xs mt-1 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                    {message}
                                </p>
                            )}
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
