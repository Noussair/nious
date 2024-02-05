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
							<li><a href="help.html">Documentation</a></li>
							<li><a href="blog.html">Blog</a></li>
							<li><a href="#how-we-work">How We Work</a></li>
							<li><a href="#who-we-are">Who We Are</a></li>
							<li><a href="#numbers">Our Numbers</a></li>
						</ul>
					</div>
					<div className="col-md-3">
						<h5>Recent Posts</h5>
						<ul className="simple">
							<li><a href="blog-single-1.html">Post with Featured Image</a></li>
							<li><a href="blog-single-2.html">And Post with Slider</a></li>
							<li><a href="blog-single-3.html">Post with Vimeo Video</a></li>
							<li><a href="blog-single-4.html">Another Post with Image</a></li>
							<li><a href="blog.html">More...</a></li>
						</ul>
					</div>
					<div className="col-md-3">
						<h5>Photo Stream</h5>
						<div className="photo">
							<div className="col-xs-3 col-sm-2 col-md-4">
								<a target="_blank" href="https://www.flickr.com/photos/we-are-envato/12333983853" title="Melbourne Meetup by Envato, on Flickr">
                                    <img className="fluid-width" src="https://farm8.staticflickr.com/7367/12333983853_8fc462a494_q.jpg" alt="Melbourne Meetup"/></a>
							</div>
							<div className="col-xs-3 col-sm-2 col-md-4">
								<a target="_blank" href="https://www.flickr.com/photos/we-are-envato/13090549273" title="Around the Envato Office - Highfive! by Envato, on Flickr">
                                    <img className="fluid-width" src="https://farm8.staticflickr.com/7325/13090549273_ee5c732ce1_q.jpg" alt="Around the Envato Office - Highfive!"/></a>
							</div>
							<div className="col-xs-3 col-sm-2 col-md-4">
								<a target="_blank" href="https://www.flickr.com/photos/we-are-envato/12333834195" title="Melbourne Meetup by Envato, on Flickr">
                                    <img className="fluid-width" src="https://farm4.staticflickr.com/3798/12333834195_7dcb472dd5_q.jpg" alt="Melbourne Meetup"/></a>
							</div>
							<div className="col-xs-3 col-sm-2 col-md-4">
								<a target="_blank" href="https://www.flickr.com/photos/we-are-envato/13090422515" title="Around the Envato Office - Becca by Envato, on Flickr">
                                    <img className="fluid-width" src="https://farm3.staticflickr.com/2279/13090422515_cabc9c447c_q.jpg" alt="Around the Envato Office - Becca"/></a>
							</div>
							<div className="col-xs-3 col-sm-2 col-md-4">
								<a target="_blank" href="https://www.flickr.com/photos/we-are-envato/13090762874" title="Around the Envato Office - Ben &amp; Jane by Envato, on Flickr">
                                    <img className="fluid-width" src="https://farm4.staticflickr.com/3596/13090762874_5f9d99f4e5_q.jpg" alt="Around the Envato Office - Ben &amp; Jane"/></a>
							</div>
							<div className="col-xs-3 col-sm-2 col-md-4">
								<a target="_blank" href="https://www.flickr.com/photos/we-are-envato/13090456565" title="Around the Envato Office - Selina by Envato, on Flickr">
                                    <img className="fluid-width" src="https://farm4.staticflickr.com/3715/13090456565_df81e68627_q.jpg" alt="Around the Envato Office - Selina"/></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom text-center background-5-b">
				© 2023 All Rights Reserved. <a href="#" className="open-overlay-window heading" data-overlay-window=".credits-overlay">Credits.</a>
			</div>
		</footer>
        </>
    );
};

export default Footer;