import { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Here you would usually send the data to a server
        // For demonstration purposes, we'll just log it to the console
        console.log(formData);

        // Optionally reset form fields
        setFormData({
            name: '',
            email: '',
            message: ''
        });

        // TODO: Implement actual submission logic (e.g., via an API)
    };

    return (
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
                                        <br /> Woburn, MA 01801, United States
                                    </p>
                                    <p className="big-font">
                                        <b>
                                            <a href="/cdn-cgi/l/email-protection#fa93949c95ba958f889b9e9e889f8989d4999597">
                                                <span className="__cf_email__" data-cfemail="b7ded9d1d8f7d8c2c5d6d3d3c5d2c4c499d4d8da">
                                                    [email&#160;protected]
                                                </span>
                                            </a>
                                            <br />
                                            <a href="http://www.ouraddress.com">www.ouraddress.com</a>
                                        </b>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-left scroll-in-animation" data-animation="fadeInRight">
                                    <form
                                        className="ajax-form"
                                        data-message-className="colors-e background-95 border heading"
                                        noValidate={true}
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="row">
                                            <div className="col-md-6 control-group">
                                                <div className="alt-placeholder">Name</div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    size={40}
                                                    placeholder="Name"
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <div className="help-block"></div>
                                            </div>
                                            <div className="col-md-6 control-group">
                                                <div className="alt-placeholder">Email</div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    size={40}
                                                    placeholder="Email"
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <div className="help-block"></div>
                                            </div>
                                            <div className="col-md-12 control-group">
                                                <div className="alt-placeholder">Message</div>
                                                <textarea
                                                    name="message"
                                                    placeholder="Message"
                                                    onChange={handleChange}
                                                    value={formData.message}
                                                    required
                                                ></textarea>
                                                <div className="help-block"></div>
                                            </div>
                                            <div className="col-md-12 form-actions">
                                                <input className="button" type="submit" value="Send" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
