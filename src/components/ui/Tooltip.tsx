import React, { useState } from 'react';

type TooltipProps = {
  children: React.ReactNode;
  content: string;
};

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-flex">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-flex items-center justify-center"
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 w-64 px-4 py-2 text-sm text-gray-900 bg-white rounded-lg shadow-lg border border-gray-200 -translate-x-1/2 left-1/2 bottom-full mb-2">
          <div className="relative">
            {content}
            {/* Arrow */}
            <div className="absolute left-1/2 bottom-[-8px] -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
          </div>
        </div>
      )}
    </div>
  );
};