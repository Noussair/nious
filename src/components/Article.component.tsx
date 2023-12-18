// ContentContainer.tsx
import React from 'react';

interface ArticleProps {
  title: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ title, content }) => {
  return (
    <div className="flex-2 md:pl-10 lg:pl-10">
      {/* Text content */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-grey mb-2">{title}</h2>
        <p className="text-grey">{content}</p>
      </div>
    </div>
  );
};

export default Article;
