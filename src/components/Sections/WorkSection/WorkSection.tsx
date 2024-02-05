import React, { useState } from 'react';
import './WorkSection.css'
import { useSanityData } from '../../../sanity/hooks/useSanityData';
import { IWorkSection } from '../../../types/ourWorkSection';
import { ourWorkSectionQuery } from '../../../sanity/queries/ourWorkQuery';
import { CategoryFilters } from '../../UI/CategoryFilters/CategoryFilters';
import GalleryItemCard from '../../UI/GaleryItem/GaleryItem';
const WorkSection: React.FC = () => {
    const { data, error, isLoading } = useSanityData<IWorkSection>(ourWorkSectionQuery)
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredGalleryItems = data?.gallery.filter(item =>
        activeCategory === 'all' || item.categories.some(category => category._id === activeCategory)
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if(!data || error){
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
                                <div  className="grid">
                                    {filteredGalleryItems && filteredGalleryItems.map((item, idx) => (
                                        <GalleryItemCard key={idx} item={item} idx={idx} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;