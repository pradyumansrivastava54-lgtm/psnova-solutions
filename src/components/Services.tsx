import React from 'react';
import {
    Code2,
    Layout,
    Server,
    Cloud,
    Settings,
    Database,
    ArrowRight
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: "01",
            title: "Software Development Services",
            description: "Custom, scalable software solutions engineered perfectly to align with your unique business goals and operations.",
            icon: <Code2 className="h-8 w-8" />,
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: "02",
            title: "Frontend & UI/UX Services",
            description: "Stunning, human-centric interfaces that provide intuitive experiences and captivating visual design.",
            icon: <Layout className="h-8 w-8" />,
            color: "from-purple-500 to-pink-500"
        },
        {
            id: "03",
            title: "Backend & API Development",
            description: "Robust, secure server-side architectures and seamless API integrations driving your applications.",
            icon: <Server className="h-8 w-8" />,
            color: "from-amber-500 to-orange-500"
        },
        {
            id: "04",
            title: "Cloud & DevOps Services",
            description: "Streamlined deployment pipelines and scalable cloud infrastructures across AWS, Azure, and GCP.",
            icon: <Cloud className="h-8 w-8" />,
            color: "from-emerald-500 to-teal-400"
        },
        {
            id: "05",
            title: "IT Support & Maintenance",
            description: "Proactive 24/7 technical support and system monitoring to ensure infinite uptime and performance.",
            icon: <Settings className="h-8 w-8" />,
            color: "from-brand-600 to-brand-800"
        },
        {
            id: "06",
            title: "Digital & Data Services",
            description: "Actionable analytics, data engineering, and digital transformation strategies to empower decision-making.",
            icon: <Database className="h-8 w-8" />,
            color: "from-rose-500 to-red-500"
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background styling */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-2">What We Do</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6">Our Core Services</h3>
                    <p className="text-lg text-slate-600">
                        We provide an end-to-end suite of services to transform your digital presence, engineered for performance, scale, and uncompromising quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Top Banner Gradient */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                            <div className="flex justify-between items-start mb-8">
                                <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                                    {service.icon}
                                </div>
                                <span className="text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">
                                    {service.id}
                                </span>
                            </div>

                            <h4 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-brand-accent transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-slate-600 mb-8 flex-grow">
                                {service.description}
                            </p>

                            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-brand-900 group-hover:text-brand-accent transition-colors mt-auto">
                                Discover More
                                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
