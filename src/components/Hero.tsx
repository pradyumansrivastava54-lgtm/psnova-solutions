import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
            {/* Background blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-accent rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200 mb-8 animate-fade">
                        <Sparkles className="h-4 w-4 text-brand-accent" />
                        <span className="text-sm font-medium text-slate-800">Innovating the Digital Future</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-900 mb-8 leading-tight opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
                        Elevate Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-600">PSNOVA</span> Solutions.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
                        We deliver state-of-the-art software, intuitive UI/UX, and scalable cloud solutions tailored to accelerate your growth and transform your vision into reality.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[slideUp_0.8s_ease-out_0.6s_forwards]">
                        <a
                            href="#services"
                            className="w-full sm:w-auto px-8 py-4 bg-brand-900 text-white rounded-full font-medium hover:bg-brand-accent transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-brand-900/20 group hover:-translate-y-1"
                        >
                            Explore Our Services
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-brand-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
                        >
                            Book a Consultation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
