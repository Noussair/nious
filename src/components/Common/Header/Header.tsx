import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './Header.css'
const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top page-transition colors-e background-solid" role="navigation" id="top-nav">
            <div className="container">
                <div className="navbar-header">
                    {/* <a className="menu-toggle ext-nav-toggle visible-xs-block" data-target=".ext-nav" href="#"><span></span></a> */}
                    <a className="menu-toggle navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" href="#"><span></span></a>
                    <a className="navbar-brand" href="">NIO<span className="highlight">US</span></a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#home" className="hover-effect">Home</a></li>
                        <li><a href="#about" className="hover-effect">About</a></li>
                        <li><a href="#team" className="hover-effect">Team</a></li>
                        <li><a href="#work" className="hover-effect">Work</a></li>
                        <li><a href="#process" className="hover-effect">Process</a></li>
                        <li><a href="#skills" className="hover-effect">Skills</a></li>
                        <li><a href="#contact" className="hover-effect">Contact</a></li>
                        {/* <li className="hidden-xs"><a className="menu-toggle ext-nav-toggle" data-target=".ext-nav" href="#"><span></span></a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;