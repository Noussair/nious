import React from 'react';
import DOMPurify from 'dompurify';
interface ArticleProps {
  title: string;
  content: string;
  graphicColor: string;
}

const Article: React.FC<ArticleProps> = ({ title, content, graphicColor }) => {
  const sanitizedContent = { __html: DOMPurify.sanitize(content)};
  return (
    <>
    <div className="header-container">
            {/* Placeholder for the graphic, replace with actual graphic or component */}
            <div style={{ borderRadius: '70px' }} className={`bg-${graphicColor} shape lg:flex m-auto p-32 mt-4 w-16 hidden relative`}>
              {/* Example of circles to simulate the particles */}
              <span className="absolute bg-light z-10 top-10 right-10 w-16 h-16 bg-teal-500 rounded-full"></span>
              <span className="absolute bg-light z-10 top-8 left-20 w-10 h-10 bg-teal-500 rounded-full"></span>
              <span className="absolute bg-light z-10 top-10 left-10 w-6 h-6 bg-teal-500 rounded-full"></span>
              <span className="absolute bg-light z-10 top-20 left-6 w-10 h-10 bg-teal-500 rounded-full"></span>
              <span className="absolute bg-light z-10 top-36 left-6 w-12 h-12 bg-teal-500 rounded-full"></span>
              <span className="absolute bg-light z-10 top-50 left-24 w-6 h-6 bg-teal-500 rounded-full"></span>
            </div>
          </div>
          <div className="flex-2 md:pl-10 lg:pl-10">
            {/* Text content */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-grey mb-2">{title}</h2>
              <div className="text-grey hyphens-auto"dangerouslySetInnerHTML={sanitizedContent}></div>
            </div>
          </div>
    </>
        
          
        
     
  );
};

export default Article;



