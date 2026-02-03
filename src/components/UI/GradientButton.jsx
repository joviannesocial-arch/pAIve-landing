import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const GradientButton = ({ children, className, onClick, ...props }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(
                "btn-gradient text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center justify-center gap-2",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};
