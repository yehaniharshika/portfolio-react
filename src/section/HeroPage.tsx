import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import profileImage from "../assets/Student-photo.png";

/* ===================== EDIT THESE ===================== */
const NAME = "Yehani Harshika";
const RESUME_URL = "/Yehani-Harshika-Resume.pdf"; // put your PDF in the project's /public folder
/* ====================================================== */

const heroCss = `
@keyframes hp-up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
@keyframes hp-pop { from { opacity: 0; transform: translateY(40px) scale(.96); } to { opacity: 1; transform: none; } }
@keyframes hp-glow { 0%, 100% { opacity: .65; } 50% { opacity: 1; } }
@keyframes hp-spin { to { transform: rotate(360deg); } }
.hp-up { animation: hp-up .8s cubic-bezier(.16, 1, .3, 1) both; }
.hp-pop { animation: hp-pop 1.1s cubic-bezier(.16, 1, .3, 1) .2s both; }
.hp-glow { animation: hp-glow 5s ease-in-out infinite; }
.hp-spin { animation: hp-spin 8s linear infinite; }
.hp-spin-slow { animation: hp-spin 40s linear infinite; }
@media (prefers-reduced-motion: reduce) {
  .hp-up, .hp-pop, .hp-glow, .hp-spin, .hp-spin-slow { animation: none; }
}
`;

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/* ---------- Background: faint network lines (canvas 2D) ---------- */

type Node = { x: number; y: number; vx: number; vy: number };

const NetworkBackground = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const LINK = 140;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let nodes: Node[] = [];

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(60, (w * h) / 20000));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      if (!reduced) {
        for (const p of nodes) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(0,206,201,${0.16 * (1 - d / LINK)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(0,206,201,0.55)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (visible) render();
    };

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), {
      threshold: 0.05,
    });
    io.observe(canvas);
    window.addEventListener("resize", resize);
    resize();
    if (reduced) render();
    else loop();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};

/* ---------- Hero photo: round photo inside a glowing ring ---------- */
/*
  The photo is square (400 x 400), and the circle is a square frame with
  rounded-full, so the whole photo sits exactly in the middle of the circle.
  The size is capped at 400px (the photo's real size) so it never gets blurry.
  If you later use a bigger photo, you can raise the widths below.
*/
const ringGradient =
  "conic-gradient(from 0deg, #00cec9, #1d8fe1, #2e3fd9, #1d8fe1, #00cec9)";

const HeroPhoto = () => (
  <div className="hp-pop relative m-10 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:m-14 md:h-[320px] md:w-[320px] lg:h-[380px] lg:w-[380px] xl:h-[400px] xl:w-[400px]">
    {/* soft glow behind everything */}
    <div className="hp-glow absolute -inset-8 rounded-full bg-[#00cec9]/25 blur-3xl" />

    {/* outer thin ring + slowly turning dashed ring with one dot */}
    <div className="absolute -inset-[34px] rounded-full border border-[#00cec9]/25" />
    <div className="hp-spin-slow absolute -inset-[56px] rounded-full border border-dashed border-[#00cec9]/25">
      <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00cec9] shadow-[0_0_14px_#00cec9]" />
    </div>

    {/* turning gradient ring, with a small dark gap before the photo */}
    <div
      className="hp-spin absolute -inset-[14px] rounded-full"
      style={{ background: ringGradient }}
    />
    <div className="absolute -inset-[8px] rounded-full bg-[#07091f]" />

    {/* the photo, exactly centred in the circle */}
    <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0e2a4a] shadow-[0_0_50px_rgba(0,206,201,0.30)]">
      <img
        src={profileImage}
        alt={NAME}
        draggable={false}
        decoding="async"
        className="h-full w-full select-none object-cover object-center"
      />
    </div>
  </div>
);

/* ---------- Small helpers ---------- */

const Tech = ({ children }: { children: ReactNode }) => (
  <span className="font-semibold text-[#00cec9]">{children}</span>
);

/* ---------- Page ---------- */

export default function HeroPage() {
  const font = { fontFamily: "Montserrat, sans-serif" };

  return (
    <>
      <style>{heroCss}</style>

      <section
        id="home"
        className="relative w-full overflow-hidden bg-[#07091f] pb-16 pt-24 text-white"
      >
        {/* Static soft glows (one accent colour) */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#00cec9]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-[130px]" />

        {/* Faint network lines */}
        <NetworkBackground />

        <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] flex-col items-center gap-10 px-4 md:flex-row md:items-center md:gap-6 md:px-6 lg:px-1">
          {/* Text */}
          <div className="flex w-full flex-col justify-center text-center md:w-1/2 md:text-left">
            <h1
              className="hp-up text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl xl:text-6xl"
              style={{ ...font, animationDelay: "0.1s" }}
            >
              Building Modern &amp; Scalable{" "}
              <span className="text-[#00cec9]">Full Stack Web Applications</span>
            </h1>

            <p
              className="hp-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:mx-0 lg:text-lg"
              style={{ ...font, fontWeight: 500, animationDelay: "0.25s" }}
            >
              Frontend-focused Software Engineer graduate with good expertise in{" "}
              <Tech>React</Tech>, <Tech>Next.js</Tech>, <Tech>Tailwind CSS</Tech>,{" "}
              <Tech>TypeScript</Tech>, <Tech>Node.js</Tech>, <Tech>Spring Boot</Tech>{" "}
              and <Tech>MySQL</Tech>, with strong experience in the{" "}
              <Tech>MERN stack</Tech>. I specialize in building user-friendly
              interfaces, creating responsive designs and developing reliable
              APIs.
            </p>

            <div
              className="hp-up mt-8 flex flex-row flex-wrap items-center justify-center gap-4 md:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => scrollToId("contact")}
                className="min-w-[140px] cursor-pointer whitespace-nowrap rounded-lg bg-[#00cec9] px-7 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00cec9]/40 md:text-base"
                style={font}
              >
                Contact Me
              </button>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[140px] cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border-2 border-[#00cec9] px-7 py-3 text-sm font-semibold text-[#00cec9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00cec9]/10 md:text-base"
                style={font}
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex w-full items-center justify-center md:w-1/2 md:justify-end">
            <HeroPhoto />
          </div>
        </div>
      </section>
    </>
  );
}