import { twMerge } from 'tailwind-merge';

export const StyledInput = ({ className, ...props }) => {
    return (
        <input
            className={twMerge(
                "bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all w-full",
                className
            )}
            {...props}
        />
    );
};
