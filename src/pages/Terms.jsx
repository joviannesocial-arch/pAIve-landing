import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Scale, Cpu, Lock, FileCheck } from 'lucide-react';
import { GlassCard } from '../components/UI/GlassCard';

export const Terms = () => {
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                        Guidelines for our partnership.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {/* 1. Probabilistic Nature of AI (Crucial for AI services) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <GlassCard className="p-8 md:p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Nature of AI Services</h3>
                                    <p className="text-gray-300 leading-relaxed font-light mb-4">
                                        pAIve utilizes advanced Large Language Models (LLMs) to provide career guidance. You acknowledge that AI technology is probabilistic in nature and may occasionally generate incorrect or "hallucinated" information.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed font-light">
                                        <strong>No Guarantee of Outcome:</strong> While we strive for high-fidelity accuracy, pAIve does not guarantee specific job placements, salary increases, or interview success. Our roadmaps are strategic aids, not deterministic predictions.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* 2. Intellectual Property (Who owns what) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="p-8 md:p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                                    <FileCheck size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Intellectual Property Rights</h3>
                                    <p className="text-gray-300 leading-relaxed font-light mb-4">
                                        <strong>Your Input:</strong> You retain full ownership of all personal data, resumes, and text inputs you provide to pAIve.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed font-light">
                                        <strong>Our Output:</strong> pAIve grants you a non-exclusive, worldwide, royalty-free license to use, copy, and display the career roadmaps and charts generated for your personal usage. You may share them freely on platforms like LinkedIn.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* 3. Limitation of Liability */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <GlassCard className="p-8 md:p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400 shrink-0">
                                    <AlertTriangle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Limitation of Liability</h3>
                                    <p className="text-gray-300 leading-relaxed font-light">
                                        To the maximum extent permitted by law, pAIve Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the service.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* 4. Governing Law */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <GlassCard className="p-8 md:p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-xl bg-brand-indigo/10 text-brand-indigo shrink-0">
                                    <Scale size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Governing Law</h3>
                                    <p className="text-gray-300 leading-relaxed font-light">
                                        These Terms shall be governed by and construed in accordance with the laws of the <strong>Republic of Singapore</strong>, including the Personal Data Protection Act (PDPA). You agree to submit to the exclusive jurisdiction of the courts of Singapore.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};
