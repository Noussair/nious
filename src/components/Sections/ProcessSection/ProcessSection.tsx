import React from 'react';
import './ProcessSection.css'
import { useSanityData } from '../../../sanity/hooks/useSanityData';
import { ProcessSchemaQuery } from '../../../sanity/queries/ProcessSchemaQuery';
import { IProcessSection } from '../../../types/ProcessSection'
import ProcessItem from '../../UI/ProcessItem/ProcessItem';



const ProcessSection: React.FC = () => {
    const { data, error, isLoading } = useSanityData<IProcessSection>(ProcessSchemaQuery)

    if (error || !data) {
        return <div>ERROR ....</div>
    }

    if (isLoading) {
        return <div>LOADING ....</div>
    }

    return (
        <section id="process">
            <div className="view">
                <div className="content colors-e background-solid">
                    <div className="container">

                        <h2>{data.sectionTitle} <span className="highlight">{data.highlightedTitle}</span></h2>
                        <p className="header-details"><span className="highlight">{data.headerText}</span> {data.headerHighlight}</p>
                        <p className="lead">{data.description}</p>
                        <div className="process">
                            <div className="row process-row">
                                {data.processSteps && data.processSteps.map(
                                    (step, index) =>
                                        <ProcessItem key={index} item={step} idx={index} />
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <p className="text-center">{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;