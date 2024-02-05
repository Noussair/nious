import React, { useState } from 'react';

import './SkillsSection.css'
import { useSanityData } from '../../../sanity/hooks/useSanityData';
import { ISkillsSection } from '../../../types/skillsSection';
import { skillsQuery } from '../../../sanity/queries/skillsQuery';
const SkillsSection: React.FC = () => {
    const { data, error, isLoading } = useSanityData<ISkillsSection>(skillsQuery)
    const [activeTab,setActiveTab] = useState(0)

    if (error || !data) {
        return <div>ERROR ....</div>
    }

    if (isLoading) {
        return <div>LOADING ....</div>
    }
    return (
        <section id="skills">
            <div className="view">
                <div className="content colors-e background-solid">
                    <div className="container">
                        <h2>{data.highlight} <span className="highlight">{data.title}</span></h2>
                        <p className="header-details"><span className="highlight">{data.subtitle}</span> {data.subhighlight}</p>
                        <p className="lead">{data.description}</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="widget-tabs nav nav-tabs background-lite-e">
                                    {data.skills && data.skills.map((skill, idx) => (
                                        <li onClick={()=>setActiveTab(idx)} className={idx === 0 ? "active" : ""}><a href={`#${skill.name}`} data-toggle="tab">{skill.name}</a></li>
                                    ))}

                                </ul>
                                <div className="tab-content">
                                    {data.skills && data.skills.map((skill, idx) => (
                                        <div key={idx} hidden={activeTab !== idx} className={`tab-pane fade in ${activeTab === idx ? 'active':''}`} id={skill.name}>
                                            <p>{skill.description}</p>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skillbars">
                                    {data.skills && data.skills.map((skill, idx) => (
                                        <div key={idx} className="skillbar clearfix" data-percent={`${skill.percentage}%`}>
                                        <div className="skillbar-title background-b heading-b"><span>{skill.name}</span></div>
                                            <div className="skillbar-bar background-b"></div>
                                            <div className="skill-bar-percent heading-d">{skill.percentage}%</div>
                                        </div>
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

export default SkillsSection;