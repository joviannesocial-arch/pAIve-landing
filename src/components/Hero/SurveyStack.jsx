import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';

/**
 * SurveyStack Component
 * 
 * Manages the 5-question progressive profiling sequence.
 * Metaphor: "Calibration" - tuning the AI frequency to the user before they enter.
 * Includes "Something else..." slide-down logic.
 * 
 * @param {Object} props
 * @param {Array} props.questions - Array of question objects
 * @param {number} props.step - Current question index
 * @param {Object} props.userData - Unified state object
 * @param {Function} props.setUserData - State setter
 * @param {Function} props.onNext - Handler for next/complete
 * @param {Function} props.onBack - Handler for back navigation
 */
export const SurveyStack = ({ questions, step, userData, setUserData, onNext, onBack }) => {
    const currentQuestion = questions[step];

    // Data Access Helpers
    const currentResponse = userData.responses[currentQuestion.id] || { selection: '', customText: '' };
    const currentSelection = currentResponse.selection;
    const isCustom = currentSelection === "Something else...";
    const currentCustomText = currentResponse.customText;

    const handleAnswerSelect = (option) => {
        setUserData(prev => ({
            ...prev,
            responses: {
                ...prev.responses,
                [currentQuestion.id]: {
                    ...prev.responses[currentQuestion.id],
                    selection: option,
                    customText: prev.responses[currentQuestion.id]?.customText || ''
                }
            }
        }));
    };

    const handleCustomInputChange = (e) => {
        const text = e.target.value;
        setUserData(prev => ({
            ...prev,
            responses: {
                ...prev.responses,
                [currentQuestion.id]: {
                    ...prev.responses[currentQuestion.id],
                    customText: text
                }
            }
        }));
    };

    return (
        <div className="space-y-6 w-full relative">
            <div className={`flex items-center justify-between text-xs text-gray-500 font-mono mb-2 ${step > 0 ? 'mt-8' : ''}`}>
                {step > 0 && (
                    <button
                        onClick={onBack}
                        className="absolute top-0 left-0 flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                    </button>
                )}
                <span className="ml-auto">QUESTION {step + 1} OF {questions.length}</span>
                <span className="text-brand-indigo ml-4">{Math.round(((step) / questions.length) * 100)}% COMPLETE</span>
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <h4 className="text-lg text-white font-medium mb-4 text-left">
                        {currentQuestion.question}
                    </h4>

                    <div className="space-y-3">
                        {currentQuestion.options.map((option, idx) => (
                            <motion.button
                                key={option}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + (idx * 0.05) }}
                                onClick={() => handleAnswerSelect(option)}
                                className={`w-full text-left px-5 py-3 rounded-lg border transition-all duration-200 text-sm font-medium ${currentSelection === option
                                    ? 'bg-brand-indigo/20 border-brand-indigo text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-gray-200'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{option}</span>
                                    {currentSelection === option && <Check className="w-4 h-4 text-brand-indigo" />}
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Custom Input Slide-Down */}
                    <AnimatePresence>
                        {(isCustom) && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                className="overflow-hidden"
                            >
                                <textarea
                                    value={currentCustomText}
                                    onChange={handleCustomInputChange}
                                    placeholder="Tell us more..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-brand-indigo resize-none h-24"
                                    autoFocus
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Next Button - Only appears after selection */}
                    {currentSelection && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 text-right"
                        >
                            <button
                                onClick={onNext}
                                disabled={isCustom && !currentCustomText.trim()}
                                className="bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-bold py-2 px-6 rounded-lg transition-colors shadow-lg flex items-center gap-2 ml-auto"
                            >
                                {step === questions.length - 1 ? 'Complete Profile' : 'Next'}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
