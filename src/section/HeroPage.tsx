import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import profileImage from "../assets/photo.jpg";

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

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
      "position",
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
      "position",
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

    interface MouseMoveHandler {
      (e: MouseEvent): void;
    }

    const handleMouseMove: MouseMoveHandler = (e: MouseEvent): void => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

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
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
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
    <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 mt-8 md:mt-0">
      {/* Pulsing glow rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute w-full h-full rounded-full border-2 border-[#00cec9] opacity-20 animate-pulse"
          style={{
            animationDuration: "3s",
            boxShadow: "0 0 30px rgba(0, 206, 201, 0.3)",
          }}
        />
      </div>

      {/* Profile Image Container */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group"
        style={{
          border: "4px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 10px 40px rgba(0, 206, 201, 0.3)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Profile Image */}
        <img
          className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center"
          src={profileImage}
          alt="Yehani Harshika"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

const TypingAnimation = () => {
  const titles = ["Full Stack Developer", "Web Developer"];

  const [currentTitle, setCurrentTitle] = useState("");
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
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <span className="inline-block relative">
      {currentTitle}
      <span className="inline-block w-0.5 h-8 bg-[#00cec9] ml-1 animate-blink align-middle"></span>
    </span>
  );
};

export default function HeroPage() {
  useEffect(() => {
    // @ts-ignore
    if (typeof AOS !== "undefined") {
      // @ts-ignore
      AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        easing: "ease-in-out",
      });
    }
  }, []);

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
        className="relative w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-20 pb-20 md:pb-24 lg:pb-50 overflow-hidden"
      >
        {/* Starfield Background */}
        <StarfieldBackground />

        <div className="container mx-auto px-4 md:px-6 lg:px-1 pt-8 md:pt-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 lg:gap-12 relative z-10">
          {/* Text Content */}
          <div className="w-full  text-center md:text-left">
            <h1 className="text-xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              <span
                className="text-lg md:text-2xl lg:text-4xl block mb-2"
                data-aos="fade-right"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                👋 Hi, I'm
              </span>

              <span
                className="text-5xl md:text-5xl lg:text-7xl block my-3"
                data-aos="fade-right"
                style={{
                  fontFamily: "'Lilita One', sans-serif",
                  color: "#00cec9",
                }}
              >
                Yehani Harshika
              </span>

              <span
                className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 block mt-4"
                data-aos="fade-right"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  minHeight: "3rem",
                }}
              >
                <TypingAnimation />
              </span>
            </h1>

            <p
              className="mt-6 md:mt-7 text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
                backgroundColor: "transparent",
              }}
              data-aos="fade-right"
            >
              A passionate Software Engineer and Full-Stack Developer dedicated
              to designing intuitive, high-performing, and visually engaging
              digital solutions.
            </p>

            <div className="mt-8 md:mt-10 lg:mt-12 flex flex-row flex-wrap gap-4 justify-center md:justify-start items-center" data-aos="fade-right">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 md:px-8 py-3 bg-[#00cec9] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all text-sm md:text-base whitespace-nowrap min-w-[140px]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Contact Me
              </button>
              <button
                className="px-6 md:px-8 py-3 bg-white dark:bg-gray-800 text-[#00cec9] font-semibold rounded-lg border-2 border-[#00cec9] hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-sm md:text-base whitespace-nowrap min-w-[140px]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end" data-aos="fade-left">
            <ProfileImageWithEffects />
          </div>
        </div>
      </section>
    </>
  );
}
