// components/UI/Footer.tsx

// import Link from 'next/link'
// import { socialLinks } from '../../data/importantLinks'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Darshil Thummar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
