import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1300);
        return () => clearTimeout(timer);
    }, []);

    const loaderVariants: Variants = {
        exit: {
            y: "-100%",
            transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 }
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        variants={loaderVariants}
                        exit="exit"
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-900 text-white"
                    >
                        <div className="relative flex flex-col items-center">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xl font-light tracking-[0.4em] uppercase mb-8"
                            >
                                Waqar Hussain Ujjan
                            </motion.span>
                            <div className="h-[2px] w-48 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.3, ease: "easeInOut" }}
                                    className="h-full bg-blue-500"
                                />
                            </div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                className="mt-4 text-xs font-mono"
                            >
                                LOADING...
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isLoading && (
                <motion.section
                    id="home"
                    className="min-h-screen flex items-center justify-center pt-16 bg-gray-50 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* The layout is flex-col by default and only switches to flex-row at 1175px */}
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col min-[1175px]:flex-row items-center justify-between w-full gap-12 min-[1175px]:gap-24">
                        
                        {/* Left Side: Text Content */}
                        <motion.div className="w-full min-[1175px]:w-1/2 text-center min-[1175px]:text-left space-y-8 z-10" variants={itemVariants}>
                            <div className="space-y-4">
                                <motion.h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                                    Hi, I'm <span className="text-blue-600">"Waqar Hussain Ujjan"</span><br />
                                    <span className="text-slate-700">A Full Stack Developer</span>
                                </motion.h1>
                            </div>
                            <motion.p className="text-lg text-gray-600 max-w-lg mx-auto min-[1175px]:mx-0 leading-relaxed">
                                I build high-performance, responsive web applications using React, TypeScript, and Tailwind CSS.
                            </motion.p>
                            <motion.div className="flex flex-col sm:flex-row justify-center min-[1175px]:justify-start gap-5 pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                                >
                                    View My Work
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open('YOUR_DROPBOX_DIRECT_LINK', '_blank')}
                                    className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all"
                                >
                                    Download CV
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Right Side: Animated Logo */}
                        <motion.div className="w-full min-[1175px]:w-1/2 flex justify-center min-[1175px]:justify-end" variants={itemVariants}>
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 min-[1175px]:w-[450px] min-[1175px]:h-[450px] flex items-center justify-center">
                                <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute inset-0 bg-blue-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-60" />
                                <motion.div animate={{ scale: [1.1, 1, 1.1], rotate: [0, -90, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute inset-0 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-60" />
                                <motion.img
                                    src="react.png"
                                    alt="React Logo"
                                    className="w-48 h-48 min-[1175px]:w-80 min-[1175px]:h-80 object-contain z-10 drop-shadow-2xl"
                                    animate={{ y: [0, -20, 0], rotate: 360 }}
                                    transition={{
                                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                        rotate: { duration: 40, repeat: Infinity, ease: "linear" }
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            )}
        </>
    );
};

export default Home;