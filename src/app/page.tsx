// src/app/page.tsx
'use client'

import React, { useState } from 'react'
import { Camera, Upload, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'

// Definisikan tipe untuk kategori fashion
interface FashionCategory {
 id: number;
 name: string;
 description: string;
}

const FASHION_CATEGORIES: FashionCategory[] = [
 { id: 1, name: 'Formal Wear', description: 'Business suits, formal dresses' },
 { id: 2, name: 'Casual Wear', description: 'T-shirts, jeans, everyday clothing' },
 { id: 3, name: 'Athletic Wear', description: 'Sportswear, gym clothing' },
 { id: 4, name: 'Evening Wear', description: 'Gowns, tuxedos' },
 { id: 5, name: 'Streetwear', description: 'Urban fashion, trendy casual' },
 { id: 6, name: 'Vintage', description: 'Retro and classic styles' },
 { id: 7, name: 'Bohemian', description: 'Free-spirited, artistic fashion' },
 { id: 8, name: 'Minimalist', description: 'Clean, simple designs' }
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
     // Simulasi deteksi
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
   <div className="min-h-screen bg-[#EBE9E1]">
     <Navbar />
     <main className="container mx-auto px-4 py-12">
       <div className="text-center mb-12">
         <h1 className="text-6xl font-bold gradient-text">
           LookSense
         </h1>
         <p className="mt-4 text-gray-700 text-lg">
           Discover Your Style with AI-Powered Fashion Analysis
         </p>
       </div>

       <div className="max-w-3xl mx-auto">
         <div className="bg-white/90 bg-gradient-to-rbackdrop-blur-sm shadow-xl rounded-2xl p-8 border border-[#FFA2B6]/20">
           <div className="space-y-6">
             <label className="block w-full cursor-pointer">
               <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                 preview 
                   ? 'border-[#D6536D] bg-[#FFA2B6]/10' 
                   : 'border-gray-300 hover:border-[#D6536D]'
               }`}>
                 {preview ? (
                   <div className="relative">
                     <img
                       src={preview}
                       alt="Preview"
                       className="max-h-64 mx-auto rounded-lg"
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
               className={`w-full py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all ${
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

             {result && (
               <div className="mt-6 p-6 bg-gradient-to-r from-[#FFA2B6]/10 to-[#D6536D]/10 rounded-xl border border-[#FFA2B6]/20">
                 <div className="flex items-center gap-2 mb-4">
                   <Sparkles className="w-6 h-6 text-[#D6536D]" />
                   <h3 className="text-xl font-semibold text-gray-800">Style Analysis Results</h3>
                 </div>
                 <div className="space-y-3">
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
           </div>
         </div>
       </div>

       <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
         {FASHION_CATEGORIES.map((category) => (
           <div
             key={category.id}
             className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all hover-effect border border-[#FFA2B6]/20"
           >
             <h3 className="font-semibold text-gray-800">{category.name}</h3>
             <p className="text-sm text-gray-600 mt-1">{category.description}</p>
           </div>
         ))}
       </div>
     </main>
   </div>
 )
}