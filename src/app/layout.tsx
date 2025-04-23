import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/Components/UI/Header'
import ScrollToTop from '@/Components/common/ScrollToTop'
import { navMenus } from '../data/navItems'
import Footer from '@/Components/UI/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Darshil Thummar | MERN Stack Developer Portfolio',
  description:
    'Explore the portfolio of Darshil Thummar, a passionate Full Stack Developer specializing in the MERN stack. Discover projects, skills, and experience in modern web development.',
  keywords: [
    'Darshil Thummar',
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Portfolio',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'MongoDB Developer',
    'Express.js Developer',
    'React.js Developer',
    'Node.js Expert',
    'MERN Stack Portfolio',
    'Web Development Portfolio',
    'Darshil Thummar Portfolio',
    'Modern Web Development',
    'JavaScript Expert',
    'Frontend Development',
    'Backend Development',
    'Full Stack Portfolio',
    'Scalable Web Apps',
    'Dynamic Web Applications',
    'DarshilThummar',
    'darshilthummar',
    'MERN Stack Projects',
    'Web Developer Portfolio',
    'React and Node.js Developer',
    'MERN Stack Expert',
  ],
  openGraph: {
    title: 'Darshil Thummar | MERN Stack Developer Portfolio',
    description:
      'Portfolio of Darshil Thummar – Showcasing expertise in MongoDB, Express.js, React.js, and Node.js through impactful web projects.',
    url: 'https://yourdomain.com',
    siteName: 'Darshil Thummar Portfolio',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Darshil Thummar Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darshil Thummar | MERN Stack Developer Portfolio',
    description:
      'Explore projects, skills, and work experience of Darshil Thummar, a skilled MERN Stack Developer.',
    images: ['https://media.licdn.com/dms/image/v2/D4D03AQHjJaYuDImKvQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1680426267263?e=2147483647&v=beta&t=_-UqP7zh9VyYiBOO-2oZQb5Auztu1KIobgUIwkj8ZYM'], // Replace with your actual image
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="0IXFzYG-G9iwXixbQXFVanLLZdN0y2CPTZ-5qZbu-Zc" />
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
        <div className="lg:px-10">{children}</div>
        <Header className="app_nav" navItems={navMenus} />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}