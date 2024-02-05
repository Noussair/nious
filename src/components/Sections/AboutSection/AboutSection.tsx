import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './AboutSection.css'
const AboutSection: React.FC = () => {
    return (
        <section id="about">
            <div className="view">
                <div className="content colors-e background-solid">
                    <div className="container">
                        <h2>About</h2>
                        <p className="header-details"><span className="highlight">We Create</span> Awesome Stuff</p>
                        <p className="lead">We are <span className="highlight">Creative Team</span> located in Kalura, Bovlandia. Tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="col-icon">
                                    <i className="li_bulb"></i>
                                </div>
                                <div className="col-content">
                                    <h4>Web <span className="highlight">Development</span></h4>
                                    <p>Praesent sodales, quam vitae gravida interdum, ex mi bibendum enim, sit amet tristique mi quam vel odio. Donec non nunc condimentum, hendrerit elit sed, condimentum magna. Suspendisse imperdiet purus vel ornare cursus.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="col-icon">
                                    <i className="li_t-shirt"></i>
                                </div>
                                <div className="col-content">
                                    <h4>Internet <span className="highlight">Marketing</span></h4>
                                    <p>Curabitur et diam elementum, mollis tortor a, malesuada turpis. Vivamus gravida, justo et molestie sollicitudin, erat lorem tempus eros, vel laoreet nibh urna ac nunc, vestibulum neque vitae pellentesque efficitur.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="col-icon">
                                    <i className="li_megaphone"></i>
                                </div>
                                <div className="col-content">
                                    <h4>Client <span className="highlight">Support</span></h4>
                                    <p>Sed porta erat vel ipsum maximus, eget maximus est maximus. Maecenas at venenatis nibh, sit amet suscipit odio. In feugiat vehicula dui. In felis enim, maximus a dolor semper efficitur elit euismod magna quis commodo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;