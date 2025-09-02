import React from 'react';

type MarqueeProps = {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
};

const Marquee: React.FC<MarqueeProps> = ({ 
  items, 
  direction = 'left',
  speed = 'normal'
}) => {
  const speeds = {
    slow: '40s',
    normal: '30s',
    fast: '20s'
  };

  const animationDuration = speeds[speed];
  const animationDirection = direction === 'left' ? 'normal' : 'reverse';

  return (
    <div className="relative flex overflow-hidden bg-gray-100 backdrop-blur-sm border-y border-gray-200">
      {/* Gradient Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
      
      {/* First set of items */}
      <div 
        className="flex items-center py-4 animate-marquee whitespace-nowrap"
        style={{
          animation: `marquee ${animationDuration} linear infinite ${animationDirection}`
        }}
      >
        {items.map((item, index) => (
          <div 
            key={`${item}-${index}`}
            className="mx-8 flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      {/* Duplicate set for seamless loop */}
      <div 
        className="flex items-center py-4 animate-marquee whitespace-nowrap"
        style={{
          animation: `marquee ${animationDuration} linear infinite ${animationDirection}`
        }}
      >
        {items.map((item, index) => (
          <div 
            key={`${item}-${index}-duplicate`}
            className="mx-8 flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;