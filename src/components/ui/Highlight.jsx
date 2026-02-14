import React from 'react';

// Basecamp-style hand-drawn marker highlight behind text
// Usage: <Highlight>your text</Highlight>
// Colors: "orange" (default), "blue", "yellow", "green"

const brushPaths = {
  // Each is a slightly different wobbly shape so they feel hand-drawn
  1: "M12,28 Q60,4 190,12 Q320,20 380,16 Q400,14 400,22 Q400,30 380,32 Q320,36 190,32 Q60,28 12,34 Q4,36 12,28Z",
  2: "M8,24 Q80,8 200,10 Q340,12 390,18 Q404,20 398,28 Q392,36 340,34 Q200,38 80,32 Q20,30 8,34 Q0,36 8,24Z",
  3: "M16,26 Q100,6 210,14 Q350,22 392,16 Q408,14 404,24 Q400,34 350,30 Q210,36 100,30 Q30,28 16,36 Q6,38 16,26Z",
};

const colorMap = {
  orange: '#FF8C00',
  yellow: '#FFD93D',
  blue: '#3B82F6',
  green: '#22C55E',
};

export const Highlight = ({ children, color = 'orange', className = '' }) => {
  // Pick a random-ish brush path based on text length
  const pathKey = ((children?.toString().length || 1) % 3) + 1;

  return (
    <span className={`relative inline-block ${className}`}>
      {/* SVG brush stroke behind text */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 412 48"
        preserveAspectRatio="none"
        style={{
          top: '10%',
          left: '-3%',
          width: '106%',
          height: '90%',
          zIndex: 0,
        }}
      >
        <path
          d={brushPaths[pathKey]}
          fill={colorMap[color] || colorMap.orange}
          opacity="0.3"
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </span>
  );
};