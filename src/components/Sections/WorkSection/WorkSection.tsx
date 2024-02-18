import React, { useState } from 'react';
import './WorkSection.css'
import { useSanityData } from '../../../sanity/hooks/useSanityData';
import { GalleryItem, IWorkSection } from '../../../types/ourWorkSection';
import { ourWorkSectionQuery } from '../../../sanity/queries/ourWorkQuery';
import { CategoryFilters } from '../../UI/CategoryFilters/CategoryFilters';
import GalleryItemCard from '../../UI/GaleryItem/GaleryItem';
import Modal from '../../Common/Modal/Modal';
import { useRecoilState } from 'recoil';
import { modalState, selectedItemState } from '../../../state/state';
import {GalleryItemDetail} from '../../UI/GaleryItemDetail/GaleryItemDetail';

const WorkSection: React.FC = () => {
    const { data, error, isLoading } = useSanityData<IWorkSection>(ourWorkSectionQuery)
    const [activeCategory] = useState('all');
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const filteredGalleryItems = data?.gallery.filter(item =>
        activeCategory === 'all' || item.categories.some(category => category._id === activeCategory)
    );

    const [showModal, setShowModal] = useRecoilState(modalState);
    const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
  
    const handleItemClick = (item: GalleryItem, index: number) => {
        setSelectedItem(item);
        setCurrentIndex(index);
        setShowModal(true);
      };
  
    const handleNext = () => {
    if (currentIndex !== null && currentIndex < filteredGalleryItems.length -  1) {
        setCurrentIndex(currentIndex +  1);
        setSelectedItem(filteredGalleryItems[currentIndex +  1]);
    }
    };
    
    const handlePrevious = () => {
    if (currentIndex !== null && currentIndex >  0) {
        setCurrentIndex(currentIndex -  1);
        setSelectedItem(filteredGalleryItems[currentIndex -  1]);
    }
    };

    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedItem(null);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data || error) {
        return <div>Error...</div>
    }



    return (
        <section id="work">
            <div className="view">
                <div className="content no-bottom-padding colors-e background-solid">
                    <div className="container">
                        <h2>{data.title} <span className="highlight">{data.highlightTitle}</span></h2>
                        <p className="header-details"><span className="highlight">{data.headerDetails}</span> {data.highlightHeaderDetails}</p>
                        <p className="lead">{data.leadText}</p>
                    </div>
                    <div className="gallery colors-h background-solid" data-default-group="all" data-overlay=".gallery-overlay">
                        <div className="container-fluid">
                            <CategoryFilters categories={data.categories} />
                            <div className="row">
                                <div className="grid">
                                    {filteredGalleryItems && filteredGalleryItems.map((item, idx) => (
                                        <GalleryItemCard onClick={() => handleItemClick(item,idx)} key={idx} item={item} idx={idx} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal  show={showModal} onClose={handleCloseModal}>
    {selectedItem && <GalleryItemDetail disablePrivous={currentIndex ===  0} disableNext={currentIndex === filteredGalleryItems.length -  1} onClose={handleCloseModal} item={selectedItem} items={filteredGalleryItems} currentIndex={currentIndex} onNext={handleNext} onPrevious={handlePrevious} />}
</Modal>
        </section>
    );
};

export default WorkSection;