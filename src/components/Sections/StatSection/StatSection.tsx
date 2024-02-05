
import React from 'react';

import './StatSection.css'
import { useSanityData } from '../../../sanity/hooks/useSanityData';
import { IStatSection } from '../../../types/numbersSection';
import { numbersQuery } from '../../../sanity/queries/numbersQuery';
const StatSection: React.FC = () => {
    const { data, error, isLoading } = useSanityData<IStatSection>(numbersQuery)

    if (error || !data) {
        return <div>ERROR ....</div>
    }

    if (isLoading) {
        return <div>LOADING ....</div>
    }
    return (
        <section id="numbers">
            <div className="view" id="numbers">
                <div className="content half-size colors-h">
                    <div className="container-fluid">
                        <h2> <span className='highlight' >{data.title}</span> {data.highlightTitle} </h2>
                        <p className="title">{data.subtitle}</p>
                        <div className="row counters">
                            {data.stats && data.stats.map(
                                (stat, idx) => (
                                    <div key={idx} className={`col-md-3 counter ${idx % 2 !== 0 ? 'background-35-h' : 'background-35-b'}`}>
                                        <div className="count player row heading background-10-light">{stat.number}</div>
                                        <div className="caption">{stat.caption}</div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="container">
                        <p className="text-center ">{data.footerText}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatSection;