// src/app/page.tsx
'use client'

import React, { useState } from 'react'
import { Camera, Upload, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image' // Import Image dari next/image
import PageTransition from '@/components/PageTransition'

// Define the type for fashion categories
interface FashionCategory {
  id: number;
  name: string;
  description: string;
}

const FASHION_CATEGORIES: FashionCategory[] = [
  { id: 1, name: 'Bags', description: 'Handbags, backpacks, accessories' },
  { id: 2, name: 'Bottom Wear', description: 'Pants, skirts, shorts collection' },
  { id: 3, name: 'Dress', description: 'Casual, formal, party dresses' },
  { id: 4, name: 'Headwear', description: 'Hats, caps, hair accessories' },
  { id: 5, name: 'Shoes', description: 'Sneakers, heels, boots styles' },
  { id: 6, name: 'TopWear', description: 'Shirts, blouses, jackets range' },
  { id: 7, name: 'Watches', description: 'Classic, smart, luxury watches' }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<{
    category: FashionCategory;
    confidence: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetection = async () => {
    setLoading(true);
    try {
      // Simulate detection
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setResult({
        category: FASHION_CATEGORIES[Math.floor(Math.random() * FASHION_CATEGORIES.length)],
        confidence: Number((Math.random() * (0.99 - 0.85) + 0.85).toFixed(2))
      });
    } catch (error) {
      console.error('Detection failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
    <div className="min-h-screen bg-[#EBE9E1]">
      <Navbar />
            <main className="container mx-auto px-4 pt-20 pb-12 ">
              {/* Main section with title on the left and upload on the right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 max-w-6xl mx-auto"> {/* Tambahkan md:w-4/5 dan mx-auto */}
              {/* Left side: Title and description */}
              <div className="ml-20">
                <h1 className="text-6xl font-bold gradient-text">
                  LookSense
                </h1>
                <p className="mt-4 text-gray-700 text-lg">
                  Discover Your Style with AI-Powered Fashion Analysis
                </p>
              </div>

              {/* Right side: Detection area */}
              <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-[#FFA2B6]/20">
                        <label className="block w-full cursor-pointer">
                          <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                            preview ? 'border-[#D6536D] bg-[#FFA2B6]/10' : 'border-gray-300 hover:border-[#D6536D]'
                          }`}>
                {preview ? (
                  <div className="relative">

                    <Image
                      src={preview}
                      alt="Preview"
                      className="max-h-64 mx-auto rounded-lg"
                      width={500} // Sesuaikan width
                      height={500} // Sesuaikan height
                      layout="responsive"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                      <p className="text-white">Click to change image</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 mx-auto text-[#D6536D]" />
                    <p className="mt-2 text-gray-600">Drop your fashion image here or click to browse</p>
                  </div>
                )}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
            </label>

            <button
              onClick={handleDetection}
              disabled={!selectedImage || loading}
              className={`w-full py-3 mt-4 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all ${
                !selectedImage || loading
                  ? 'bg-gray-400'
                  : 'bg-gradient-to-r from-[#E43D12] to-[#D6536D] hover:opacity-90 hover-effect'
              }`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  Analyzing Style...
                </>
              ) : (
                <>
                  <Camera className="w-5 h-5" />
                  Analyze Style
                </>
              )}
            </button>
          </div>
        </div>

        {/* Style Analysis Results Section */}
        {result && (
          <div className="mt-4 p-6 bg-gradient-to-r from-[#FFA2B6]/10 to-[#D6536D]/10 rounded-xl border border-[#FFA2B6]/20 max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#D6536D]" />
              <h3 className="text-xl font-semibold text-gray-800">Style Analysis Results</h3>
            </div>
            <div className="space-y-3 text-center">
              <p className="text-gray-700">
                <span className="font-medium">Style Category:</span>{' '}
                {result.category.name}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Description:</span>{' '}
                {result.category.description}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">AI Confidence:</span>{' '}
                {(result.confidence * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        )}

       {/* Fashion Categories Section */}
        <div className="mt-12">
          <div className="max-w-5xl mx-auto px-4">
            {/* Top Row - 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FASHION_CATEGORIES.slice(0, 4).map((category) => (
                <div
                  key={category.id}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover-effect border border-[#FFA2B6]/20"
                >
                  <h3 className="font-semibold text-gray-800 text-center mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{category.description}</p>
                </div>
              ))}
            </div>

            {/* Bottom Row - 3 cards centered */}
            <div className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {FASHION_CATEGORIES.slice(4).map((category) => (
                  <div
                    key={category.id}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover-effect border border-[#FFA2B6]/20"
                  >
                    <h3 className="font-semibold text-gray-800 text-center mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600 text-center">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </main>
        <Footer />
        </div>
        </PageTransition>
        )
        }