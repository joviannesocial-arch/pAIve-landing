import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Database, Server, Fingerprint, Activity, Globe } from 'lucide-react';
import { GlassCard } from '../components/UI/GlassCard';

export const Security = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden text-white bg-space-black">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-indigo/10 text-brand-indigo mb-6 border border-brand-indigo/20">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Security Infrastructure</h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                        Defense-in-depth for your professional data.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* 1. Model Hygiene (Crucial for AI Trust) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <GlassCard className="h-full p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-brand-cyan mb-6">
                                <Server size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Model Hygiene & Isolation</h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                pAIve operates on a strict <strong>Zero-Training Policy</strong>. Data processed via our AI partners (Google Gemini Enterprise) is legally contractually prohibited from being used to train foundation models. Your career data remains isolated within our application layer and is never absorbed into the public knowledge base.
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* 2. Access Control (RBAC) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="h-full p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                                <Fingerprint size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Strict Access Control</h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                We employ <strong>Role-Based Access Control (RBAC)</strong> and enforce hardware-based Multi-Factor Authentication (MFA) for all engineering staff. Raw customer data is accessible only to automated systems, not humans, except where explicitly required for technical support with your consent.
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* 3. Encrypted Vaults (Data at Rest) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <GlassCard className="h-full p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <Database size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Encrypted Persistence</h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                All structured data is stored in segregated Airtable Enterprise vaults, encrypted at rest using <strong>AES-256</strong>. Data in transit is secured via TLS 1.3. We perform regular automated backups with point-in-time recovery to prevent data loss.
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* 4. Incident Response */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <GlassCard className="h-full p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
                                <Activity size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Incident Response</h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                We maintain a comprehensive Incident Response Plan. In the unlikely event of a data breach, we are committed to notifying affected users and relevant authorities (including PDPC) within <strong>72 hours</strong>, in strict compliance with Singapore regulations.
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
