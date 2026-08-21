import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--background)] py-12 border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <a
              href="https://darshilthummar.vercel.app"
              title="Darshil Thummar"
              className="font-display text-2xl font-bold text-white tracking-tight hover:text-[var(--primaryColor)] transition-colors"
            >
              Darshil Thummar
            </a>
            <p className="text-sm text-[var(--textColorLight)] font-mono uppercase tracking-wider mt-2">
              Full Stack Developer
            </p>
          </div>

          <nav>
            <ul className="flex gap-8 text-sm text-white/70 font-mono uppercase tracking-widest">
              <li>
                <a
                  href="https://github.com/darshilthummar09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Darshil Thummar GitHub"
                  className="hover:text-[var(--primaryColor)] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/darshil-thummar-50bb8b216"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Darshil Thummar LinkedIn"
                  className="hover:text-[var(--primaryColor)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/Darshil-Thummar-Resume.pdf"
                  download
                  title="Download Darshil Thummar Resume"
                  className="hover:text-[var(--primaryColor)] transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full h-[1px] bg-white/5 my-8" />

        <div className="flex justify-center">
          <p className="text-xs text-[var(--textColorLight)] font-mono tracking-widest uppercase">
            &copy; {currentYear} DARSHIL THUMMAR. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
