



import React, { useRef, useState, useEffect } from 'react';
import './article.css';
import Article from './components/article.component';
import Arrow from '../arrow/arrow.component';
import FloatingMenu from '../floatingMenu/floating-menu.component';

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
  ];

const ArticleSection: React.FC = () => {
  const ArticleContainerRef = useRef<HTMLDivElement>(null);
  const ScrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleArticles, setVisibleArticles] = useState<Set<number>>(new Set());


  const scrollToElement = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    ScrollContainerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const newVisibleIndices = new Set(visibleArticles);

    entries.forEach(entry => {
      const index = Number(entry.target.getAttribute('id'));
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        newVisibleIndices.add(index);
      } else {
        newVisibleIndices.delete(index);
      }
    });

    setVisibleArticles(newVisibleIndices);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: ArticleContainerRef.current, // Setting the root to the scrolling container
      rootMargin: '0px',
      threshold: 1.0, // 100% visibility
    });

    const articlesElements = ArticleContainerRef.current?.children;
    articlesElements && Array.from(articlesElements).forEach(article => observer.observe(article));

    return () => observer.disconnect();
  }, [visibleArticles]);

  return (
    <>
      <FloatingMenu></FloatingMenu>
      <div id="solutions" className="relative bg-gray-200 p-10">
      <div className="blur-overlay-top"></div>
    <div className="blur-overlay-bottom"></div>
        <div id="disable-scroll" ref={ArticleContainerRef} className="overflow-y-scroll" style={{ maxHeight: '700px' }}>
          {articles.map((article, index) => (
            <div id={`${index}`} ref={ScrollContainerRef} key={index}>
              <Article
                title={article.title}
                content={article.content}
                graphicColor={visibleArticles.has(index) ? 'green' : 'darker'}
              />
            </div>
          ))}
        </div>
        <div className="sticky bottom-10 left-0">
            <Arrow onClick={scrollToElement} direction="down" />
          </div>
      </div>
    </>
  );
};

export default ArticleSection;
