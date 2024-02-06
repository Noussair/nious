import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './Footer.css'
const Footer: React.FC = () => {
    return (
        <>
        <footer className="colors-g page-transition non-preloading">
			<div className="container scroll-in-animation" data-animation="fadeInDown">
				<div className="row">
					<div className="col-md-3">
						<h4>NIO<span className="highlight">US</span></h4>
						<div className="footer-description">
							<p>Mauris metus tellus, lacinia nec efficitur quis, rhoncus et mi.</p>
						</div>
					</div>
					<div className="col-md-3">
						<h5>Additional Links</h5>
						<ul className="simple">
							<li><a href="#how-we-work">How We Work</a></li>
							<li><a href="#who-we-are">Who We Are</a></li>
							<li><a href="#numbers">Our Numbers</a></li>
							<li><a href="#team">Our Team</a></li>
						</ul>
					</div>

				</div>
			</div>
			<div className="bottom text-center background-5-b">
				© 2024 All Rights Reserved.
			</div>
		</footer>
        </>
    );
};

export default Footer;