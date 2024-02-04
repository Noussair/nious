import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './GalleryOverlay.css'
const GalleryOverlay: React.FC = () => {
    return (
        <>
        <div className="overlay-window gallery-overlay colors-g background-95-g" data-overlay-zoom="#work .content">
        <div className="overlay-control background-90-b">
            <a className="previos" href="#"></a>
            <a className="next" href="#"></a>
            <a className="cross" href="#"></a>
        </div>
        <div className="overlay-view"></div>
        <ul className="loader">
            <li className="background-highlight-e"></li>
            <li className="background-highlight-e"></li>
            <li className="background-highlight-e"></li>
        </ul>
    </div>
    <div className="overlay-window map-overlay colors-g background-95-g">
        <div className="overlay-control background-20-b">
            <a className="cross" href="#"></a>
        </div>
        <div className="overlay-view">
            <div className="map-canvas" data-latitude="42.487606" data-longitude="-71.115661" data-zoom="14">
                <div className="map-marker" data-latitude="42.487606" data-longitude="-71.115661" data-text="Our awesome location"></div>
                <div className="map-marker" data-latitude="42.485100" data-longitude="-71.113256" data-text="Our sales office"></div>
            </div>
        </div>
    </div>
    <div className="overlay-window credits-overlay colors-g background-95-g">
        <div className="overlay-control background-90-b">
            <a className="cross" href="#"></a>
        </div>
        <div className="overlay-view">
            <div className="content-container">
                <h3>Credits</h3>
                <ul>
                    <li>
                        Photos by:
                        <ul>
                            <li><a target="_blank" href="https://www.flickr.com/photos/katya_alagich/">Katya Alagich</a>, <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0 License</a></li>
                            <li><a target="_blank" href="https://www.flickr.com/photos/65047661@N00/">Jim Lukach</a>, <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0 License</a></li>
                            <li><a target="_blank" href="https://www.flickr.com/photos/johanl/">Johan Larsson</a>, <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0 License</a></li>
                            <li><a target="_blank" href="https://www.flickr.com/photos/johny/">John Kraus</a>, <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0 License</a></li>
                            <li><a target="_blank" href="https://www.flickr.com/photos/geishaboy500/">THOR</a>, <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0 License</a></li>
                            <li><a target="_blank" href="https://www.flickr.com/photos/stf-o/">stephane</a>, <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0 License</a></li>
                            <li><a target="_blank" href="http://www.pexels.com/">Pexels</a>, <a target="_blank" href="http://www.pexels.com/photo-license/">CC0 License</a></li>
                            <li><a target="_blank" href="https://stocksnap.io/">Stocksnap</a>, <a target="_blank" href="https://stocksnap.io/license">CC0 License</a></li>
                            <li><a target="_blank" href="http://picjumbo.com/">Picjumbo</a>, <a target="_blank" href="http://picjumbo.com/about-author/">Picjumbo License</a></li>
                        </ul>
                    </li>
                    <li>
                        Video by:
                        <ul>
                            <li><a target="_blank" href="http://mazwai.com/">Mazwai</a>, <a target="_blank" href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0 License</a></li>
                        </ul>
                    </li>
                    <li>
                        Icons by:
                        <ul>
                            <li><a target="_blank" href="http://designmodo.com/">Designmodoh</a>, <a target="_blank" href="http://designmodo.com/linecons-free/">License</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="gate colors-e background-solid">
        <div className="gate-bar background-heading-e"></div>
        <ul className="loader">
            <li className="background-heading-e"></li>
            <li className="background-heading-e"></li>
            <li className="background-heading-e"></li>
        </ul>
    </div>
        </>
    );
};

export default GalleryOverlay;