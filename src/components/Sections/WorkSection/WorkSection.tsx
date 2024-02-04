import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './WorkSection.css'
const WorkSection: React.FC = () => {
    return (
        <section id="work">
        <div className="view">
            <div className="content no-bottom-padding colors-e background-solid">
                <div className="container">
                    <h2>Our <span className="highlight">Work</span></h2>
                    <p className="header-details"><span className="highlight">Some Recent</span> Projects</p>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                </div>
                <div className="gallery colors-h background-solid" data-default-group="all" data-overlay=".gallery-overlay">
                    <div className="container-fluid">
                        <div className="filter">
                            <ul className="nav nav-pills text-center">
                                <li><a className="hover-effect" data-group="all" href="#">All</a></li>
                                <li><a className="hover-effect" data-group="web" href="#">Web</a></li>
                                <li><a className="hover-effect" data-group="video" href="#">Video</a></li>
                                <li><a className="hover-effect" data-group="photography" href="#">Photography</a></li>
                                <li><a className="hover-effect" data-group="design" href="#">Design</a> </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="grid">
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["design"]'>
                                    <a href="#!portfolio-item-1.html" className="hover-overlay">
                                        <img alt="Project 1" src="images/portfolio/preview/1.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">Image</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-picture-o heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "web", "video"]'>
                                    <a href="#!portfolio-item-2.html" className="hover-overlay">
                                        <img alt="Project 2" src="images/portfolio/preview/2.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">YouTube Video</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-youtube-square heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "design"]'>
                                    <a href="#!portfolio-item-3.html" className="hover-overlay">
                                        <img alt="Project 3" src="images/portfolio/preview/3.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">Slider</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-th heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "web", "video"]'>
                                    <a href="#!portfolio-item-4.html" className="hover-overlay">
                                        <img alt="Project 4" src="images/portfolio/preview/4.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">Vimeo Video</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-vimeo-square heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "design"]'>
                                    <a href="#!portfolio-item-5.html" className="hover-overlay">
                                        <img alt="Project 5" src="images/portfolio/preview/5.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">Slider</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-th heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "web", "design"]'>
                                    <a href="#!portfolio-item-6.html" className="hover-overlay">
                                        <img alt="Project 6" src="images/portfolio/preview/6.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">Image</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-picture-o heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["design", "video", "web"]'>
                                    <a href="#!portfolio-item-7.html" className="hover-overlay">
                                        <img alt="Project 7" src="images/portfolio/preview/7.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">Vimeo Video</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-vimeo-square heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["web"]'>
                                    <a href="#!portfolio-item-8.html" className="hover-overlay">
                                        <img alt="Project 8" src="images/portfolio/preview/8.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">Image</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-picture-o heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "design", "video", "web"]'>
                                    <a href="#!portfolio-item-9.html" className="hover-overlay">
                                        <img alt="Project 9" src="images/portfolio/preview/9.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">YouTube Video</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-youtube-square heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "design"]'>
                                    <a href="#!portfolio-item-10.html" className="hover-overlay">
                                        <img alt="Project 10" src="images/portfolio/preview/10.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">Vimeo Video</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-vimeo-square heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "web"]'>
                                    <a href="#!portfolio-item-11.html" className="hover-overlay">
                                        <img alt="Project 11" src="images/portfolio/preview/11.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">Image</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-picture-o heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["web", "design"]'>
                                    <a href="#!portfolio-item-12.html" className="hover-overlay">
                                        <img alt="Project 12" src="images/portfolio/preview/12.jpg" />
                                        <div className="overlay background-90-a">
                                            <div className="hidden-xs">
                                                <p className="title heading-a">Slider</p>
                                                <p className="text-center heading-a"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                                                <p className="text-center"><i className="fa fa-th heading-a"></i></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default WorkSection;