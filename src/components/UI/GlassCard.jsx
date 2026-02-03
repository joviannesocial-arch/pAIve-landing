import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const GlassCard = ({ children, className, ...props }) => {
    return (
        <div
            className={twMerge(
                "glass-panel rounded-2xl p-6 bg-white/5",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
