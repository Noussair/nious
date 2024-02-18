import React, { useState } from 'react';
import { GalleryItem } from '../../../types/ourWorkSection';
import './GaleryItemDetail.css'; // Import the CSS file for styling
import { motion } from 'framer-motion';

interface GalleryItemDetailProps {
    item: GalleryItem;
    items: GalleryItem[];
    currentIndex: number | null;
    onNext: () => void;
    onPrevious: () => void;
    onClose: ()=> void;
    disableNext:boolean;
    disablePrivous:boolean;
}
const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

export const GalleryItemDetail: React.FC<GalleryItemDetailProps> = ({ item, disableNext, disablePrivous, onClose, currentIndex, onNext, onPrevious }) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="item-content">
            <div className='header'>
                <div className='next-previous'>
                    <button disabled={disablePrivous} className='nav-button' onClick={onPrevious}><i className="fa-solid fa-chevron-left"></i></button>
                    <button disabled={disableNext} className='nav-button' onClick={onNext}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div onClick={onClose} className='nav-button'><i className="fa-solid fa-x"></i></div>
            </div>
                    
            <div className="container">
                <motion.div 
                key={currentIndex}
                initial='hidden'
                animate={isLoading ? 'hidden' : 'visible'}
                exit="exit"
                variants={imageVariants}
                transition={{ duration: 1 }}
                className="row">
                    
                    {/* Image Section */}
                    <div className="col-md-6 image-section">
                        <motion.div
                            key={currentIndex}
                            className="image-container"
                            initial='hidden'
                            animate={isLoading ? 'hidden' : 'visible'}
                            exit="exit"
                            variants={imageVariants}
                            transition={{ duration: 1 }}
                        >
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
                        </motion.div>
                    </div>
                    {/* Text Section */}
                    <div className="col-md-6 text-section">
                        <h3><span className="highlight">{item.title}</span></h3>
                        <div className="text-container">
                            {item.description && (
                                <ul className="header-content-section">
                                    {item.description && item.description.map((pair, idx) => (
                                            <li key={idx} className="header-content-item">
                                                <h5 className="header">{pair.header}</h5>
                                                <p className="content">{pair.content}</p>
                                            </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
