import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: Illustration or Info Card */}
          <div className="md:w-1/2">
            <div className="relative p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a passionate <span className="font-semibold text-gray-900">Full Stack Developer</span> based in Pakistan. 
                My goal is to build digital products that are not only functional but also provide a seamless user experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I enjoy solving complex problems and turning them into simple, beautiful designs. When I'm not coding, I'm usually exploring new technologies or improving my design skills.
              </p>
              
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <span className="block text-blue-600 font-bold text-xl">2+</span>
                  <span className="text-sm text-gray-500">Years Experience</span>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <span className="block text-blue-600 font-bold text-xl">50+</span>
                  <span className="text-sm text-gray-500">Projects Done</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Skills Progress Bars */}
          <div className="md:w-1/2 w-full space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Skills</h3>
            
            <SkillBar skill="React / TypeScript" percentage="90%" />
            <SkillBar skill="Tailwind CSS" percentage="95%" />
            <SkillBar skill="Node.js" percentage="80%" />
            <SkillBar skill="MongoDB / SQL" percentage="75%" />
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-component for Skill Bars
const SkillBar = ({ skill, percentage }: { skill: string; percentage: string }) => (
  <div className="w-full">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 font-medium">{skill}</span>
      <span className="text-blue-600 font-semibold">{percentage}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" 
        style={{ width: percentage }}
      ></div>
    </div>
  </div>
);

export default About;
// const SkillBar = ({ skill, percentage }: { skill: string; percentage: string }) => (
//   <div className="w-full">
//     <div className="flex justify-between mb-1">
//       <span className="text-gray-700 font-medium">{skill}</span>
//       <span className="text-blue-600 font-semibold">{percentage}</span>
//     </div>
//     <div className="w-full bg-gray-200 rounded-full h-2.5">
//       <div 
//         className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" 
//         style={{ width: percentage }}
//       ></div>
//     </div>
//   </div>
// );

// export default About;