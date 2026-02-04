import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, BadgeCheck } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { GlassCard } from '../components/UI/GlassCard';
import { styles as coachingStyles } from '../components/Sections/AvatarProfiles';

const questions = [
    {
        id: 1,
        text: "When you face a big career decision, what is your first instinct?",
        options: [
            { text: "Look for data & market trends", type: "The Analyst" },
            { text: "Imagine the creative 'What ifs'", type: "The Creative" },
            { text: "Seek fast wins & momentum", type: "The Commander" },
            { text: "Reflect on long-term purpose", type: "The Sage" }
        ]
    },
    {
        id: 2,
        text: "It’s 2:00 AM and you’re stressed about your career. What does that feel like?",
        options: [
            { text: "Anxiety from lack of information", type: "The Analyst" },
            { text: "Imposter Syndrome & self-doubt", type: "The Creative" },
            { text: "Frustration about wasting time", type: "The Commander" },
            { text: "Fear of meaningless work", type: "The Sage" }
        ]
    },
    {
        id: 3,
        text: "When your progress stalls, how do you want the feedback delivered?",
        options: [
            { text: "The 'Cold Mirror' (Raw Gaps)", type: "The Analyst" },
            { text: "The 'Map' (Creative Pivots)", type: "The Creative" },
            { text: "The 'Audit' (Strategic Errors)", type: "The Commander" },
            { text: "The 'Reflection' (Gentle Growth)", type: "The Sage" }
        ]
    },
    {
        id: 4,
        text: "If your current approach isn't landing interviews, what's the first fix?",
        options: [
            { text: "Re-analyse the data and CV", type: "The Analyst" },
            { text: "Brainstorm a unique 'hook'", type: "The Creative" },
            { text: "Increase the volume of apps", type: "The Commander" },
            { text: "Re-evaluate the 'Why'", type: "The Sage" }
        ]
    },
    {
        id: 5,
        text: "A dream company has a 'tough' reputation. What is your instinct?",
        options: [
            { text: "Study their balance sheets", type: "The Analyst" },
            { text: "Pitch them a new vision", type: "The Creative" },
            { text: "Prepare for a high-stakes battle", type: "The Commander" },
            { text: "Check if their values match mine", type: "The Sage" }
        ]
    },
    {
        id: 6,
        text: "In a high-pressure interview, what is your secret weapon?",
        options: [
            { text: "Methodical preparation", type: "The Analyst" },
            { text: "Quick-witted storytelling", type: "The Creative" },
            { text: "Natural dominance/authority", type: "The Commander" },
            { text: "Calm, grounded presence", type: "The Sage" }
        ]
    },
    {
        id: 7,
        text: "When looking at a job description, what catches your eye first?",
        options: [
            { text: "Tech stack & Requirements", type: "The Analyst" },
            { text: "Innovative project potential", type: "The Creative" },
            { text: "Rapid promotion tracks", type: "The Commander" },
            { text: "Long-term cultural impact", type: "The Sage" }
        ]
    },
    {
        id: 8,
        text: "It's 2 AM and you're stressed. How do you find clarity?",
        options: [
            { text: "I build a logic spreadsheet", type: "The Analyst" },
            { text: "I write out new possibilities", type: "The Creative" },
            { text: "I plan the next morning's 'wins'", type: "The Commander" },
            { text: "I meditate on my purpose", type: "The Sage" }
        ]
    },
    {
        id: 9,
        text: "How do you prefer to view your career path?",
        options: [
            { text: "As a technical roadmap", type: "The Analyst" },
            { text: "As a serie of chapters", type: "The Creative" },
            { text: "As a game to be won", type: "The Commander" },
            { text: "As a search for Ikigai", type: "The Sage" }
        ]
    },
    {
        id: 10,
        text: "What does 'Professional Success' actually look like to you?",
        options: [
            { text: "Becoming a Subject Matter Expert", type: "The Analyst" },
            { text: "Inventing something new", type: "The Creative" },
            { text: "Reaching the top of the ladder", type: "The Commander" },
            { text: "Helping a community grow", type: "The Sage" }
        ]
    },
    {
        id: 11,
        text: "When a market trend shifts suddenly, what do you do?",
        options: [
            { text: "Gather all the new facts", type: "The Analyst" },
            { text: "See it as a creative opportunity", type: "The Creative" },
            { text: "Move faster to beat the trend", type: "The Commander" },
            { text: "Wait for the signal to clear", type: "The Sage" }
        ]
    },
    {
        id: 12,
        text: "How do you handle 'Imposter Syndrome'?",
        options: [
            { text: "I look at my proven certificates", type: "The Analyst" },
            { text: "I remind myself I am a creator", type: "The Creative" },
            { text: "I 'fake it' until I win", type: "The Commander" },
            { text: "I accept it as part of the path", type: "The Sage" }
        ]
    },
    {
        id: 13,
        text: "What is the most important part of a new role?",
        options: [
            { text: "The technical challenge", type: "The Analyst" },
            { text: "The freedom to explore", type: "The Creative" },
            { text: "The salary and growth speed", type: "The Commander" },
            { text: "The sense of belonging", type: "The Sage" }
        ]
    },
    {
        id: 14,
        text: "If you were to write a book about your career, what would it be?",
        options: [
            { text: "A technical manual", type: "The Analyst" },
            { text: "A visionary manifesto", type: "The Creative" },
            { text: "A guide to leadership", type: "The Commander" },
            { text: "A philosophical journal", type: "The Sage" }
        ]
    },
    {
        id: 15,
        text: "In one word, what should your AI partner provide?",
        options: [
            { text: "Precision", type: "The Analyst" },
            { text: "Inspiration", type: "The Creative" },
            { text: "Velocity", type: "The Commander" },
            { text: "Wisdom", type: "The Sage" }
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
