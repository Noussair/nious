import React from 'react';
import './Sides.css'
const Sides: React.FC = () => {
 return (
    <>
    <div className="ext-nav background-95-h page-transition">
			<div className="view half-height">
				<img alt="" className="bg static" src="images/bg/JohnKraus/2.jpg" />
				<div className="content no-top-padding no-bottom-padding  full-height">
					<div className="container-fluid  full-height">
						<div className="row full-height">
							<a href="blog.html" className="col-md-6 colors-a background-95 full-height">
								<div>
									<span className="side-label">All The Latest</span>
									<span className="side-title">Blog</span>
								</div>
							</a>
							<a href="help.html" className="col-md-6 colors-f background-95-f full-height">
								<div>
									<span className="side-label">Documentation</span>
									<span className="side-title">Help</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid  half-height">
				<div className="row full-height">
					<a href="#how-we-work" className="col-md-4 colors-g background-solid full-height border-bottom border-lite">
						<div>
							<span className="side-label">Awesome</span>
							<span className="side-title">How We Work</span>
						</div>
					</a>
					<a href="#who-we-are" className="col-md-4 colors-g background-solid full-height border-bottom border-left border-lite">
						<div>
							<span className="side-label">We Are Designers</span>
							<span className="side-title">Who We Are</span>
						</div>
					</a>
					<a href="#numbers" className="col-md-4 colors-g background-solid full-height border-bottom border-left border-lite">
						<div>
							<span className="side-label">Some Facts</span>
							<span className="side-title">Our Numbers</span>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div className="page-border bottom colors-e background-solid"><a href="#top" className="hover-effect">To <span className="highlight">Top</span></a></div>
		<div className="page-border left colors-e background-solid">
		</div>
		<div className="page-border right colors-e background-solid"></div>
    </>
   
 );
};

export default Sides;