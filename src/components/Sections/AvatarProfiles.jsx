import { motion } from 'framer-motion';
import { GlassCard } from '../UI/GlassCard';
import { Star, BarChart3, Rocket, Brain, Wand2, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const styles = [
    {
        name: "The Creative",
        role: "Innovation Guide",
        desc: "Unconventional, enthusiastic 'What if?' thinking. Uses metaphors and design thinking.",
        tags: ["Imaginative", "Out-of-box", "Inspiring"],
        color: "border-pink-500/50 shadow-pink-500/20",
        bg: "bg-pink-500/20",
        text: "text-pink-400",
        icon: Star,
        beamColor: "from-pink-600 via-rose-400 to-white",
        resultMsg: "Ideally, your path requires vision where others see limits."
    },
    {
        name: "The Analyst",
        role: "Data Master",
        desc: "Precise, objective, data-driven. Uses percentages, probabilities, and market trends.",
        tags: ["Logical", "Precise", "Evidence-based"],
        color: "border-blue-500/50 shadow-blue-500/20",
        bg: "bg-blue-500/20",
        text: "text-blue-400",
        icon: BarChart3,
        beamColor: "from-blue-600 via-cyan-400 to-white",
        resultMsg: "Ideally, your path requires clarity amidst chaos."
    },
    {
        name: "The Commander",
        role: "Action Leader",
        desc: "Direct, bold, results-oriented. Focuses on 'High Growth' and winning.",
        tags: ["Bold", "Direct", "Motivating"],
        color: "border-orange-500/50 shadow-orange-500/20",
        bg: "bg-orange-500/20",
        text: "text-orange-400",
        icon: Rocket,
        beamColor: "from-orange-600 via-amber-400 to-white",
        resultMsg: "Ideally, your path requires definitive action."
    },
    {
        name: "The Sage",
        role: "Wisdom Keeper",
        desc: "Calm, philosophical, patient. Focuses on long-term fulfillment and purpose (Ikigai).",
        tags: ["Thoughtful", "Patient", "Deep"],
        color: "border-green-500/50 shadow-green-500/20",
        bg: "bg-green-500/20",
        text: "text-green-400",
        icon: Brain,
        beamColor: "from-green-600 via-emerald-400 to-white",
        resultMsg: "Ideally, your path requires deep purpose and patience."
    },
    {
        name: "The Mix",
        role: "Adaptive Pathfinder",
        desc: "High EQ. Adapts to your mood and context. Friendly, engaging, game-like coaching.",
        tags: ["Versatile", "Empathetic", "Adaptive"],
        color: "border-purple-500/50 shadow-purple-500/20",
        bg: "bg-purple-500/20",
        text: "text-purple-400",
        icon: Wand2,
        recommended: true,
        beamColor: "from-purple-600 via-indigo-400 to-white",
        resultMsg: "Ideally, your path requires adaptability in every moment."
    }
];

export const AvatarProfiles = () => {
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet the 5 Coaching Styles</h2>
                    <p className="text-xl text-gray-400 mb-8">Find a coaching personality that fits your needs.</p>

                    <Link
                        to="/quiz"
                        className="inline-block px-8 py-4 text-lg font-bold text-white rounded-full bg-white/5 border border-white hover:bg-white/10 transition-all duration-300 animate-pulse shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-105"
                    >
                        Take the Coaching Quiz
                    </Link>
                </motion.div>

                {/* Grid Layout: 3 Columns for first 3, 2 Columns for last 2 on Desktop */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {styles.slice(0, 3).map((style, idx) => (
                        <StyleCard key={style.name} style={style} idx={idx} />
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {styles.slice(3, 5).map((style, idx) => (
                        <StyleCard key={style.name} style={style} idx={idx + 3} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StyleCard = ({ style, idx }) => {
    const Icon = style.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
        >
            <GlassCard className={`h-full p-8 transition-all duration-300 hover:-translate-y-2 border ${style.color} hover:bg-white/10 relative overflow-hidden group`}>

                {/* Recommended Badge */}
                {style.recommended && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl shadow-lg flex items-center gap-1 z-20">
                        <BadgeCheck size={14} />
                        RECOMMENDED
                    </div>
                )}

                <div className={`w-16 h-16 rounded-2xl ${style.bg} mb-6 flex items-center justify-center`}>
                    <Icon className={style.text} size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-1">{style.name}</h3>
                <div className={`text-sm font-mono ${style.text} mb-4 uppercase tracking-wider`}>{style.role}</div>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    {style.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {style.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 border border-white/5 text-gray-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </GlassCard>
        </motion.div>
    );
};
