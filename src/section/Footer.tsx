import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-12 md:py-20 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
     
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:justify-between gap-10 lg:gap-12 mb-12">
          <div className="text-left">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Innovate with <span style={{ color: "#00cec9" }}>Code</span>
            </h3>
            <p
              className="text-base sm:text-[16px] leading-relaxed mb-6 text-gray-600 dark:text-gray-400 font-medium"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Reach out to me today and let's discuss how I can help you achieve
              your goals. Let's build something that solves real problems
              together!
            </p>
          </div>

          {/* ---- Quick Links (center on lg) ---- */}
          <div className="text-left lg:text-center">
            <h4
              className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Quick Links
            </h4>
            <nav className="space-y-3 font-medium text-base sm:text-[16px]">
              {["Home", "About", "Skills", "Projects", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="block hover:text-[#00cec9] dark:hover:text-[#00cec9] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* ---- Contact & Social (right on lg) ---- */}
          <div className="text-left lg:flex lg:justify-end">
            <div className="w-full lg:w-auto">
              <h4
                className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Get in Touch
              </h4>

              {/* Contact items */}
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:pamunuwayehaniharshika@gmail.com"
                  className="flex items-start gap-3 hover:text-[#00cec9] dark:hover:text-[#00cec9] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="break-all text-base sm:text-[16px]">
                    pamunuwayehaniharshika@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+94764450928"
                  className="flex items-center gap-3 hover:text-[#00cec9] dark:hover:text-[#00cec9] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base sm:text-[16px]">(+94) 76 445 0928</span>
                </a>

                <div
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base sm:text-[16px]">Panadura, Sri Lanka</span>
                </div>
              </div>             
            </div>
          </div>
        </div>

        <div
          className="pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Yehani Pamunuwa. All rights reserved.
          </p>
          <p className="font-medium text-[#00cec9] flex items-center gap-2">
            May the Code be with you <span className="text-yellow-400">🖤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;