import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/UI/Header";
import ScrollToTop from "@/Components/common/ScrollToTop";
import { navMenus } from "../data/navItems";
import Footer from "@/Components/UI/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Darshil Thummar | Full Stack Developer | MERN Stack Expert',
  description:
    'Discover the innovative portfolio of Darshil Thummar, a seasoned Full Stack Developer proficient in the MERN stack. Explore cutting-edge web applications, JavaScript expertise, and scalable digital solutions. Learn about his projects, skills, and professional journey in modern web development.',
  keywords: [
    "Darshil Thummar", "Darshil", "darshil", "thummardarshil", "Thummar Darshil", "Thummar",
    "Full Stack Developer", "Full Stack JavaScript Developer", "Full Stack Web Engineer",
    "MERN Stack Developer", "MERN Stack Expert", "MERN Stack Projects", "MERN Developer Portfolio",
    "React Developer", "React.js Developer", "React and Node.js Developer", "React and Redux Developer",
    "Node.js Developer", "Node.js Expert", "MongoDB Developer", "Express.js Developer",
    "TypeScript Developer", "Next.js Developer Portfolio", "Frontend Developer", "Frontend Development",
    "Backend Developer", "Backend Development", "JavaScript Developer", "JavaScript Expert",
    "JavaScript Frameworks Expert", "Responsive Web Design", "Clean Code Developer", "UI/UX Focused Developer",
    "Web Developer", "Web Application Developer", "Performance Optimized Web Apps",
    "Cross Platform Web Developer", "Dynamic Web Applications", "Scalable Web Apps",
    "REST API Developer", "API Integration Expert", "Cloud Web Developer", "Software Developer Portfolio",
    "GitHub Developer Portfolio", "Frontend Mentor Projects", "JavaScript Interview Projects",
    "Web Developer Portfolio", "Full Stack Portfolio", "Portfolio", "Best Full Stack Portfolios",
    "Darshil Thummar Portfolio", "DarshilThummar", "darshilthummar", "Web Development Portfolio",
    "Modern Web Development", "Hire MERN Stack Developer", "Remote Full Stack Developer",
    "Freelance MERN Developer", "Freelance React Developer", "Remote React Developer Portfolio",
    "Contract Full Stack Developer", "Affordable Web Developer", "Web Developer India",
    "Hire Full Stack Developer India", "Web Developer for Startups", "Outsource Web Development India",
    "Upwork Full Stack Developer", "Fiverr Web Developer India", "Fast Loading Web Apps",
    "SEO Friendly Developer", "Lighthouse Optimized Websites", "Mobile-First Developer",
    "Progressive Web Apps Developer", "CRUD Application Developer", "SPA Developer",
    "CI/CD Web Developer Portfolio", "Docker Web Developer", "Tailwind CSS Developer",
    "UI Developer Portfolio", "CodeBucket Developer Portfolio",
    "sparkle infotech", "sparkleinfotech", "Darshil Thummar Sparkle Infotech",
    "Sparkle Infotech Developer", "Full Stack Developer at Sparkle Infotech",
    "MERN Stack Developer at Sparkle Infotech", "Sparkle Infotech MERN Developer",
    "Sparkle Infotech Web Developer", "Sparkle Infotech React Developer",
    "Sparkle Infotech Node.js Developer", "Darshil Thummar Sparkle Infotech Projects",
    "Sparkle Infotech Team Member", "Sparkle Infotech Web Application Developer",
    "Sparkle Infotech Software Developer", "Sparkle Infotech Full Stack Portfolio",
    "Best Developer at Sparkle Infotech", "Sparkle Infotech Projects and Solutions",
    "Sparkle Infotech Expert Developer", "Sparkle Infotech Web Development"
  ],
  openGraph: {
    title: "Darshil Thummar | MERN Stack Developer & Web Innovator",
    description:
      "Explore Darshil Thummar’s portfolio highlighting expertise in MongoDB, Express.js, React.js, and Node.js. Browse modern web solutions, creative UI/UX designs, and impactful digital projects.",
    url: "https://darshilthummar.vercel.app/",
    siteName: "Darshil Thummar Portfolio",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D03AQHjJaYuDImKvQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680426267263?e=1751500800&v=beta&t=lfizyua1IhZjfMksF88uyMddfRyUtPhZHOosU0XIVjg",
        width: 1200,
        height: 630,
        alt: "Darshil Thummar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshil Thummar | Full Stack Developer & Web Solutions Expert",
    description:
      "Discover Darshil Thummar’s professional portfolio. MERN Stack Developer creating high-performance web apps and modern digital experiences.",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D03AQHjJaYuDImKvQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680426267263?e=1751500800&v=beta&t=lfizyua1IhZjfMksF88uyMddfRyUtPhZHOosU0XIVjg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const userAgent = navigator.userAgent || navigator.vendor || window.opera;
                const favicon = document.getElementById('dynamic-favicon');
                if (/android/i.test(userAgent)) {
                  favicon.href = './android-chrome-192x192.png';
                } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                  favicon.href = '/apple-touch-icon.png';
                } else {
                  favicon.href = '/favicon.ico';
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Darshil Thummar",
              jobTitle: "Full Stack Developer",
              image:
                "https://media.licdn.com/dms/image/v2/D4D03AQHjJaYuDImKvQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680426267263?e=1751500800&v=beta&t=lfizyua1IhZjfMksF88uyMddfRyUtPhZHOosU0XIVjg",
              url: "https://darshilthummar.vercel.app/#experiences",
              sameAs: [
                "https://www.linkedin.com/in/darshil-thummar-50bb8b216/",
                "https://github.com/darshilthummar09",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Sparkle Infotech",
                url: "https://sparkleinfotech.com/",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surat",
                addressCountry: "IN",
              },
              description:
                "Darshil Thummar is a passionate Full Stack Developer with 1.5 years of experience specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Skilled in building fast, scalable, and responsive web applications, Darshil excels at combining modern front-end technologies with solid back-end solutions. Currently working as a Full Stack Developer at Sparkle Infotech, he focuses on delivering high-performance digital experiences with a user-centric approach. Darshil is constantly learning and exploring new technologies such as Next.js, PostgreSQL, and modern development practices. Open to exciting opportunities, remote roles, and collaborations with forward-thinking teams.",
            }),
          }}
        />

        <div className="lg:px-10">{children}</div>
        <Header className="app_nav" navItems={navMenus} />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
