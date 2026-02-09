import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-shell py-10" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="section-surface px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--textColorLight)]">
            Built by{" "}
            <a
              href="https://darshilthummar.vercel.app"
              title="Darshil Thummar - Full Stack Developer Portfolio"
              className="text-[var(--primaryColor)] hover:underline"
            >
              Darshil Thummar
            </a>
            . Full stack developer focused on modern web products.
          </p>

          <nav>
            <ul className="flex gap-5 text-sm text-[var(--textColorLight)]">
              <li>
                <a
                  href="https://github.com/darshilthummar09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Darshil Thummar GitHub"
                  className="hover:text-[var(--primaryColor)]"
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
                  className="hover:text-[var(--primaryColor)]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/Darshil Thummar.pdf"
                  download
                  title="Download Darshil Thummar Resume"
                  className="hover:text-[var(--primaryColor)]"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="text-center text-xs text-[var(--textColorLight)] mt-6">
          Copyright {currentYear} Darshil Thummar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
