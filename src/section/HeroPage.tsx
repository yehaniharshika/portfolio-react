import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import profileImage from '../assets/photo.jpg';

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // White stars
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 800;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    starsGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Cyan particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x00cec9,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
};

const ProfileImageWithEffects = () => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96" style={{ marginTop: '30px' }}>
      {/* Pulsing glow rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="absolute w-full h-full rounded-full border-2 border-[#00cec9] opacity-20 animate-pulse"
          style={{ 
            animationDuration: '3s',
            boxShadow: '0 0 30px rgba(0, 206, 201, 0.3)'
          }}
        />
      </div>
      
      {/* Profile Image Container */}
      <motion.div 
        className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group"
        style={{
          border: '4px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 10px 40px rgba(0, 206, 201, 0.3)'
        }}
        whileHover={{ 
          scale: 1.05,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Profile Image */}
        <motion.img
          src={profileImage}
          alt="Yehani Harshika"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

const TypingAnimation = () => {
  const titles = [
    'Full Stack Developer',
    'Web Developer'
  ];
  
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      const fullText = titles[currentIndex];

      if (!isDeleting) {
        if (charIndex < fullText.length) {
          setCurrentTitle(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setCurrentTitle(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex, titles]);

  return (
    <span className="inline-block relative">
      {currentTitle}
      <span className="inline-block w-0.5 h-8 bg-[#00cec9] ml-1 animate-blink align-middle"></span>
    </span>
  );
};

export const HeroPage = () => {
  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
      
      <section
        id="home"
        className="relative w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-20 pb-20 md:pt-24 md:pb-36 overflow-hidden"
      >
        {/* Starfield Background */}
        <StarfieldBackground />

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
                className="text-[26px] md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mt-10 block"
                style={{ fontFamily: 'Montserrat, sans-serif', minHeight: '3rem' }}
              >
                <TypingAnimation />
              </span>
            </h1>

            <p
              className="mt-7 text-[16px] sm:text-base text-gray-600 dark:text-gray-300"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: "500",
                maxWidth: "700px",
                backgroundColor: "transparent"
              }}
            >
              A passionate Software Engineer and Full-Stack Developer dedicated to designing intuitive,
              high-performing, and visually engaging digital solutions.
            </p>

            <motion.div
              className="mt-6 flex flex-row gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ marginTop: "60px" }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="px-4 sm:px-6 py-2 sm:py-3 text-white font-medium rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors text-[14px] sm:text-base"
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
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-800 text-[#00cec9] dark:text-[#00cec9] font-medium rounded-lg border border-[#00cec9] dark:border-[#00cec9] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-[14px] sm:text-base"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "600", cursor: "pointer" }}
              >
                Download Resume
              </motion.button>
            </motion.div>

          </motion.div>

          <ProfileImageWithEffects />
        </div>
      </section>
    </>
  );
};