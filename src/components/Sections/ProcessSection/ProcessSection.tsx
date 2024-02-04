import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './ProcessSection.css'
const ProcessSection: React.FC = () => {
    return (
        <section id="process">
        <div className="view">
            <div className="content colors-e background-solid">
                <div className="container">
                    <h2>Our <span className="highlight">Process</span></h2>
                    <p className="header-details"><span className="highlight">We Make</span> Our Customers Happy</p>
                    <p className="lead">Curabitur eget nulla ut neque aliquam dictum. Nam sollicitudin leo dui, non malesuada felis aliquam non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus finibus tempor neque vel scelerisque. Cras nec ex ut eleifend mollis ut a nibh. Vivamus commodo est sit amet ultricies.</p>
                    <div className="process">
                        <div className="row process-row">
                            <div className="col-md-3 process-step">
                                <div className="process-box"><i className="li_search heading"></i></div>
                                <p className="title">Research</p>
                                <p className="text-center">Vestibulum placerat, ipsum vel mollis ornare, libero ex dapibus diam, gravida tempor.</p>
                            </div>
                            <div className="col-md-3 process-step">
                                <div className="process-box"><i className="li_pen heading"></i></div>
                                <p className="title">Concept</p>
                                <p className="text-center">Vestibulum vel dictum dolor, eget luctus risus. Nullam scelerisque viverra nisl et vehicula, in ut tellus.</p>
                            </div>
                            <div className="col-md-3 process-step">
                                <div className="process-box"><i className="li_settings heading"></i></div>
                                <p className="title">Develop</p>
                                <p className="text-center">Mauris venenatis vulputate ligula eu finibus. Donec pretium libero lacus, vitae maximus purus dapibus.</p>
                            </div>
                            <div className="col-md-3 process-step">
                                <div className="process-box"><i className="li_paperplane heading"></i></div>
                                <p className="title">Test</p>
                                <p className="text-center">Proin gravida, est sed vestibulum cursus, enim libero sollicitudin lacus, vel ornare nunc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <p className="text-center">Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="view" id="numbers">
            <img alt="" className="bg" src="images/bg/picjumbo/picjumbo.com_IMG_7432.jpg" /><img alt="" className="bg" src="images/bg/pexels/coffee-coffee-machine-cup-3042.jpg" />
            <div className="content half-size colors-h">
                <div className="container-fluid">
                    <h3>Our <span className="highlight">Numbers</span></h3>
                    <p className="title"><span className="highlight">Some of the</span> cool facts about us</p>
                    <div className="row counters">
                        <div className="col-md-3 counter background-35-b">
                            <div className="count player row heading background-10-light">210</div>
                            <div className="caption">Projects</div>
                        </div>
                        <div className="col-md-3 counter background-35-h">
                            <div className="count player row heading background-10-light">120</div>
                            <div className="caption">Clients</div>
                        </div>
                        <div className="col-md-3 counter background-35-b">
                            <div className="count player row heading background-10-light">3459</div>
                            <div className="caption">Followers</div>
                        </div>
                        <div className="col-md-3 counter background-35-h">
                            <div className="count player row heading background-10-light">7</div>
                            <div className="caption">Years</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p className="text-center ">Donec vulputate sit amet dolor vel pharetra donec pharetra.</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ProcessSection;