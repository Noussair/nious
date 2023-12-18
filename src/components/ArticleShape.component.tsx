// ShapesContainer.tsx
import React from 'react';

interface ArticleShapeProps {
  shapeColor: string;
}

const ArticleShape: React.FC<ArticleShapeProps> = ({ shapeColor }) => {
  return (
    <div className="header-container">
      {/* Placeholder for the graphic, replace with actual graphic or component */}
      <div style={{ borderRadius: '70px' }} className={`bg-${shapeColor} shape lg:flex m-auto p-32 mt-4 w-16 hidden relative`}>
        {/* Example of circles to simulate the particles */}
        <span className="absolute bg-light z-10 top-10 right-10 w-16 h-16 bg-teal-500 rounded-full"></span>
        <span className="absolute bg-light z-10 top-8 left-20 w-10 h-10 bg-teal-500 rounded-full"></span>
        <span className="absolute bg-light z-10 top-10 left-10 w-6 h-6 bg-teal-500 rounded-full"></span>
        <span className="absolute bg-light z-10 top-20 left-6 w-10 h-10 bg-teal-500 rounded-full"></span>
        <span className="absolute bg-light z-10 top-36 left-6 w-12 h-12 bg-teal-500 rounded-full"></span>
        <span className="absolute bg-light z-10 top-50 left-24 w-6 h-6 bg-teal-500 rounded-full"></span>
      </div>
    </div>
  );
};

export default ArticleShape;
