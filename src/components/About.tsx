import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Column - Tech/Abstract Representation */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -left-6 -top-6 w-24 h-24 bg-brand-100 rounded-2xl -z-10 rotate-12"></div>
                            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-brand-50 rounded-full -z-10"></div>

                            <div className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

                                <div className="relative z-10 space-y-8">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                                        <Target className="h-8 w-8 text-brand-accent mb-4" />
                                        <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                                        <p className="text-slate-200">To deliver robust, scalable, and innovative digital solutions that drive business growth.</p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform translate-x-4 hover:translate-x-6 transition-transform duration-300">
                                        <Lightbulb className="h-8 w-8 text-yellow-400 mb-4" />
                                        <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                                        <p className="text-slate-200">To be the global leader in transformative technology and unmatched user experiences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-2">About PSNOVA Solutions</h2>
                        <h3 className="text-3xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                            Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-600">Digital Reality</span>.
                        </h3>

                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            At PSNOVA Solutions, we don't just write code; we architect the future. We are a team of passionate technologists dedicated to crafting digital experiences that are not only beautiful but also engineered to perform at scale.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            From startups to enterprises, we partner with visionaries to build software that solves complex problems and creates meaningful connections.
                        </p>

                        <div className="flex items-center gap-4 py-4 px-6 bg-slate-50 rounded-2xl w-max border border-slate-100">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center bg-brand-${i * 100} shadow-sm z-${50 - i * 10}`}>
                                        <Users className={`h-5 w-5 ${i > 2 ? 'text-white' : 'text-slate-600'}`} />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-brand-900">5+ Expert Engineers</p>
                                <p className="text-xs text-slate-500">Ready to build your next big thing</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
