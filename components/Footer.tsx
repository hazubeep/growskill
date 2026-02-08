import React from 'react'
import Image from 'next/image'

interface FooterProps {
  description?: string;
}

const Footer: React.FC<FooterProps> = ({
  description = "Platform pembelajaran terpadu untuk mengembangkan skill dan menghasilkan income."
}) => {
  const currentYear = new Date().getFullYear()
  const logonav = '/logonav.svg'

  return (
    <footer className="bg-black text-white border-t border-gray-700">
      {/* Main Footer Content */}
      <div className="px-6 md:px-[70px] py-12 md:py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <Image
                src={logonav}
                alt="Growskill Logo"
                width={40}
                height={60}
                className="h-[67px] w-auto mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-lg font-bold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Kursus Online</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Mentoring</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Komunitas</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Kontak</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8 md:pt-12">
            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm">
              <p>&copy; {currentYear} Growskill. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
