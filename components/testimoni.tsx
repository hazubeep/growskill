'use client';

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Testimonial {
  name: string;
  title: string;
  image?: string;
  text: string;
}

interface TestimoniProps {
  title?: string;
  highlightedWords?: { text: string; color: 'blue' | 'green' }[];
  buttonText?: string;
  testimonials?: Testimonial[];
}

const Testimoni: React.FC<TestimoniProps> = ({
  title = '',
  highlightedWords = [],
  buttonText,
  testimonials = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const renderTitle = () => {
    if (!title) return null;
    if (!highlightedWords || highlightedWords.length === 0) return title;
    
    // Sort by length descending to match longer phrases first
    const sortedHighlights = [...highlightedWords].sort((a, b) => b.text.length - a.text.length);
    // Create regex pattern to match any highlighted phrase
    const pattern = new RegExp(`(${sortedHighlights.map(h => h.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
    
    const parts = title.split(pattern);
    
    return parts.map((part, idx) => {
      const highlight = sortedHighlights.find(h => h.text === part);
      if (highlight) {
        const colorClass = highlight.color === 'blue' ? 'text-[#3B82F6]' : 'text-green-500';
        return <span key={idx} className={colorClass}>{part}</span>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // determine mobile viewport to show single slide on small screens
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const shouldShowCarousel = testimonials.length > 1;

  const displayedTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : shouldShowCarousel
    ? // show current and next on desktop
      [testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]]
    : testimonials;

  return (
    <section className="bg-black text-white px-[30px] md:px-[70px] py-16 md:py-24">
      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .testimonial-card {
          animation: fadeInSlide 0.3s ease-in-out;
        }
      `}</style>
      
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          {renderTitle()}
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchMove={(e) => {
              touchEndX.current = e.touches[0].clientX;
            }}
            onTouchEnd={() => {
              if (touchStartX.current != null && touchEndX.current != null) {
                const delta = touchStartX.current - touchEndX.current;
                if (Math.abs(delta) > 50) {
                  if (delta > 0) {
                    handleNext();
                  } else {
                    handlePrev();
                  }
                }
              }
              touchStartX.current = null;
              touchEndX.current = null;
            }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            {displayedTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="testimonial-card border-2 border-gray-600 rounded-2xl p-8 md:p-10 hover:border-[#3B82F6] transition-colors"
              >
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 relative bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                    {testimonial.image ? (
                       <Image 
                         src={testimonial.image} 
                         alt={testimonial.name}
                         fill
                         className="object-cover"
                       />
                    ) : null}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {shouldShowCarousel && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="bg-[#3B82F6] hover:opacity-90 transition-opacity text-white p-3 rounded-full"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="bg-[#3B82F6] hover:opacity-90 transition-opacity text-white p-3 rounded-full"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#3B82F6] hover:opacity-90 transition-opacity text-white font-bold py-3 px-8 rounded-lg text-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimoni