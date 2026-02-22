import React from 'react';

const Home: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                {/* Left Side: Text Content */}
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h2 className="text-blue-600 font-semibold tracking-wide uppercase">
                        Welcome to my world
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Hi, I'm <span className="text-blue-600">Waqar Hussain</span><br />
                        A Full Stack Developer
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                        I build high-performance, responsive web applications using React, TypeScript, and Tailwind CSS. Let's turn your ideas into reality.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                            View My Work
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Right Side: Image/Graphic */}
                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Decorative background circle */}
                        <div className="absolute inset-0 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute inset-0 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                        {/* Placeholder for your Image */}
                        <img
                            src="src/assets/react.svg"
                            alt="React Logo"
                            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-[spin_40s_linear_infinite] z-10"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;