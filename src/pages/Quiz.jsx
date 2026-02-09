import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, BadgeCheck } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { GlassCard } from '../components/UI/GlassCard';
import { styles as coachingStyles } from '../components/Sections/AvatarProfiles';

const questions = [
    // 1. The "Deep Dive" Method (Uncovering the "Why")
    {
        id: 1,
        text: "When you achieve a high grade or complete a difficult project, what specific part of the 'win' feels the most fulfilling to you?",
        options: [
            { text: "The moment the logic finally clicked and the problem was solved.", type: "The Analyst" },
            { text: "The recognition and the way it connects me to my peers.", type: "The Creative" },
            { text: "The proof that my individual system and effort actually work.", type: "The Commander" },
            { text: "The internal peace of knowing I am capable of meeting the standard.", type: "The Sage" }
        ]
    },
    {
        id: 2,
        text: "Why do you prefer your current favourite study environment (e.g., a quiet library versus a busy cafe)?",
        options: [
            { text: "Because it allows for deep, uninterrupted attention to technical detail.", type: "The Analyst" },
            { text: "Because the background energy makes me feel part of a collective buzz.", type: "The Creative" },
            { text: "Because it is a controlled space where I set the rules of my work.", type: "The Commander" },
            { text: "Because I can observe the world while still processing my own thoughts.", type: "The Sage" }
        ]
    },
    {
        id: 3,
        text: "Think of your favourite subject. Is it the actual content you love, or the way you have to think to succeed in it?",
        options: [
            { text: "The logical, step-by-step thinking required to find a single truth.", type: "The Analyst" },
            { text: "The way the subject connects to real people and societal change.", type: "The Creative" },
            { text: "The opportunity to build, create, or lead within that field.", type: "The Commander" },
            { text: "The chance to interpret and find deeper, hidden meaning in the material.", type: "The Sage" }
        ]
    },
    // 2. Behavioral & Situational Questions (Past Patterns)
    {
        id: 4,
        text: "Think of a time you were part of a team that completely missed a deadline. What was your immediate, gut reaction?",
        options: [
            { text: "I started looking for the technical bottleneck or logic error to fix it.", type: "The Analyst" },
            { text: "I checked in with the team to manage the fallout and maintain morale.", type: "The Creative" },
            { text: "I took the lead in redrafting the timeline and roles for the next attempt.", type: "The Commander" },
            { text: "I reflected on my own contribution and waited for a new lead to follow.", type: "The Sage" }
        ]
    },
    {
        id: 5,
        text: "Recall a time you disagreed with a major decision made by a teacher or a leader. How did you handle the friction?",
        options: [
            { text: "I presented a data-backed alternative to prove my point logically.", type: "The Analyst" },
            { text: "I spoke to others to see if we could find a collective compromise.", type: "The Creative" },
            { text: "I stayed focused on my own work and adjusted my methods to fit the new rule.", type: "The Commander" },
            { text: "I accepted the decision but kept a mental note of exactly why I felt it was wrong.", type: "The Sage" }
        ]
    },
    {
        id: 6,
        text: "Tell me about a time you went 'above and beyond' on a task. What was the internal driver that kept you going?",
        options: [
            { text: "The desire to see if I could push the system or the project to its absolute limit.", type: "The Analyst" },
            { text: "The satisfaction of helping someone else succeed or feel included.", type: "The Creative" },
            { text: "The pride in creating something that was uniquely my own design.", type: "The Commander" },
            { text: "The sense of duty to complete the work to the highest possible standard.", type: "The Sage" }
        ]
    },
    {
        id: 7,
        text: "Think of your most significant 'failure' in the last year. What was the first thing you changed about your behaviour after?",
        options: [
            { text: "I refined the logic and the technical steps I took to avoid that specific error.", type: "The Analyst" },
            { text: "I reached out for feedback to understand how I was perceived by others.", type: "The Creative" },
            { text: "I tightened my personal schedule and my self-discipline.", type: "The Commander" },
            { text: "I took time to reflect on whether that path was truly suited to my values.", type: "The Sage" }
        ]
    },
    // 3. "What If" Scenarios (Hypotheticals)
    {
        id: 8,
        text: "You have a Saturday with zero obligations. You naturally gravitate towards...",
        options: [
            { text: "A deep-dive into a complex hobby, code, or a digital project.", type: "The Analyst" },
            { text: "A social gathering or an event where things are happening with people.", type: "The Creative" },
            { text: "A personal creative task or a 'side-hustle' you've been building.", type: "The Commander" },
            { text: "A quiet space to recharge, read, or observe the world.", type: "The Sage" }
        ]
    },
    {
        id: 9,
        text: "You find an unmarked wallet with $100 on the school grounds. Your instinctual first thought is...",
        options: [
            { text: "'How can I mathematically track down who was in this area last?'", type: "The Analyst" },
            { text: "'Who can I tell so that the right person gets this back immediately?'", type: "The Creative" },
            { text: "'I should take charge of this and hand it to the office myself.'", type: "The Commander" },
            { text: "'I hope whoever lost this isn't in too much trouble right now.'", type: "The Sage" }
        ]
    },
    {
        id: 10,
        text: "If you were leading a project and a team member wasn't contributing, your primary approach would be...",
        options: [
            { text: "To re-allocate their technical tasks to someone more efficient immediately.", type: "The Analyst" },
            { text: "To have a one-on-one conversation to see if they are okay personally.", type: "The Creative" },
            { text: "To set firm, new deadlines and hold them strictly accountable.", type: "The Commander" },
            { text: "To pick up their slack myself to ensure the final quality doesn't drop.", type: "The Sage" }
        ]
    },
    {
        id: 11,
        text: "If you were asked to start a new club at school from scratch, what would your 'Day One' look like?",
        options: [
            { text: "Mapping out the technical requirements and the 'how-it-works' guide.", type: "The Analyst" },
            { text: "Hosting an open mixer to gather as many different voices as possible.", type: "The Creative" },
            { text: "Writing the mission statement and a strict roadmap for the entire year.", type: "The Commander" },
            { text: "Listening to what other people want and seeing where I fit in.", type: "The Sage" }
        ]
    },
    // 4. Direct Reflection Questions (Self-Analysis)
    {
        id: 12,
        text: "What is the one thing your friends or classmates almost always ask you for help with?",
        options: [
            { text: "Troubleshooting a technical issue or explaining a complex rule.", type: "The Analyst" },
            { text: "Navigating a social drama or settling a disagreement between people.", type: "The Creative" },
            { text: "Organising a group chat, a trip, or a shared project schedule.", type: "The Commander" },
            { text: "Giving an honest, grounded perspective on a difficult situation.", type: "The Sage" }
        ]
    },
    {
        id: 13,
        text: "If you could instantly 'level up' one aspect of your personality, which would have the biggest impact on your future?",
        options: [
            { text: "My ability to focus on one complex task for hours without distraction.", type: "The Analyst" },
            { text: "My confidence in speaking up and leading a large, diverse group.", type: "The Creative" },
            { text: "My discipline in sticking to a routine and hitting every milestone.", type: "The Commander" },
            { text: "My empathy in understanding people whose views are opposite to mine.", type: "The Sage" }
        ]
    },
    {
        id: 14,
        text: "What is a passion or interest you have right now that almost nobody else knows about?",
        options: [
            { text: "Something technical or analytical that requires high, solo focus.", type: "The Analyst" },
            { text: "Something social or community-based that connects people together.", type: "The Creative" },
            { text: "Something creative or entrepreneurial that I'm building in secret.", type: "The Commander" },
            { text: "Something reflective or artistic that helps me process my own thoughts.", type: "The Sage" }
        ]
    },
    {
        id: 15,
        text: "How do you think a complete stranger would describe you after observing you for just ten minutes?",
        options: [
            { text: "Focused, analytical, and perhaps a bit reserved.", type: "The Analyst" },
            { text: "Outgoing, energetic, and naturally engaged with others.", type: "The Creative" },
            { text: "Confident, organised, and clearly on a mission.", type: "The Commander" },
            { text: "Calm, observant, and thoughtful.", type: "The Sage" }
        ]
    }
];


