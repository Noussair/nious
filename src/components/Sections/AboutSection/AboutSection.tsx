import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './AboutSection.css'
import { useSanityData } from '../../../sanity/hooks/useSanityData';
import { AboutSectionQuery } from '../../../sanity/queries/AboutSectionQuery';
const AboutSection: React.FC = () => {
    const { data, error, isLoading } = useSanityData<any>(AboutSectionQuery);
    if (error || !data) {
        return <div>ERROR ....</div>
    }

    if (isLoading) {
        return <div>LOADING ....</div>
    }
    return (
        <section id="about">
            <div className="view">
                <div className="content colors-e background-solid">
                    <div className="container">
                        <h2>{data.titleHighlighted} <span className='highlight'>{data.title}</span></h2>
                        <p className="header-details"><span className="highlight">{data.subTitle}</span> {data.subTitleHilighted}</p>
                        <p className="lead">{data.detail}</p>
                        <div className="row">
                            {data.sections && data.sections.map((section,idx) =>(
                                <div key={idx} className="col-md-4">
                                <div className="col-icon">
                                <div id="stepIcon" style={{ position: 'relative', zIndex: 10 }} dangerouslySetInnerHTML={{ __html: section?.icon?.svg }}></div>
                                </div>
                                <div className="col-content">
                                    <h4>{section.titleHighlighted} <span className="highlight">{section.title}</span></h4>
                                    <p>{section.text}</p>
                                </div>
                            </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;