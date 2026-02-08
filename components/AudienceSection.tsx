'use client';

import React from 'react'

interface ChecklistItem {
  text: string;
}

interface AudienceSectionProps {
  title?: string;
  cocoklist?: ChecklistItem[];
  notCocoklist?: ChecklistItem[];
}

const AudienceSection: React.FC<AudienceSectionProps> = ({
  title,
  cocoklist = [],
  notCocoklist = [],
}) => {
  return (
    <section className="bg-black text-white px-[20px] md:px-[70px] pt-12 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          {title}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cocok Card */}
          <div className="border-2 border-green-500 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Cocok Untuk :
            </h3>
            <div className="border-b border-gray-600 mb-6"></div>
            
            <ul className="space-y-4">
              {cocoklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base md:text-lg text-gray-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tidak Cocok Card */}
          <div className="border-2 border-red-500 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Tidak Cocok Untuk :
            </h3>
            <div className="border-b border-gray-600 mb-6"></div>
            
            <ul className="space-y-4">
              {notCocoklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-red-500 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base md:text-lg text-gray-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AudienceSection