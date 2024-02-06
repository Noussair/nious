import React from 'react';
import { GalleryItem } from '../../../types/ourWorkSection';

interface GalleryItemProps {
 item: GalleryItem;
 idx: number;
 onClick: () => void; 
}

const GalleryItemCard: React.FC<GalleryItemProps> = ({ item, idx,onClick }) => (
 <div key={idx} className="item col-md-3 col-sm-4 col-xs-6" data-groups={'[' + item.categories.map(c => `"${c.title}"`).join(', ') + ']'}>
    <a onClick={onClick} className="hover-overlay">
      <img alt={item.title} src={item.image.url} />
      <div className="overlay background-90-a">
        <div className="hidden-xs">
          <p className="title heading-a">{item.title}</p>
          <p className="text-center heading-a"><strong>{item.subTitle}</strong></p>
        </div>
      </div>
    </a>
 </div>
);

export default GalleryItemCard;