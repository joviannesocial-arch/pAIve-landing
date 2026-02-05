import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-400 text-sm border-t border-white/5 bg-space-black/80 backdrop-blur-md relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>&copy; 2026 pAIve Inc. All rights reserved.</div>
                <div className="flex gap-6">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                    <Link to="/security" className="hover:text-white transition-colors">Security</Link>
                    <a href="https://x.com/paiveapp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    );
};
