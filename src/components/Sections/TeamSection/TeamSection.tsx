import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './TeamSection.css'
const TeamSection: React.FC = () => {
    return (
        <section id="team">
        <div className="view">
            <div className="content colors-e background-solid">
                <div className="container">
                    <h2>Team</h2>
                    <p className="header-details"><span className="highlight">Who </span>We Are</p>
                    <p className="lead">Our success depends on the <strong className="highlight">strength of our team.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation.</p>
                    <div className="row">
                        <div className="col-md-3 col-sm-6  col-xs-6">
                            <div className="hover-overlay">
                                <img alt="Mike Johnson" src="images/our-team/1.jpg" title="Mike Johnson" className="fluid-width"/>
                                <div className="overlay background-90-b">
                                    <div>
                                        <p className="text-center text-uppercase heading-b">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div className="separator-small"></div>
                                        <p className="text-center">
                                            <a target="_blank" href="https://www.facebook.com/"><i className="fa fa-facebook heading-b"></i></a>
                                            <a target="_blank" href="https://www.youtube.com/"><i className="fa fa-youtube heading-b"></i></a>
                                            <a target="_blank" href="https://github.com/"><i className="fa fa-github heading-b"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="caption">
                                <p>
                                    <span className="title">Mike Johnson</span>
                                    <br/>
                                    <span className="highlight">CEO &amp; Founder</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6  col-xs-6">
                            <div className="hover-overlay">
                                <img alt="Jessica Specter" src="images/our-team/2.jpg" title="Jessica Specter" className="fluid-width"/>
                                <div className="overlay background-90-b">
                                    <div>
                                        <p className="text-center text-uppercase heading-b">
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <div className="separator-small"></div>
                                        <p className="text-center">
                                            <a target="_blank" href="https://twitter.com/"><i className="fa fa-twitter heading-b"></i></a>
                                            <a target="_blank" href="https://www.linkedin.com/"><i className="fa fa-linkedin heading-b"></i></a>
                                            <a target="_blank" href="https://plus.google.com/"><i className="fa fa-google-plus heading-b"></i></a>
                                            <a target="_blank" href="https://vimeo.com/"><i className="fa fa-vimeo-square heading-b"></i></a>
                                            <a target="_blank" href="https://www.tumblr.com/"><i className="fa fa-tumblr heading-b"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="caption">
                                <p>
                                    <span className="title">Jessica Specter</span>
                                    <br/>
                                    <span className="highlight">Creative Director</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6  col-xs-6">
                            <div className="hover-overlay">
                                <img alt="Lynda Smith" src="images/our-team/3.jpg" title="Lynda Smith" className="fluid-width"/>
                                <div className="overlay background-90-b">
                                    <div>
                                        <p className="text-center text-uppercase heading-b">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                        <div className="separator-small"></div>
                                        <p className="text-center">
                                            <a target="_blank" href="https://www.flickr.com/"><i className="fa fa-flickr heading-b"></i></a>
                                            <a target="_blank" href="https://www.dropbox.com/"><i className="fa fa-dropbox heading-b"></i></a>
                                            <a target="_blank" href="https://www.xing.com/"><i className="fa fa-xing heading-b"></i></a>
                                            <a target="_blank" href="http://vk.com/"><i className="fa fa-vk heading-b"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="caption">
                                <p>
                                    <span className="title">Andrew Miles</span>
                                    <br/>
                                    <span className="highlight">Developer</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6  col-xs-6">
                            <div className="hover-overlay">
                                <img alt="Lynda Smith" src="images/our-team/4.jpg" title="Lynda Smith" className="fluid-width"/>
                                <div className="overlay background-90-b">
                                    <div>
                                        <p className="text-center text-uppercase heading-b">
                                            Exercitation ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <div className="separator-small"></div>
                                        <p className="text-center">
                                            <a target="_blank" href="https://twitter.com/"><i className="fa fa-twitter heading-b"></i></a>
                                            <a target="_blank" href="https://www.linkedin.com/"><i className="fa fa-linkedin heading-b"></i></a>
                                            <a target="_blank" href="https://plus.google.com/"><i className="fa fa-google-plus heading-b"></i></a>
                                            <a target="_blank" href="https://vimeo.com/"><i className="fa fa-vimeo-square heading-b"></i></a>
                                            <a target="_blank" href="https://www.tumblr.com/"><i className="fa fa-tumblr heading-b"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="caption">
                                <p>
                                    <span className="title">Lynda Smith</span>
                                    <br/>
                                    <span className="highlight">Programmer</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3><span className="highlight">We want to change</span><br/>peoples lives</h3>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <p className="text-center">Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default TeamSection;