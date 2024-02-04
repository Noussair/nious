import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './HomeSection.css'
const HomeSection: React.FC = () => {
    return (
        <section id="home">
        <div className="view">
            <div className="content home-suzi full-size colors-c background-40-dark">
                <div className="container">
                    <h2><span className="thin-font-weight">We <span className="highlight">Are</span></span></h2>
                    <h1 className="text-center">NIO<span className="highlight">US</span></h1>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <p className="title text-center">
                                Integer ligula ante, posuere et ante quis, eleifend eleifend ipsum. In sed odio mi vivamus dapibus gravida.
                            </p>
                        </div>
                    </div>
                    <p className="text-center"><a href="#about" className="button background-60-d heading-d border-hard">About Us</a><a href="#work" className="button background-60-f heading-f border-hard">Our Work</a></p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HomeSection;