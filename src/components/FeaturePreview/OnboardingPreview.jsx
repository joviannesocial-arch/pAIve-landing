import { GlassCard } from '../UI/GlassCard';
import { StyledInput } from '../UI/StyledInput';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

export const OnboardingPreview = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -z-10" />

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
                <p className="text-gray-400">Share your background and let AI tailor the experience.</p>
            </div>

            <GlassCard className="max-w-xl mx-auto p-8 border-white/20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                        J
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Jo's Profile</h3>
                        <p className="text-sm text-green-400 flex items-center gap-1">
                            <CheckCircle2 size={14} /> Profile Active
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Current Status</label>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-lg bg-brand-purple border border-brand-purple text-white text-center text-sm font-medium">
                                University Student
                            </div>
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-center text-sm font-medium hover:bg-white/10 cursor-pointer">
                                Fresh Graduate
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Career Goal</label>
                        <StyledInput placeholder="e.g. Find an Internship" defaultValue="Break into Tech" />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Resume / CV</label>
                        <div className="border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center text-gray-400 hover:border-brand-purple/50 hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="p-3 rounded-full bg-white/5 mb-3 group-hover:scale-110 transition-transform">
                                <UploadCloud size={24} className="text-brand-purple" />
                            </div>
                            <p className="text-sm font-medium text-white">Upload your CV</p>
                            <p className="text-xs mt-1">PDF, DOCX up to 10MB</p>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </section>
    );
};
