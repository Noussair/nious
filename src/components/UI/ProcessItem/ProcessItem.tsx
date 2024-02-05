import React from 'react';
import { IProcessStep } from '../../../types/ProcessSection';

interface ProcessItemProps {
    item: IProcessStep;
    idx: number;
}

const ProcessItem: React.FC<ProcessItemProps> = ({ item, idx }) => (
    <div key={idx} className="col-md-3 process-step">
        <div className="process-box">
            <div id="stepIcon" style={{ position: 'relative', zIndex: 10 }} dangerouslySetInnerHTML={{ __html: item?.icon?.svg }}></div>
        </div>
        <p className="title">{item.title}</p>
        <p className="text-center">{item.description}</p>
    </div>
);

export default ProcessItem;