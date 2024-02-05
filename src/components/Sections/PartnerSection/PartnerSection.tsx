


import React from 'react';

import './PartnerSection.css'
import { useSanityData } from '../../../sanity/hooks/useSanityData';
import { IPartnersSection } from '../../../types/partnersSection';
import { partnersQuery } from '../../../sanity/queries/partnersQuery';
const PartnersSection: React.FC = () => {
    const { data, error, isLoading } = useSanityData<IPartnersSection>(partnersQuery)

    if (error || !data) {
        return <div>ERROR ....</div>
    }

    if (isLoading) {
        return <div>LOADING ....</div>
    }
    return (
        <section id="partners">
            <div className="view" id="how-we-work">
                <div className="content colors-h background-65-dark">
                    <div className="container">
                        <h2><span className="highlight">{data.sectionTitleHighlight}</span> {data.sectionTitle}</h2>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <p className="lead">{data.description}</p>
                            </div>
                        </div>
                        <div className="row icon-set">
                            {data.partners && data.partners.map((item,idx)=>(
                                <div key={idx} className="col-md-3 text-center">
                                <p>
                                    <img src={item.imageUrl} className="circle scroll-in-animation background-20 heading" data-animation="fadeInUp" />
                                </p>
                                <p className="title"><span className="underline-text">{item.name}</span></p>
                                <p>{item.description}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;