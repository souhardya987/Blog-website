import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between md:items-start gap-10">
        
        {/* Logo + Tagline */}
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="invert w-10 h-10" />
            <h1 className="text-2xl font-bold"><span className="text-red-500">Blog</span></h1>
          </Link>
          <p className="mt-3 text-sm text-gray-400 max-w-xs">
            A place where developers share stories, tutorials, and ideas to inspire the community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
            <li><Link to="/blogs" className="hover:text-red-500 transition">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition">About Us</Link></li>
            <li><Link to="/faqs" className="hover:text-red-500 transition">FAQs</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-500"><FaTwitterSquare /></a>
            <a href="#" className="hover:text-red-500"><FaPinterest /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <p className="mt-2 text-sm text-gray-400">Get the latest posts and updates delivered straight to your inbox.</p>
          <form className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button 
              type="submit" 
              className="bg-red-600 px-4 rounded-r-md hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} <span className="text-red-500">Blog</span>. 
          Souhardya Dutta
        </p>
      </div>
    </footer>
  )
}

export default Footer
