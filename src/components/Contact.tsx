import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import useWeb3Forms from '@web3forms/react';

const Contact = () => {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Replace with your Web3Forms Access Key
    const accessKey = "05028668-3132-4e0b-8c35-635e4f20ea50";

    const { submit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: 'PSNOVA Solutions Website',
            subject: 'New Contact Form Submission',
        },
        onSuccess: (message, data) => {
            setIsSubmitting(false);
            setStatus("Thank you! Your message has been sent successfully.");
            // Reset the form in the handleSubmit function
        },
        onError: (message, data) => {
            setIsSubmitting(false);
            setStatus("Oops! Something went wrong. Please check your connection or try again.");
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("Sending...");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        await submit(data);
        form.reset();
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Contact Information */}
                    <div className="w-full lg:w-5/12 space-y-8">
                        <div>
                            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-2">Get In Touch</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6">Let's Build Something Great Together</h3>
                            <p className="text-lg text-slate-600 mb-8">
                                Ready to transform your ideas into scalable reality? Reach out to our team of experts and let's discuss your next project.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <div className="bg-brand-50 p-3 rounded-full text-brand-accent">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 uppercase">Email Us</h4>
                                    <a href="mailto:hello@psnova.com" className="text-lg font-medium text-brand-900 hover:text-brand-accent transition-colors">psnovasolutions01@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <div className="bg-brand-50 p-3 rounded-full text-brand-accent">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 uppercase">Call Us</h4>
                                    <a href="+91 4578654215" className="text-lg font-medium text-brand-900 hover:text-brand-accent transition-colors">+91 4578654215</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <div className="bg-brand-50 p-3 rounded-full text-brand-accent">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 uppercase">Visit Us</h4>
                                    <p className="text-lg font-medium text-brand-900">Unnao<br />Tech City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {status && (
                                    <div className={`p-4 rounded-xl text-sm font-medium ${status.includes("Thank you") ? "bg-green-50 text-green-700 border border-green-200" :
                                        status.includes("Sending") ? "bg-blue-50 text-blue-700 border border-blue-200" :
                                            "bg-red-50 text-red-700 border border-red-200"
                                        }`}>
                                        {status}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-white"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-white"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium text-slate-700">Required Service</label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        defaultValue=""
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-white appearance-none"
                                    >
                                        <option value="" disabled>Select a Service</option>
                                        <option value="software">Software Development Services</option>
                                        <option value="frontend">Frontend & UI/UX Services</option>
                                        <option value="backend">Backend & API Development</option>
                                        <option value="cloud">Cloud & DevOps Services</option>
                                        <option value="support">IT Support & Maintenance</option>
                                        <option value="data">Digital & Data Services</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all bg-white resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg group ${isSubmitting ? 'bg-slate-400 cursor-not-allowed shadow-none' : 'bg-brand-900 hover:bg-brand-accent shadow-brand-900/10'
                                        }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    {!isSubmitting && <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
