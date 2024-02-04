import React from 'react';
// interface HeaderProps {
//  title: string;
// }
import './ContactSection.css'
const ContactSection: React.FC = () => {
    return (
        <>
        <section id="contact">
			<div className="view">
				<img alt="" className="bg" src="images/bg/pexels/art-brush-colors-3112.jpg" />
                <img alt="" className="bg" src="images/bg/picjumbo/picjumbo.com_IMG_4563.jpg" />
                <img alt="" className="bg" src="images/bg/picjumbo/picjumbo.com_HNCK1805.jpg" />
				<div className="content full-size colors-h">
					<div className="container">
						<h2>Contact</h2>
						<p className="header-details">Keep In Touch</p>
						<div className="row">
							<div className="col-md-6">
								<div className="text-right scroll-in-animation" data-animation="fadeInLeft">
									<p className="big-font uppercase">
										Tel: <strong className="highlight">+7 (781) 503-1810</strong>
									</p>
									<p className="big-font uppercase">
										500 Unicorn Park Dr, 21st Floor
										<br/> Woburn, MA 01801, United States
									</p>
									<p className="big-font">
										<b>
									<a href="/cdn-cgi/l/email-protection#fa93949c95ba958f889b9e9e889f8989d4999597"><span className="__cf_email__" data-cfemail="b7ded9d1d8f7d8c2c5d6d3d3c5d2c4c499d4d8da">[email&#160;protected]</span></a><br/>
									<a href="http://www.ouraddress.com">www.ouraddress.com</a>
								</b>
									</p>
									<p className="big-font">
										<a target="_blank" href="https://twitter.com/"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x heading"></i><i className="fa fa-twitter fa-stack-1x text-background"></i></span></a>
										<a target="_blank" href="https://www.facebook.com/"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x heading"></i><i className="fa fa-facebook fa-stack-1x text-background"></i></span></a>
										<a target="_blank" href="https://www.youtube.com/"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x heading"></i><i className="fa fa-youtube fa-stack-1x text-background"></i></span></a>
									</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="text-left scroll-in-animation" data-animation="fadeInRight">
									<form className="ajax-form" data-message-className="colors-e background-95 border heading" action="contact.php" method="post" noValidate={true}>
										<div className="row">
											<div className="col-md-6 control-group">
												<div className="alt-placeholder">Name</div>
												<input type="text" name="your-name" value="" size={40} placeholder="Name" data-validation-required-message="Please fill the required field." required/>
												<div className="help-block"></div>
											</div>
											<div className="col-md-6 control-group">
												<div className="alt-placeholder">Email</div>
												<input type="email" name="your-email" value="" size={40} placeholder="Email" data-validation-required-message="Please fill the required field." required />
												<div className="help-block"></div>
											</div>
											<div className="col-md-12 control-group">
												<div className="alt-placeholder">Message</div>
												<textarea name="your-message" placeholder="Message" data-validation-required-message="Please fill the required field." required></textarea>
												<div className="help-block"></div>
											</div>
											<div className="col-md-12 form-actions">
												<input className="button" type="submit" value="Send"/>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="text-center">
							<a className="map-open button background-lite-b border-heading-b heading-b" data-map-overlay=".map-overlay" href="#">Locate Us on Map</a>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
};

export default ContactSection;