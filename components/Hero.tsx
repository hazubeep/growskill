'use client';

import React from 'react'

interface HeroProps {
  title: string;
  highlightedWords?: { text: string; color: 'blue' | 'green' }[];
  buttonText?: string;
  onButtonClick?: () => void;
  youtubeUrl?: string;
  imagePlaceholder?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  highlightedWords = [],
  buttonText = 'Join Sekarang!!',
  onButtonClick,
  youtubeUrl,
  imagePlaceholder = true,
}) => {
  const renderTitle = () => {
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

  return (
    <section className="bg-black text-white px-[30px] pt-12 pb-16 md:pt-12 md:pb-24">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold leading-tight mb-12">
            {renderTitle()}
          </h1>

          {/* YouTube Video or Placeholder */}
          <div className="w-full mb-12 md:mx-auto md:w-[1080px]">
            {youtubeUrl ? (
              <div className="relative w-full h-0 pb-[56.25%] rounded-3xl overflow-hidden shadow-lg border border-gray-800">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={youtubeUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : imagePlaceholder ? (
              <div className="w-full h-64 md:h-[478px] md:w-[1080px] bg-gray-300 rounded-3xl"></div>
            ) : null}
          </div>

          {/* CTA Button */}
          <button 
            onClick={onButtonClick}
            className="bg-[#3B82F6] hover:opacity-90 transition-opacity text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero