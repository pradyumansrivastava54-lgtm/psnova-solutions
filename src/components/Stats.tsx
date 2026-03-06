import React from 'react';

const Stats = () => {
    const stats = [
        { value: "5+", label: "Projects Delivered" },
        { value: "100%", label: "Client Satisfaction" },
        { value: "10+", label: "Years Experience" },
        { value: "24/7", label: "Support Available" },
    ];

    return (
        <section className="py-20 bg-brand-900 relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center px-4">
                            <h4 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">
                                {stat.value}
                            </h4>
                            <p className="text-sm md:text-base text-brand-200 font-medium uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
