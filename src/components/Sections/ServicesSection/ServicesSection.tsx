import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './ServicesSection.css'
const ServicesSection: React.FC = () => {
    return (
        <section id="services">
        <div className="view">
            <div className="content colors-e background-solid">
                <div className="container">
                    <h2>Services</h2>
                    <p className="header-details"><span className="highlight">We Are Here</span> For You</p>
                    <p className="lead">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="row">
                        <div className="col-md-3 top-line">
                            <h4>Web<br />Design</h4>
                            <p className="highlight">Duis ipsum dolor sit amet incididunt ut labore et dolore magna.</p>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <ul className="simple">
                                <li>Responsive design</li>
                                <li>Template development</li>
                                <li>Rich media banners</li>
                                <li>Frontend development</li>
                                <li>Backend development</li>
                                <li>Content creation</li>
                                <li>Content audit</li>
                                <li>Copywriting</li>
                                <li>Photography</li>
                            </ul>
                        </div>
                        <div className="col-md-3 top-line">
                            <h4>Internet<br />Marketing</h4>
                            <p className="highlight">Excepteur ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            <p>Excepteur sint occaecat elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <ul className="simple">
                                <li>Facebook advertising</li>
                                <li>SEO and SEM</li>
                                <li>Facebook apps</li>
                                <li>Context advertising</li>
                                <li>Rich media banners</li>
                                <li>Game development</li>
                                <li>Content creation</li>
                                <li>Testing</li>
                            </ul>
                        </div>
                        <div className="col-md-3 top-line">
                            <h4>Digital<br />production</h4>
                            <p className="highlight">Lorem ipsum dolor sit amet, consectetur adipisicing elit eiusmod consequat.</p>
                            <p>Duis aute irure elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <ul className="simple">
                                <li>Rich media banners</li>
                                <li>Audio production</li>
                                <li>Photography</li>
                                <li>Design</li>
                                <li>Content creation</li>
                                <li>Content audit</li>
                                <li>Project management</li>
                                <li>Technical requirements</li>
                                <li>Testing</li>
                            </ul>
                        </div>
                        <div className="col-md-3 top-line">
                            <h4>Application<br />Development</h4>
                            <p className="highlight">Commodo ipsum dolor sit amet dolore magna aliqua.</p>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <ul className="simple">
                                <li>Facebook apps</li>
                                <li>Brand immersion &amp; research</li>
                                <li>Competitive analysis</li>
                                <li>Stakeholder interviews</li>
                                <li>Content audit</li>
                                <li>Project/platform planning</li>
                                <li>Technical requirements</li>
                                <li>Testing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="view">
            <img alt="" className="bg" src="images/bg/pexels/art-brush-colors-3112.jpg" />
            <img alt="" className="bg" src="images/bg/picjumbo/picjumbo.com_IMG_4563.jpg" />
            <img alt="" className="bg" src="images/bg/picjumbo/picjumbo.com_HNCK1805.jpg" />
            <div className="content half-size colors-h">
                <div className="container">
                    <div className="show-list slogan">
                        <div className="show-item">We Are Designers</div>
                        <div className="show-item">We Are Programmers</div>
                        <div className="show-item">We Are Coders</div>
                        <div className="show-item">We Are Developers</div>
                        <div className="show-item">We Are Creative</div>
                    </div>
                    <div className="separator"></div>
                    <p className="text-center big-font">
                        <em>— Lorem ipsum dolor sit amet —</em>
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServicesSection;