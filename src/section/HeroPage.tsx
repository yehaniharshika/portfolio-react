import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/photo.jpg';

const ParticleGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 180;
    let rotation = 0;

    // Generate particles on sphere
    const particles: { phi: number; theta: number; size: number; }[] = [];
    const numParticles = 1000;
    
    for (let i = 0; i < numParticles; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      
      particles.push({
        phi,
        theta,
        size: Math.random() * 1.2 + 0.4
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotation += 0.003;

      particles.forEach(particle => {
        const rotatedTheta = particle.theta + rotation;
        const x = radius * Math.sin(particle.phi) * Math.cos(rotatedTheta);
        const y = radius * Math.sin(particle.phi) * Math.sin(rotatedTheta);
        const z = radius * Math.cos(particle.phi);

        const scale = 300 / (300 + z);
        const x2d = centerX + x * scale;
        const y2d = centerY + y * scale;

        const opacity = (z + radius) / (2 * radius);

        ctx.beginPath();
        ctx.arc(x2d, y2d, particle.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 206, 201, ${opacity * 0.6})`;
        ctx.fill();
      });

      // Draw glowing rings
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 206, 201, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 10, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 206, 201, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className="absolute opacity-40 pointer-events-none"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export const HeroPage = () => {

  return (
    <section
      id="home"
      className="relative w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-24 pb-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 pt-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            <span
              className="text-lg md:text-3xl lg:text-4xl"
              style={{ fontSize: "20px", fontFamily: 'Montserrat, sans-serif' }}
            >
              👋 Hi, I'm
            </span>
            <br />
            <motion.span
              className="text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Lilita One', sans-serif", color: "#00cec9" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              Yehani Harshika
            </motion.span>
            <br />
            <span
              className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mt-10 typing-animation"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Full Stack Developer
            </span>
          </h1>

          <p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: "18px",
              fontWeight: "500",
              maxWidth: "700px",
              backgroundColor: "transparent"
            }}
          >
            A passionate Software Engineer and Full-Stack Developer dedicated to designing intuitive,
            high-performing, and visually engaging digital solutions.
          </p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ marginTop: "80px" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-6 py-3 text-white font-medium rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: "#00cec9",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Contact Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white dark:bg-gray-800 text-[#00cec9] dark:text-[#00cec9] font-medium rounded-lg border border-[#00cec9] dark:border-[#00cec9] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "600", cursor: "pointer" }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

         <div
           className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl transition-all duration-300 hover:border-[#00cec9]"
           style={{ marginTop: "30px" }}
         >
           {/* Dark Overlay */}
           <div className="absolute inset-0 bg-black opacity-50"></div>

           <motion.img
             src={profileImage}
             alt="Your Name"
             className="w-full h-full object-cover relative z-20"
             whileHover={{ scale: 1.1 }}
             transition={{ duration: 0.3 }}
           />
         </div>
      </div>
    </section>
  );
};