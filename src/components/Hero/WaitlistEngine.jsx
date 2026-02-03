import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';

export const WaitlistEngine = ({ userData, setUserData, onSubmit, errors, status }) => {
    return (
        <motion.div
            key="signup-form"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="w-full text-left pt-12"
        >
            {/* Header */}
            <motion.h3
                layout
                className="text-2xl md:text-3xl font-bold text-white mb-6"
            >
                Join the pAIve Waitlist
            </motion.h3>

            <form onSubmit={onSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="First Name"
                                value={userData.name}
                                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-indigo/50 focus:bg-white/10 transition-all`}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-red-400 text-xs mt-2 ml-1">{errors.name}</p>
                        )}
                    </div>
                    <div className="flex-1">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-lg py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-indigo/50 focus:bg-white/10 transition-all`}
                        />
                        {errors.email && (
                            <p className="text-red-400 text-xs mt-2 ml-1">{errors.email}</p>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group w-full bg-brand-indigo hover:bg-brand-indigo/90 text-white font-medium py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? (
                        <span>Verifying Access...</span>
                    ) : (
                        <>
                            <span>Request Access</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
};