const styleColors = {
    "The Creative": { hex: "#ec4899", class: "bg-pink-500" },
    "The Analyst": { hex: "#3b82f6", class: "bg-blue-500" },
    "The Commander": { hex: "#f97316", class: "bg-orange-500" },
    "The Sage": { hex: "#22c55e", class: "bg-green-500" },
    "The Mix": { hex: "#a855f7", class: "bg-purple-500" }
};

export const Quiz = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0); // 0-14 = Questions, 15 = Loading, 16 = Result
    const [scores, setScores] = useState({
        "The Creative": 0,
        "The Analyst": 0,
        "The Commander": 0,
        "The Sage": 0,
        "The Mix": 0
    });
    const [resultStyle, setResultStyle] = useState(null);
    const [typingComplete, setTypingComplete] = useState(false);
    const [leadingStyle, setLeadingStyle] = useState(null);

    const handleOptionSelect = (type) => {
        // Update score
        const newScores = { ...scores, [type]: scores[type] + 1 };
        setScores(newScores);
        setTypingComplete(false);

        // Calculate leading style for Aura
        const leader = Object.keys(newScores).reduce((a, b) => newScores[a] > newScores[b] ? a : b);
        setLeadingStyle(leader);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(questions.length); // Loading
            calculateResult(newScores);
        }
    };

    const calculateResult = (finalScores) => {
        // 1. Calculate Variance/Spread
        const values = Object.values(finalScores);
        const maxScore = Math.max(...values);

        // Count how many Styles are within X points of the max to determine "High Variance" (flat distribution) using prompt logic
        // Prompt rule: "The Mix is only suggested if the user's answers show high variance across three or more pillars."
        // Interpreted: If top 3 scores are all high (e.g. > 3 or within 2 points of max).
        // Let's use: If at least 3 styles have scores >= 3.
        const highScoringStylesCount = values.filter(v => v >= 3).length;

        let matchName = "The Analyst"; // Fallback

        // Check for Mix conditions:
        // A) Mix score is highest (unlikely given new matrix, but possible if mixed inputs somehow)
        // B) High variance across 3+ pillars -> The Mix
        if (finalScores["The Mix"] >= maxScore && finalScores["The Mix"] > 0) {
            matchName = "The Mix";
        } else if (highScoringStylesCount >= 3) {
            // Variance Trigger
            matchName = "The Mix";
        } else {
            // Standard Winner
            matchName = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);
        }

        const match = coachingStyles.find(s => s.name === matchName);

        setTimeout(() => {
            setResultStyle(match);
            setCurrentStep(questions.length + 1);
        }, 2200);
    };

    const handleHandshake = () => {
        if (resultStyle) {
            localStorage.setItem('paive_style', JSON.stringify(resultStyle));
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById('why-paive');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    // Calculate progress percentage
    const progress = ((currentStep + 1) / questions.length) * 100;
    const isQuestion = currentStep < questions.length;
    const auraColor = leadingStyle ? styleColors[leadingStyle].hex : "#4ade80"; // Default green/mix

    return (
        <div className="min-h-screen pt-24 px-6 flex flex-col items-center relative overflow-hidden transition-colors duration-1000">
            {/* Background elements moved to global index.css but keeping stars here as overlay if needed or relying on App.jsx globals */}

            {/* Dynamic Background Glow for Result */}
            {currentStep === questions.length + 1 && resultStyle && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className={`absolute inset-0 z-0 bg-gradient-to-b ${resultStyle.beamColor.replace('to-white', 'to-transparent')} opacity-20`}
                />
            )}

            <div className="container mx-auto max-w-4xl relative z-10 w-full flex flex-col items-center">
                {currentStep < questions.length + 1 && (
                    <button
                        onClick={() => navigate('/')}
                        className="self-start flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </button>
                )}

                <AnimatePresence mode='wait'>
                    {isQuestion && (
                        <motion.div
                            key={`question-${currentStep}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="w-full max-w-2xl mx-auto"
                        >
                            <GlassCard className="p-8 md:p-12 relative overflow-hidden border-white/10 transition-shadow duration-500"
                                style={{
                                    boxShadow: leadingStyle ? `0 0 40px ${auraColor}20` : 'none'
                                }}
                            >
                                {/* Live-Tuning Aura */}
                                <div
                                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-colors duration-1000 opacity-50 pointer-events-none"
                                    style={{ backgroundColor: auraColor }}
                                />

                                {/* Progress Paving: Beam of Light */}
                                <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-white/5">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${(currentStep / questions.length) * 100}%` }}
                                        className="w-full bg-brand-indigo shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                                    />
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-white/5">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${(currentStep / questions.length) * 100}%` }}
                                        className="w-full bg-brand-indigo shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                                    />
                                </div>

                                {currentStep > 0 && (
                                    <button
                                        onClick={() => setCurrentStep(prev => prev - 1)}
                                        className="absolute top-8 left-8 flex items-center gap-1 text-gray-400 hover:text-white transition-colors z-20"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        <span>Back</span>
                                    </button>
                                )}

                                <div className="text-sm font-mono text-gray-400 mb-6 uppercase tracking-wider text-end mt-2">
                                    QUESTION {currentStep + 1} / {questions.length}
                                </div>

                                <h2 className="text-xl md:text-2xl font-bold mb-8 min-h-[80px]">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                                .changeDelay(20)
                                                .typeString(questions[currentStep].text)
                                                .callFunction(() => setTypingComplete(true))
                                                .start();
                                        }}
                                        options={{
                                            cursor: '▋',
                                            cursorClassName: 'typewriter-cursor text-brand-indigo'
                                        }}
                                    />
                                </h2>

                                <div className="grid gap-4">
                                    {questions[currentStep].options.map((option, idx) => (
                                        <motion.button
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: typingComplete ? 1 : 0, y: typingComplete ? 0 : 10 }}
                                            transition={{ delay: idx * 0.1 }}
                                            onClick={() => handleOptionSelect(option.type)}
                                            className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-indigo/50 hover:shadow-[0_0_15px_rgba(79,70,229,0.2)] text-left transition-all group flex items-center justify-between"
                                        >
                                            <span className="text-lg text-gray-200 group-hover:text-white transition-colors">{option.text}</span>
                                            {/* Selection Indicator */}
                                            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-indigo group-hover:bg-brand-indigo/20">
                                                <div className="w-2 h-2 rounded-full bg-brand-indigo opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    )}

                    {currentStep === questions.length && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-20"
                        >
                            <div className="relative w-32 h-32 mb-8">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-t-2 border-l-2 border-brand-indigo opacity-50"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-2 rounded-full border-b-2 border-r-2 border-brand-cyan opacity-50"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Sparkles className="w-8 h-8 text-white animate-pulse" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold animate-pulse">Tuning your frequency...</h2>
                            <p className="text-gray-400 mt-2">Analyzing psychometric vectors</p>
                        </motion.div>
                    )}

                    {currentStep === questions.length + 1 && resultStyle && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="w-full max-w-lg mx-auto py-10"
                        >
                            {/* Enlarged Result Card */}
                            <GlassCard className={`p-10 border ${resultStyle.color} relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl`}>
                                {/* Result Glow Inside Card */}
                                <div className={`absolute inset-0 ${resultStyle.bg} opacity-20 blur-3xl`} />

                                {resultStyle.recommended && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl shadow-lg flex items-center gap-1 z-20">
                                        <BadgeCheck size={16} />
                                        RECOMMENDED
                                    </div>
                                )}

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className={`w-32 h-32 rounded-3xl ${resultStyle.bg} mb-8 flex items-center justify-center shadow-lg border border-white/10`}>
                                        <resultStyle.icon className={resultStyle.text} size={64} />
                                    </div>

                                    <h3 className="text-4xl font-bold mb-2">{resultStyle.name}</h3>
                                    <div className={`text-base font-mono ${resultStyle.text} mb-8 uppercase tracking-wider`}>{resultStyle.role}</div>

                                    {/* Typed Result Message Container with Symmetry */}
                                    <div className="w-full py-8 border-t border-b border-white/10 mb-8 relative">
                                        <div className="text-lg md:text-xl font-light leading-relaxed text-white min-h-[60px]">
                                            <Typewriter
                                                onInit={(typewriter) => {
                                                    typewriter
                                                        .changeDelay(40)
                                                        .typeString(resultStyle.resultMsg)
                                                        .start();
                                                }}
                                                options={{
                                                    cursor: '▋',
                                                    cursorClassName: `typewriter-cursor ${resultStyle.text}`
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleHandshake}
                                        className="w-full py-5 rounded-xl bg-white text-black text-lg font-bold hover:scale-[1.02] transition-transform active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
                                    >
                                        Pave my path with {resultStyle.name} <Sparkles size={18} />
                                    </button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
