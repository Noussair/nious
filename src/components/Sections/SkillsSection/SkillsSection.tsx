import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './SkillsSection.css'
const SkillsSection: React.FC = () => {
    return (
        <section id="skills">
        <div className="view">
            <div className="content colors-e background-solid">
                <div className="container">
                    <h2>Our <span className="highlight">Skills</span></h2>
                    <p className="header-details"><span className="highlight">Our Main</span> Skills</p>
                    <p className="lead">Aliquam scelerisque vestibulum mi, eu commodo sem vestibulum convallis. Proin sed mi vehicula, porta nisi eu, facilisis nisl. Etiam tristique mi nec fermentum vestibulum. Nullam in nisi ut tellus laoreet ultrices. In ullamcorper dictum interdum vestibulum etiam tristique mi nec fermentum commodo sem vestibulum laoreet ultrices.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="widget-tabs nav nav-tabs background-lite-e">
                                <li className="active"><a href="#html5" data-toggle="tab">HTML5</a></li>
                                <li className=""><a href="#css3" data-toggle="tab">CSS3</a></li>
                                <li className=""><a href="#jquery-skill" data-toggle="tab">jQuery</a></li>
                                <li className=""><a href="#wordpress" data-toggle="tab">Wordpress</a></li>
                                <li className=""><a href="#seo" data-toggle="tab">SEO</a></li>
                                <li className=""><a href="#photoshop" data-toggle="tab">Photoshop</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade active in" id="html5">
                                    <p>Fusce hendrerit enim et lacus rutrum, fermentum consectetur mauris hendrerit. Mauris scelerisque, est eget convallis blandit, lorem est scelerisque dolor, non dapibus orci enim ut risus. Praesent rhoncus ex sit amet nunc luctus, nec eleifend erat suscipit. In feugiat dui eget gravida dignissim. Quisque sed dictum felis. Integer viverra iaculis nulla, a euismod est. Nulla nec felis ipsum. Phasellus sed scelerisque nisl, eu condimentum metus. Aenean convallis risus nec eleifend pharetra. Vivamus rhoncus eleifend mi in imperdiet. Nullam a justo quis dolor viverra elementum. Nam eleifend leo quis elementum cursus.</p>
                                </div>
                                <div className="tab-pane fade" id="css3">
                                    <p>Sed dapibus, leo ut egestas convallis, leo purus condimentum ipsum, sit amet lobortis odio nisi id enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi suscipit, mi in interdum volutpat, quam mi porta nisi, dapibus placerat sapien tortor eleifend arcu. Cras sit amet euismod mi, non imperdiet felis. Praesent eros nibh, ullamcorper ut suscipit sit amet, mattis sollicitudin lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis in enim sit amet nibh placerat consectetur id et enim. Nunc nec dui ac ligula posuere posuere vel id metus. Integer maximus eros nec lobortis tempor.</p>
                                </div>
                                <div className="tab-pane fade" id="jquery-skill">
                                    <p>Nam eget ex mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam blandit, enim nec rutrum maximus, odio purus maximus odio, vel mattis nisi ante ut velit. Nam ut turpis vel dolor maximus dictum. Donec blandit turpis ut vulputate facilisis. Nam est nisi, posuere vitae posuere in, viverra non tellus. Pellentesque congue, sapien eget sollicitudin sollicitudin, est leo imperdiet ante, facilisis viverra mi augue in leo. Vestibulum felis urna, pharetra et eros ut, mattis consequat mi. Curabitur id tortor mattis, aliquet eros hendrerit, mattis metus. Ut dignissim vel augue in congue. Nulla a ante ut mi scelerisque suscipit. Aenean condimentum turpis mi, sit amet ullamcorper mi commodo non.</p>
                                </div>
                                <div className="tab-pane fade" id="php">
                                    <p>Nulla egestas eu odio ac dictum. Phasellus eu odio lectus. Fusce luctus tempor mauris, vel accumsan leo. Nam libero velit, ultrices vel malesuada nec, euismod nec dolor. Maecenas congue erat sed maximus semper. Aliquam vestibulum magna sit amet pulvinar vestibulum. Cras semper condimentum ante, eget suscipit sapien. Sed ac urna nunc. Aenean viverra sem sit amet dolor pretium fringilla. Nam luctus tempus nibh vitae efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                                <div className="tab-pane fade" id="wordpress">
                                    <p>Fusce non commodo sapien, quis ultrices enim. Proin in placerat urna. Nulla luctus leo nec massa vestibulum consequat quis a quam. Maecenas et leo ut orci fringilla ornare non sit amet lectus. Donec ornare eros tortor, sit amet condimentum lectus placerat ut. Duis lacus neque, lacinia non nunc id, aliquet tincidunt orci. In tellus felis, posuere non est rhoncus, tincidunt elementum sapien. Sed non sagittis ante. Duis ultricies mi dolor, feugiat blandit metus ullamcorper nec. Nullam semper gravida consequat. Suspendisse potenti. Mauris sit amet nisi at enim lacinia dignissim. Aenean suscipit pulvinar ex, eu venenatis magna dapibus sit amet.</p>
                                </div>
                                <div className="tab-pane fade" id="seo">
                                    <p>Proin non augue posuere, iaculis tortor in, molestie lorem. Praesent ut gravida sem. Aenean sit amet lorem leo. Curabitur risus ante, pulvinar vel erat viverra, porttitor volutpat turpis. Praesent et sapien interdum, sollicitudin nisi non, bibendum leo. Duis posuere lectus velit, vel volutpat massa blandit non. Donec pellentesque vel magna ut dignissim. Pellentesque luctus fringilla eros, in tempus neque venenatis consectetur. Pellentesque purus mauris, laoreet eget augue in, pellentesque sagittis arcu. Etiam at blandit lectus, sit amet volutpat tellus.</p>
                                </div>
                                <div className="tab-pane fade" id="photoshop">
                                    <p>Donec ac consectetur neque, vel eleifend nisi. In et nibh at neque convallis tincidunt. Aliquam sodales odio vel malesuada interdum. Duis auctor malesuada lorem. Nulla sed neque ut dui imperdiet congue ut sit amet enim. Phasellus vel commodo dui. Aliquam eu eleifend diam, vitae dapibus velit. Suspendisse ac est hendrerit, mollis lectus vel, accumsan urna. Quisque sit amet iaculis libero, sed maximus justo. Nunc laoreet non libero eu vehicula. Vestibulum ex lectus, pharetra non elementum et, gravida quis mauris. Donec sodales odio eget accumsan blandit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skillbars">
                                <div className="skillbar clearfix background-d" data-percent="40%">
                                    <div className="skillbar-title background-b heading-b"><span>HTML5</span></div>
                                    <div className="skillbar-bar background-b"></div>
                                    <div className="skill-bar-percent heading-d">40%</div>
                                </div>
                                <div className="skillbar clearfix background-d" data-percent="45%">
                                    <div className="skillbar-title background-c heading-c"><span>CSS3</span></div>
                                    <div className="skillbar-bar background-c"></div>
                                    <div className="skill-bar-percent heading-d">45%</div>
                                </div>
                                <div className="skillbar clearfix background-d" data-percent="50%">
                                    <div className="skillbar-title background-b heading-b"><span>jQuery</span></div>
                                    <div className="skillbar-bar background-b"></div>
                                    <div className="skill-bar-percent heading-d">50%</div>
                                </div>
                                <div className="skillbar clearfix background-d" data-percent="40%">
                                    <div className="skillbar-title background-c heading-c"><span>PHP</span></div>
                                    <div className="skillbar-bar background-c"></div>
                                    <div className="skill-bar-percent heading-d">40%</div>
                                </div>
                                <div className="skillbar clearfix background-d" data-percent="90%">
                                    <div className="skillbar-title background-b heading-b"><span>Wordpress</span></div>
                                    <div className="skillbar-bar background-b"></div>
                                    <div className="skill-bar-percent heading-d">90%</div>
                                </div>
                                <div className="skillbar clearfix background-d" data-percent="75%">
                                    <div className="skillbar-title background-c heading-c"><span>SEO</span></div>
                                    <div className="skillbar-bar background-c"></div>
                                    <div className="skill-bar-percent heading-d">75%</div>
                                </div>
                                <div className="skillbar clearfix background-d" data-percent="70%">
                                    <div className="skillbar-title background-b heading-b"><span>Photoshop</span></div>
                                    <div className="skillbar-bar background-b"></div>
                                    <div className="skill-bar-percent heading-d">70%</div>
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

export default SkillsSection;