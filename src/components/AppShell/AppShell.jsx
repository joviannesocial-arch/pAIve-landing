export const AppShell = ({ children }) => {
    return (
        <div className="min-h-screen text-white font-sans selection:bg-brand-purple/30">
            {/* The background is handled in global styles, but we can add specific overlay effects here if needed */}
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    );
};
