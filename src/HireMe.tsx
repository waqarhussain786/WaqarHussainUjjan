import React from 'react';

const HireMe: React.FC = () => {
  return (
    <section id="hire-me" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* The Gradient Card */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-16 shadow-2xl">
          
          {/* Decorative Background Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Text Content */}
            <div className="text-center md:text-left md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Have a project in mind? <br />
                <span className="text-blue-200">Let’s work together.</span>
              </h2>
              <p className="mt-6 text-lg text-blue-100 opacity-90">
                I am currently available for freelance work and full-time positions. 
                If you're looking for a developer who values clean code and great UI, I'm your guy.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                href="#contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-center hover:bg-blue-50 transition-all shadow-lg active:scale-95"
              >
                Hire Me Now
              </a>
              <a 
                href="mailto:waqar@example.com" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-white/10 transition-all active:scale-95"
              >
                Send Email
              </a>
            </div>

          </div>
        </div>

        {/* Optional: Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <p className="text-gray-500 font-medium">Ready to work with:</p>
          <span className="text-xl font-bold">React</span>
          <span className="text-xl font-bold">Node.js</span>
          <span className="text-xl font-bold">TypeScript</span>
          <span className="text-xl font-bold">Next.js</span>
        </div>
      </div>
    </section>
  );
};

export default HireMe;