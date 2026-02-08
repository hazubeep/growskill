'use client'

import React, { useState } from 'react'

interface Package {
  name: string;
  description: string;
  price: string;
  period: string;
  isBestValue?: boolean;
  benefits: { title: string; isIncluded: boolean }[];
}

interface PricingSectionProps {
  title?: string;
  description?: string;
  packages?: Package[];
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title = "Join & Daftar Sekarang!",
  description = "Lorem ipsum dolor sit amet consectetur. Hendrerit urna turpis montes ante imperdiet dui cursus. Sed id tristique porttitor ipsum ut duis. Mattis leo proin vulputate nulla.",
  packages = []
}) => {
  const [selectedIndex, setSelectedIndex] = useState(() => {
    const bestValueIndex = packages.findIndex(pkg => pkg.isBestValue);
    return bestValueIndex >= 0 ? bestValueIndex : 1;
  })
  const selectedPackage = packages[selectedIndex]

  return (
    <section className="bg-black text-white px-6 md:px-[70px] py-12 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Main Grid: Packages Left + Benefits Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Package Cards */}
          <div className="lg:col-span-2 space-y-4">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`relative p-6 md:p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedIndex === idx
                    ? 'bg-[#3B82F6] border-[#3B82F6]'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                {/* Best Value Badge */}
                {pkg.isBestValue && selectedIndex === idx && (
                  <div className="absolute -top-3 right-6 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Best Value
                  </div>
                )}

                {/* Card Content */}
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className={`text-sm ${selectedIndex === idx ? 'text-white' : 'text-gray-400'}`}>
                      {pkg.description}
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <p className={`font-bold text-lg ${selectedIndex === idx ? 'text-white' : 'text-white'}`}>
                      {pkg.price}
                      <span className="text-sm">{pkg.period}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Benefits List */}
          <div className="lg:col-span-1">
            <div className="border-2 border-gray-600 rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Benefit</h3>
              <div className="space-y-4">
              <div className="space-y-4">
                {selectedPackage?.benefits?.map((benefit, idx) => (
                  <div key={idx} className={`flex items-start gap-3 ${benefit.isIncluded ? '' : 'opacity-50'}`}>
                    {benefit.isIncluded ? (
                      <svg
                        className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg 
                        className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className="text-gray-300 text-sm">{benefit.title}</span>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#3B82F6] hover:opacity-90 transition-opacity text-white font-bold py-3 px-16 rounded-full text-lg">
            Pilih Paket
          </button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
