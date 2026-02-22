import React from 'react';

const Home: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gray-50 overflow-hidden">
            {/* Added justify-between and larger gaps */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-24">

                {/* Left Side: Text Content */}
                <div className="md:w-1/2 text-center md:text-left space-y-8 z-10">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                            Hi, I'm <span className="text-blue-600">Waqar Hussain</span><br />
                            <span className="text-slate-700">A Full Stack Developer</span>
                        </h1>
                    </div>
                    
                    <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        I build high-performance, responsive web applications using React, TypeScript, and Tailwind CSS. Let's turn your ideas into reality.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5 pt-4">
                        <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95">
                            View My Work
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all active:scale-95">
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Right Side: Image/Graphic */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center">
                        {/* Decorative background blobs with increased blur for depth */}
                        <div className="absolute inset-0 bg-blue-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-60 animate-blob"></div>
                        <div className="absolute inset-0 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-60 animate-blob animation-delay-2000"></div>

                        {/* Centered Rotating Logo */}
                        <img
                            src="src/assets/react.svg"
                            alt="React Logo"
                            className="w-56 h-56 md:w-80 md:h-80 object-contain animate-[spin_40s_linear_infinite] z-10 drop-shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;