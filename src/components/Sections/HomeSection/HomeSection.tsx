import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './HomeSection.css'
import { useSanityData } from '../../../sanity/hooks/useSanityData';
import { HeroSectionQuery } from '../../../sanity/queries/HeroSectionQuery';
const HomeSection: React.FC = () => {
    const { data, error, isLoading } = useSanityData<any>(HeroSectionQuery);
    if (error || !data) {
        return <div>ERROR ....</div>
    }

    if (isLoading) {
        return <div>LOADING ....</div>
    }
    return (
        <section id="home">
        <div className="view">
            <div className="content home-suzi full-size colors-c background-40-dark">
                <div className="container">
                    <h2><span className="thin-font-weight">{data.preTitleThin} <span className="highlight">{data.preTitleHighlighted}</span></span></h2>
                    <h1 className="text-center">{data.mainTitle}<span className="highlight">{data.mainTitleHighlighted}</span></h1>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <p className="title text-center">
                                {data.description}
                            </p>
                        </div>
                    </div>
                    <p className="text-center"><a href="#about" className="button background-60-d heading-d border-hard">About Us</a><a href="#work" className="button background-60-f heading-f border-hard">Our Work</a></p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HomeSection;