import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './AboutSection.css'
const AboutSection: React.FC = () => {
    return (
        <section id="about">
            <div className="view">
                <img alt="" className="bg" src="images/bg/picjumbo/picjumbo.com_IMG_5790.jpg" />
                <div className="content pane">
                    <div className="container-fluid">
                        <div className="row hidden-xs hidden-sm">
                            <div className="col-md-4 colors-b">
                                <div className="row">
                                    <div className="col-xs-12 banner-cell">
                                        <h3 className="light-font-weight">Responsive</h3>
                                        <p className="title">Layout</p>
                                    </div>
                                    <div className="col-xs-12 success heading-b banner-cell">
                                        Responsive Styling
                                        <br /> Retina Ready
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 colors-c">
                                <div className="row">
                                    <div className="col-xs-12 banner-cell">
                                        <h3 className="light-font-weight">Parallax</h3>
                                        <p className="title">Effects</p>
                                    </div>
                                    <div className="col-xs-12 warning heading-c banner-cell">
                                        Highly Optimized
                                        <br /> Smooth Animations
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 colors-d">
                                <div className="row">
                                    <div className="col-xs-12 banner-cell">
                                        <h3 className="light-font-weight">Bootstrap</h3>
                                        <p className="title">Framework</p>
                                    </div>
                                    <div className="col-xs-12 info heading-d banner-cell">
                                        Adapted for Multicolor Sections
                                        <br /> Highly Customized
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <div className="view" id="how-we-work">
                <div className="content colors-h background-65-dark">
                    <div className="container">
                        <h3><span className="highlight">How</span> We Work</h3>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <p className="text-center">Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.</p>
                            </div>
                        </div>
                        <div className="row icon-set">
                            <div className="col-md-3 text-center">
                                <p>
                                    <i className="li_eye circle scroll-in-animation background-20 heading" data-animation="fadeInUp"></i>
                                </p>
                                <p className="title"><span className="underline-text">Awesome</span></p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <p>
                                    <i className="li_like circle scroll-in-animation background-20 heading" data-animation="fadeInUp"></i>
                                </p>
                                <p className="title"><span className="underline-text">Innovative</span></p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <p>
                                    <i className="li_paperplane circle scroll-in-animation background-20 heading" data-animation="fadeInUp"></i>
                                </p>
                                <p className="title"><span className="underline-text">Creative</span></p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <p>
                                    <i className="li_lab circle scroll-in-animation background-20 heading" data-animation="fadeInUp"></i>
                                </p>
                                <p className="title"><span className="underline-text">Experimental</span></p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;