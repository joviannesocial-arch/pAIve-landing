import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Share2, Server, Eye, Scale, UserCheck, Shield } from 'lucide-react';
import { GlassCard } from '../components/UI/GlassCard';

export const Privacy = () => {
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy & AI Ethics</h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                        Aligned with Singapore's PDPC Advisory Guidelines on AI Recommendation & Decision Systems.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {/* Transparency & Explainability (PDPC Key Principle) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <GlassCard className="p-8 md:p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                                    <Eye size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Transparency & Explainability</h3>
                                    <p className="text-gray-300 leading-relaxed font-light mb-4">
                                        We believe you have the right to know <em>how</em> your career advice is generated. pAIve uses a <strong>Suitability Mapping Engine</strong> that processes your input (CV, survey responses) against anonymized industry frameworks.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed font-light">
                                        Our AI does not use "black box" magic to determine your future. Every recommendation is traceable to specific attributes in your profile and observable market trends, ensuring you understand the logic behind your roadmap.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Fairness & Bias Mitigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="p-8 md:p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 shrink-0">
                                    <Scale size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Bias Mitigation</h3>
                                    <p className="text-gray-300 leading-relaxed font-light">
                                        We actively fine-tune our prompts and datasets to minimize career bias based on gender, ethnicity, or age. Our models are instructed to focus exclusively on <strong>skills, aptitude, and professional resonance</strong>. We regularly audit our outputs to ensure fair representation across all career paths.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Human-in-the-Loop */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <GlassCard className="p-8 md:p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-xl bg-green-500/10 text-green-400 shrink-0">
                                    <UserCheck size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Human-Centric Decision Making</h3>
                                    <p className="text-gray-300 leading-relaxed font-light">
                                        pAIve is a decision <em>support</em> tool, not a decision <em>maker</em>. While our AI provides high-fidelity recommendations, the final agency always rests with you. We do not automate legally significant decisions (such as hiring or firing) but rather empower you with data to make those choices for yourself.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Data Minimization & Resume Collection */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <GlassCard className="p-8 md:p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Data Minimization & Collection</h3>
                                    <p className="text-gray-300 leading-relaxed font-light">
                                        We practice <strong>Data Minimization</strong>. We only collect professional artifacts (Resumes, LinkedIn URLs) strictly necessary to generate your career roadmap. This data is processed transiently to extract skills and experiences, and is stored securely in our encrypted vaults. We do not harvest irrelevant personal data.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Secure AI & Zero-Sale (Original Core) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <GlassCard className="p-8 md:p-10 border-brand-indigo/30 bg-space-black/40">
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan shrink-0">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Security & Zero-Sale Policy</h3>
                                    <p className="text-gray-300 leading-relaxed font-light mb-4">
                                        We <strong>never</strong> sell, rent, or trade your personal information to third parties, recruiters, or ad networks. Your career data is your asset.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed font-light">
                                        Conversations are processed via the <strong>Enterprise Google Gemini API</strong> in a zero-retention environment (your data is NOT used for model training). Data is encrypted in transit (TLS) and at rest (AES-256).
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
