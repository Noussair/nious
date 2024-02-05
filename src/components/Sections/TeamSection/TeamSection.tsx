import React from 'react';
import './TeamSection.css'
import {useSanityData} from '../../../sanity/hooks/useSanityData'
import {TeamSchema} from '../../../types/TeamSection'
import { teamSchemaQuery } from '../../../sanity/queries/teamSchemaQuery';
const TeamSection: React.FC = () => {
    const {data,isLoading} = useSanityData<TeamSchema>(teamSchemaQuery)
    return (
    <section id="team">
      <div className="view">
        <div className="content colors-e background-solid">
          <div className="container">
            
            <h2>{data?.teamSection?.title}</h2>
            <p className="header-details">
              {data?.teamSection?.headerDetails}
            </p>
            <p className="lead">
              {data?.teamSection?.lead}
            </p>
            <div className="row">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                data?.teamMembers?.map((member, index) => (
                  <div key={index} className="col-md-3 col-sm-6 col-xs-6">
                    <div className="hover-overlay">
                      <img alt={member.name} src={member.imageUrl} title={member.name} className="fluid-width" />
                      <div className="overlay background-90-b">
                        <div>
                          <p className="text-center text-uppercase heading-b">{member.description}</p>
                          <div className="separator-small"></div>
                          <p className="text-center">
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="caption">
                      <p>
                        <span className="title">{member.name}</span>
                        <br />
                        <span className="highlight">{member.position}</span>
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <h3>
              <span className="highlight">{data?.mission?.subheading}</span>
              <br />{data?.mission?.subsubheading}
            </h3>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <p className="text-center">
                  {data?.mission?.additionalText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default TeamSection;