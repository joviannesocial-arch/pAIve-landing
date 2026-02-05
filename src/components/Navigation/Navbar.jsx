import { GradientButton } from '../UI/GradientButton';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoIcon from '../../assets/logo-icon.png';
import logoText from '../../assets/logo-text.png';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Track active section for Home page
            if (location.pathname === '/') {
                const sections = ['why-paive', 'how-it-works', 'faq'];
                let current = '';

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        // If top is within 150px of viewport top, or bottom is still visible
                        if (rect.top <= 150 && rect.bottom >= 150) {
                            current = section;
                        }
                    }
                }
                setActiveSection(current);
            } else {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount to set initial active state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const scrollToSection = (id) => {
        setMobileMenuOpen(false);

        if (location.pathname !== '/') {
            navigate(`/#${id}`);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Why pAIve', id: 'why-paive', type: 'scroll' },
        { name: 'How It Works', id: 'how-it-works', type: 'scroll' },
        { name: 'Security', path: '/security', type: 'route' },
        { name: 'Take a Coaching Style Quiz', path: '/quiz', type: 'route' },
        { name: 'FAQ', id: 'faq', type: 'scroll' },
    ];

    const getLinkClasses = (isActive, isMobile = false) => {
        const fontSizeClass = isMobile ? "text-xl" : "text-sm";
        const baseClasses = `${fontSizeClass} font-medium transition-colors hover:text-white`;
        const activeClasses = "text-white drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]";
        return `${baseClasses} ${isActive ? activeClasses : 'text-gray-400'}`;
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-space-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                    <Link to="/" className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        {/* Adjusted vertical alignment: mt-1 to center better */}
                        <img src={logoIcon} alt="pAIve Logo" className="w-40 h-40 object-contain mt-1 shrink-0" />
                        {/* Massive Text: h-64 (256px) - tighted gap slightly less with -ml-28 */}
                        <img src={logoText} alt="pAIve" className="h-64 object-contain -ml-28 shrink-0" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex h-full items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = link.type === 'route'
                                ? location.pathname === link.path
                                : activeSection === link.id && location.pathname === '/';

                            return link.type === 'route' ? (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={getLinkClasses(isActive)}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className={getLinkClasses(isActive)}
                                >
                                    {link.name}
                                </button>
                            );
                        })}
                    </div>

                    <div className="hidden md:flex h-full items-center">
                        <GradientButton className="py-2 px-6 text-sm" onClick={() => scrollToSection('waitlist-section')}>
                            Join Community
                        </GradientButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-space-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                link.type === 'route' ? (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-xl font-medium text-gray-300 hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <button
                                        key={link.name}
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-xl font-medium text-gray-300 hover:text-white"
                                    >
                                        {link.name}
                                    </button>
                                )
                            ))}
                            <div className="mt-4">
                                <GradientButton className="w-full py-3" onClick={() => {
                                    scrollToSection('waitlist-section');
                                    setMobileMenuOpen(false);
                                }}>Join Community</GradientButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
