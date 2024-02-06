import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './GalleryOverlay.css'
const GalleryOverlay: React.FC = () => {
    return (
        <>
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