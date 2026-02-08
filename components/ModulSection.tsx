import Image from 'next/image'

interface ModulItem {
  title: string;
  subtitle: string;
  bullet: string;
  description: string;
  image?: string;
}

interface ModulSectionProps {
  title?: string;
  highlightedWords?: { text: string; color: 'blue' | 'green' }[];
  items?: ModulItem[];
}

const ModulSection: React.FC<ModulSectionProps> = ({
  title = "80++ Modul Pembelajaran",
  highlightedWords = [],
  items = []
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

  // For strict 2-column visual layout: render each item as a row with 3 columns
  return (
    <section className="bg-black text-white px-6 md:px-[70px] py-12 md:py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            {renderTitle()}
          </h2>
        </div>

        {/* Mobile: Vertical Card Stack */}
        <div className="lg:hidden space-y-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-3xl overflow-hidden border border-gray-700"
            >
              {/* Image with number badge */}
              <div className="relative">
                {item.image ? (
                  <div className="w-full h-48 relative bg-gray-300">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gray-300" />
                )}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white border-2 border-[#3B82F6] flex items-center justify-center text-[#3B82F6] font-bold text-lg z-10">
                  {idx + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#3B82F6] font-semibold mb-2">{item.subtitle}</p>
                <p className="text-gray-300 text-sm mb-3">{item.bullet}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Timeline Layout */}
        <div className="hidden lg:block relative">
          {/* vertical center line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, idx) => (
              <div key={idx} className="grid grid-cols-3 items-start gap-6">
                {/* left: image */}
                <div className="flex justify-end">
                  {item.image ? (
                    <div className="w-44 md:w-[474px] h-44 md:h-56 relative bg-gray-300 rounded-2xl shadow-sm overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-44 md:w-[474px] h-44 md:h-56 bg-gray-300 rounded-2xl shadow-sm" />
                  )}
                </div>

                {/* center: circle aligned on the center line */}
                <div className="flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-black border-2 border-[#3B82F6] flex items-center justify-center text-[#3B82F6] font-bold">
                    {idx + 1}
                  </div>
                </div>

                {/* right: text */}
                <div className="pl-0">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-[#3B82F6] font-semibold mt-1">{item.subtitle}</p>
                  <p className="text-gray-400 text-sm mt-2">{item.bullet}</p>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModulSection