"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { committees } from '@/data/committees';

const Committee = () => {
  const router = useRouter();

  const handleCommitteeClick = (committeeId: number) => {
    router.push(`/committee/${committeeId}`);
  };

  // Add shine animation styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shine {
        0% {
          transform: translateX(-100%) skewX(-15deg);
        }
        100% {
          transform: translateX(200%) skewX(-15deg);
        }
      }
      .animate-shine {
        animation: shine 2s ease-in-out infinite;
      }
      @keyframes glowPulse {
        0%, 100% { text-shadow: 0 0 0 rgba(234, 179, 8, 0); }
        50% { text-shadow: 0 0 16px rgba(234, 179, 8, 0.35); }
      }
      .glow-pulse {
        animation: glowPulse 3s ease-in-out infinite;
      }
      @keyframes textShine {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      .text-shine {
        background: linear-gradient(90deg, #ffffff, #facc15, #ffffff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        background-size: 200% auto;
        animation: textShine 4s linear infinite;
      }
      @keyframes headingFloat {
        0%, 100% { transform: translateY(0px) rotateX(0deg); }
        50% { transform: translateY(-8px) rotateX(5deg); }
      }
      .heading-float {
        animation: headingFloat 4s ease-in-out infinite;
      }
      @keyframes underlineGrow {
        0% { width: 0%; opacity: 0; }
        50% { width: 100%; opacity: 1; }
        100% { width: 100%; opacity: 1; }
      }
      .underline-grow {
        position: relative;
      }
      .underline-grow::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        background: linear-gradient(90deg, #facc15, #eab308, #facc15);
        border-radius: 2px;
        animation: underlineGrow 2s ease-out forwards;
      }
      @keyframes textGlow {
        0%, 100% { 
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
                       0 0 10px rgba(255, 255, 255, 0.3),
                       0 0 15px rgba(255, 255, 255, 0.1);
        }
        50% { 
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
                       0 0 20px rgba(255, 255, 255, 0.5),
                       0 0 30px rgba(255, 255, 255, 0.3);
        }
      }
      .text-glow {
        animation: textGlow 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Animated background elements - same as homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#EFDB9E]/10 to-[#EFDB9E]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#800301]/10 to-[#EFDB9E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#EFDB9E]/5 to-[#800301]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay - same as homepage */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,219,158,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,219,158,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-8 pb-0 px-4 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
          COMMITTEES
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Our Committees for SRMVMUN&apos;25
        </p>
      </motion.div>

      {/* Committees Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center px-4 relative z-10 mt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
          {committees.map((committee, index) => (
            <motion.div
              key={committee.id}
              variants={itemVariants}
              animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: index * 0.25 }}
              className="group cursor-pointer text-center transition-transform duration-300 hover:scale-105"
              onClick={() => handleCommitteeClick(committee.id)}
            >
              {/* Image */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-4 overflow-hidden rounded-full bg-black border-2 border-yellow-600 flex items-center justify-center">
                {/* Shining Effect (continuous) */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-yellow-300/25 to-transparent opacity-40 animate-shine pointer-events-none"></div>
                
                <div className="w-40 h-40 md:w-48 md:h-48 relative z-10">
                  <Image
                    src={committee.img}
                    alt={committee.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
              </div>
              
              {/* Name */}
              <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
                {committee.name}
              </h3>
            </motion.div>
          ))}
        </div>
        
        {/* Click for more information text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
           
        </motion.div>
      </motion.div>

      {/* Floating sparkle elements - same as homepage */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#EFDB9E' }}></div>
      <div className="absolute top-3/4 right-10 w-3 h-3 rounded-full animate-ping delay-1000" style={{ backgroundColor: '#EFDB9E' }}></div>
      <div className="absolute bottom-1/4 left-20 w-1 h-1 rounded-full animate-ping delay-2000" style={{ backgroundColor: '#EFDB9E' }}></div>

     
    </div>
  );
};

export default Committee;