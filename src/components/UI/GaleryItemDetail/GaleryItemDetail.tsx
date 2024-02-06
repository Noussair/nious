import React, { useState } from 'react';
import { GalleryItem } from '../../../types/ourWorkSection';
import './GaleryItemDetail.css'; // Import the CSS file for styling

interface GalleryItemDetailProps {
    item: GalleryItem;
}

export const GalleryItemDetail: React.FC<GalleryItemDetailProps> = ({ item }) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="item-content">
            <div className="container">
                <div className="row">
                    {/* Image Section */}
                    <div className="col-md-6 image-section">
                        <div className="image-container">
                            {isLoading && (
                                <div className="loader loader-container">
                                    <ul className="customloader">
                                        <li className="background-heading-e"></li>
                                        <li className="background-heading-e"></li>
                                        <li className="background-heading-e"></li>
                                    </ul>
                                </div>
                            )}
                            <img
                                src={item.image.url}
                                alt={item.title}
                                className={`detail-image ${isLoading ? 'hidden' : ''}`}
                                onLoad={() => setIsLoading(false)}
                            />
                        </div>
                    </div>
                    {/* Text Section */}
                    <div className="col-md-6 text-section">
                        <h3><span className="highlight">{item.title}</span></h3>
                        <div className="text-container">
                            {item.description && (
                                <ul className="header-content-section">
                                    {item.description && item.description.map((pair, idx) => (
                                        <>
                                        <li key={idx} className="header-content-item">
                                            <h5 className="header">{pair.header}</h5>
                                            <p className="content">{pair.content}</p>
                                        </li>
                                        
                                        </>
                                        
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
