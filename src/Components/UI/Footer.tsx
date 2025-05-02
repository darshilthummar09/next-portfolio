import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-center md:text-left text-sm text-gray-400">
            <p>
              Built by{" "}
              <a
                href="https://darshilthummar.vercel.app"
                title="Darshil Thummar - Full Stack MERN Developer Portfolio"
                className="text-blue-400 hover:underline"
              >
                Darshil Thummar
              </a>
              , MERN Stack Developer specializing in React, Node.js, and TypeScript.
            </p>
          </div>

          <nav className="mt-4 md:mt-0">
            <ul className="flex gap-4 text-sm text-gray-300">
              <li>
                <a href="https://github.com/darshilthummar09" target="_blank" rel="noopener noreferrer" aria-label="Darshil Thummar GitHub" className="hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/darshil-thummar-50bb8b216" target="_blank" rel="noopener noreferrer" aria-label="Darshil Thummar LinkedIn" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/Darshil Thummar.pdf" download title="Download Darshil Thummar Resume" className="hover:text-white">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500">
          <p>&copy; {currentYear} Darshil Thummar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
