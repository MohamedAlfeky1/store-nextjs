import React from 'react'

export default function HeroSection() {
  return (
    <div className="w-full bg-slate-50 py-24 px-6 flex flex-col items-center text-center ">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Discover the Latest Products at <span className="text-blue-600">Unbeatable Prices</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Our carefully curated collection ensures quality and excellence. 
          Shop now and get exclusive offers for a limited time on all premium items.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
            Shop Now
          </button>
          <button className="bg-white text-slate-900 border border-slate-300 px-10 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
