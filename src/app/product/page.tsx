// src/app/product/page.tsx
'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Camera, Sparkles, Smartphone, Zap, Search, TrendingUp } from 'lucide-react'
import { 
    ShoppingBag,     // untuk Bags
    Shell,           // untuk Bottomwear
    Shirt,           // untuk Dress dan Topwear 
    Crown,           // untuk Headwear
    Footprints,      // untuk Shoes
    Clock            // untuk Watches
   } from 'lucide-react'
import Link from 'next/link';
import PageTransition from '@/components/PageTransition'

export default function ProductPage() {
 const features = [
   {
     icon: <Camera className="w-8 h-8 text-[#FF4820] mb-4" />,
     title: "AI Fashion Detection",
     description: "Advanced computer vision algorithms to identify fashion items with high accuracy."
   },
   {
     icon: <Sparkles className="w-8 h-8 text-[#FF4820] mb-4" />,
     title: "Style Analysis",
     description: "Get detailed analysis of style elements, colors, and fashion categories."
   },
   {
     icon: <TrendingUp className="w-8 h-8 text-[#FF4820] mb-4" />,
     title: "Trend Prediction",
     description: "Stay ahead with AI-powered fashion trend predictions and insights."
   },
   {
     icon: <Smartphone className="w-8 h-8 text-[#FF4820] mb-4" />,
     title: "Mobile Friendly",
     description: "Use our fashion detection service anywhere, anytime on any device."
   },
   {
     icon: <Search className="w-8 h-8 text-[#FF4820] mb-4" />,
     title: "Similar Items Search",
     description: "Find similar fashion items based on your uploaded images."
   },
   {
     icon: <Zap className="w-8 h-8 text-[#FF4820] mb-4" />,
     title: "Real-time Processing",
     description: "Get instant results with our optimized processing system."
   }
 ]

 const categories = [
    {
      title: "Bags",
      count: "200+ items",
      icon: <ShoppingBag className="w-6 h-6 text-[#FF4820]" />
    },
    {
      title: "Bottomwear",
      count: "200+ items", 
      icon: <Shell className="w-6 h-6 text-[#FF4820]" />
    },
    {
      title: "Dress",
      count: "200+ items",
      icon: <Shirt className="w-6 h-6 text-[#FF4820]" />
    },
    {
      title: "Headwear",
      count: "200+ items",
      icon: <Crown className="w-6 h-6 text-[#FF4820]" />
    },
    {
      title: "Shoes",
      count: "200+ items",
      icon: <Footprints className="w-6 h-6 text-[#FF4820]" />
    },
    {
      title: "Topwear", 
      count: "200+ items",
      icon: <Shirt className="w-6 h-6 text-[#FF4820]" />
    },
    {
      title: "Watches",
      count: "200+ items",
      icon: <Clock className="w-6 h-6 text-[#FF4820]" />
    }
   ]

 return (
  <PageTransition>
   <div className="min-h-screen bg-[#F5F5F3]">
     <Navbar />
     <main className="container mx-auto px-4 pt-24 pb-12">
       {/* Hero Section */}
       <div className="text-center mb-20">
         <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
           Our Product Features
         </h1>
         <p className="text-gray-600 max-w-2xl mx-auto text-lg">
           Discover the power of AI-driven fashion detection and analysis with our 
           cutting-edge technology.
         </p>
       </div>

       {/* Features Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
         {features.map((feature, index) => (
           <div 
             key={index}
             className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-[#FFA2B6]/20"
           >
             <div className="flex flex-col items-center text-center">
               {feature.icon}
               <h3 className="text-xl font-semibold text-gray-800 mb-2">
                 {feature.title}
               </h3>
               <p className="text-gray-600">
                 {feature.description}
               </p>
             </div>
           </div>
         ))}
       </div>

       {/* Categories Section */}
       <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Fashion Categories We Detect
        </h2>
        
        {/* First Row - 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-6">
        {categories.slice(0, 4).map((category, index) => (
            <div 
            key={index}
            className="bg-white/90 rounded-xl p-4 hover:shadow-lg transition-all group relative overflow-hidden"
            >
            <div className="flex items-center space-x-3">
                <div className="text-[#FF4820]">
                {category.icon}
                </div>
                <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    {category.title}
                </h3>
                <p className="text-sm text-gray-600">
                    {category.count}
                </p>
                </div>
            </div>
            <div className="absolute inset-0 bg-[#FF4820] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
        ))}
        </div>

        {/* Second Row - 3 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {categories.slice(4).map((category, index) => (
            <div 
            key={index}
            className="bg-white/90 rounded-xl p-4 hover:shadow-lg transition-all group relative overflow-hidden"
            >
            <div className="flex items-center space-x-3">
                <div className="text-[#FF4820]">
                {category.icon}
                </div>
                <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    {category.title}
                </h3>
                <p className="text-sm text-gray-600">
                    {category.count}
                </p>
                </div>
            </div>
            <div className="absolute inset-0 bg-[#FF4820] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
        ))}
        </div>
        </div>
        
       {/* CTA Section */}
       <div className="text-center bg-gradient-to-r from-[#E43D12] to-[#D6536D] rounded-xl p-12">
         <h2 className="text-3xl font-bold text-white mb-6">
           Ready to Try Our Fashion Detection?
         </h2>
         <p className="text-white/90 mb-8 max-w-2xl mx-auto">
           Experience the future of fashion analysis with our AI-powered technology.
           Get started today!
         </p>
         <Link 
          href="/" 
          className="inline-block bg-white text-[#FF4820] px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          Try Now
        </Link>
       </div>
     </main>
     <Footer />
   </div>
   </PageTransition>
 )
}