



import React, { useRef, useState, useEffect } from 'react';
import './article.css';
import Arrow from '../arrow/arrow.component';
import Article from './components/article.component';

const MenuButton: React.FC = () => {
  return (
    <div className="flex justify-center mt-10">
      <button
        className="animate-pulse bg-green rounded-full p-4 shadow-lg flex items-center justify-center"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

interface ArticleData {
  title: string;
  content: string;
  graphicColor: string;
}

const ArticleSection = () => {
  const articles: ArticleData[] = [
    {
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
      graphicColor: 'green',
    },
    {
      title: 'Article 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      graphicColor: 'green',
    },
    {
      title: 'Article 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      graphicColor: 'green',
    },
    {
      title: 'Article 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      graphicColor: 'green',
    },
    {
      title: 'Article 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      graphicColor: 'green',
    },
    // Add more articles as needed
  ];
  const ArticleContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleArticles, setVisibleArticles] = useState<number[]>([]);

  

  const scrollToElement = (e:any) => {
    e.stopPropagation();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    let newVisibleIndices: number[] = [];
  
    entries.forEach((entry) => {
      const index = Number(entry.target.id);
  
      if (entry.isIntersecting) {
        if (entry.intersectionRatio >= 0.2) {
          // If more than 50% visible, consider it fully visible
          newVisibleIndices.push(index);
        }
      } else {
        // If not intersecting, consider it leaving the container
        newVisibleIndices.push(index);
      }
    });
    console.log(newVisibleIndices);
    if (newVisibleIndices.length === articles.length +1){
      newVisibleIndices = [];
    }
    
    setVisibleArticles(newVisibleIndices);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: document.getElementById('solutions'),
      rootMargin: '500px',
      threshold: 0.4, // Adjust the threshold as needed
    });

    if (ArticleContainerRef.current) {
      const articles = ArticleContainerRef.current.children;
      Array.from(articles).forEach((article) => {
        observer.observe(article);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [ArticleContainerRef]);

  

  return (
    <>
      <MenuButton />
      <div id="solutions" className="relative bg-gray-200 p-10">
        <div id="blur-container" className="blur-edge  bg-darker"></div>
        <div
          id="disable-scroll"
          style={{ maxHeight: '700px' }}
          className="relative overflow-y-scroll"
          ref={ArticleContainerRef}
        >
          {articles.map((article, index) => (
  <div id={`${index}`} ref={scrollContainerRef} key={index}>
    <Article
      title={article.title}
      content={article.content}
      graphicColor={
        visibleArticles.length > 0 && visibleArticles.includes(index)
          ? 'darker'
          : 'green'
      }
    />
  </div>
))}
          <div className="sticky bottom-10 left-0">
            <Arrow onClick={scrollToElement} direction="down" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleSection;
