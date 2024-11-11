'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#F5F5F3] border-b border-[#FF4820]/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[#FF4820] text-2xl font-bold">
              LookSense
            </Link>
          </div>

          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/product" className="text-gray-900 hover:text-[#FF4820] font-medium">
              PRODUCT
            </Link>
            <Link href="/packaging" className="text-gray-900 hover:text-[#FF4820] font-medium">
              PACKAGING
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-[#FF4820] font-medium">
              ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}