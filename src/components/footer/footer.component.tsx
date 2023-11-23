

import qrCodeLogo from '../../assets/qr2.png'
import facebookLogo from '../../assets/facebook.svg'
import linkedinLogo from '../../assets/linkedin.svg'
import youtubeLogo from '../../assets/youtube.svg'
import instagramLogo from '../../assets/instagram.svg'
import twitterLogo from '../../assets/twitter.svg'

import './footer.css'
const Footer = () => {
  return (
    <footer className='w-full' id='contact-us'>
 <section className="bg-dark content container text-grey p-4">
      
      <div className='flex w-full justify-center'>
      <div className="flex w-full md:flex-row flex-col">
        {/* First Section */}
        <div className="footer-section w-full ">
          <h5 className="font-bold text-3xl text-green mb-2">Quick Links</h5>
          <ul>
            <li><a href="#" className="hover:text-light">About Us</a></li>
            <li><a href="#" className="hover:text-light">Our Team</a></li>
            <li><a href="#" className="hover:text-light">Careers</a></li>
            <li><a href="#" className="hover:text-light">Contact</a></li>
          </ul>
        </div>

        {/* Second Section */}
        <div className="footer-section w-full">
          <h5 className="font-bold text-3xl text-green mb-2">Services</h5>
          <ul>
            <li><a href="#" className="hover:text-light">Web Development</a></li>
            <li><a href="#" className="hover:text-light">Marketing</a></li>
            <li><a href="#" className="hover:text-light">Consulting</a></li>
            <li><a href="#" className="hover:text-light">Support</a></li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="footer-section w-full ">
          <h5 className="font-bold text-3xl text-green mb-2">Legal</h5>
          <ul>
            <li><a href="#" className="hover:text-light">Terms of Service</a></li>
            <li><a href="#" className="hover:text-light">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-light">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      </div>
      <img className='mt-3' width={150} src={qrCodeLogo}/>
      <div className="divider rounded-xl my-3"></div> {/* Divider */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div>
          <div className="copy-right">
            <p>Subject to the supervision and control of the Central Bank.</p>
            <p>© 2023 Nious. All Rights Reserved</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-4 md:mt-0">
          <h5 className="font-bold text-green mb-2">Follow Us</h5>
        
          <div className="social-media-links flex gap-2">
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <img width={25} src={facebookLogo}/>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
            <img width={25} src={instagramLogo}/>
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-700">
            <img width={25} src={twitterLogo}/>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
            <img width={25} src={youtubeLogo}/>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
            <img width={25} src={linkedinLogo}/>
            </a>
          </div>
        </div>
      </div>
    </section>
    </footer>
   
  );
};

export default Footer;