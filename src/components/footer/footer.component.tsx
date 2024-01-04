import { useTranslation } from 'react-i18next';
import qrCodeLogo from '../../assets/qr2.png';
import facebookLogo from '../../assets/facebook.svg';
import linkedinLogo from '../../assets/linkedin.svg';
import youtubeLogo from '../../assets/youtube.svg';
import instagramLogo from '../../assets/instagram.svg';
import twitterLogo from '../../assets/twitter.svg';
import './footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='w-full' id='contact-us'>
      <section className="bg-dark content container text-grey p-4">
        <div className='flex w-full justify-center'>
          <div className="flex w-full md:flex-row flex-col">
            {/* First Section */}
            <div className="footer-section w-full ">
              <h5 className="font-bold text-2xl text-green mb-2">{t('quickLinks.title')}</h5>
              <ul>
                <li><a href="#" className="hover:text-light">{t('quickLinks.aboutUs')}</a></li>
                <li><a href="#" className="hover:text-light">{t('quickLinks.ourTeam')}</a></li>
                <li><a href="#" className="hover:text-light">{t('quickLinks.careers')}</a></li>
                <li><a href="#" className="hover:text-light">{t('quickLinks.contact')}</a></li>
              </ul>
            </div>

            {/* Second Section */}
            <div className="footer-section w-full">
              <h5 className="font-bold text-2xl text-green mb-2">{t('services.title')}</h5>
              <ul>
                <li><a href="#" className="hover:text-light">{t('services.webDevelopment')}</a></li>
                <li><a href="#" className="hover:text-light">{t('services.marketing')}</a></li>
                <li><a href="#" className="hover:text-light">{t('services.consulting')}</a></li>
                <li><a href="#" className="hover:text-light">{t('services.support')}</a></li>
              </ul>
            </div>

            {/* Third Section */}
            <div className="footer-section w-full ">
              <h5 className="font-bold text-2xl text-green mb-2">{t('legal.title')}</h5>
              <ul>
                <li><a href="#" className="hover:text-light">{t('legal.termsOfService')}</a></li>
                <li><a href="#" className="hover:text-light">{t('legal.privacyPolicy')}</a></li>
                <li><a href="#" className="hover:text-light">{t('legal.cookiePolicy')}</a></li>
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
              <p>{t('subjectToSupervision')}</p>
              <p>{t('copyright')}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-4 md:mt-0">
            <h5 className="font-bold text-green mb-2">{t('followUs.title')}</h5>
            <div className="social-media-links flex gap-2">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <img width={25} src={facebookLogo} alt="Facebook"/>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <img width={25} src={instagramLogo} alt="Instagram"/>
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700">
                <img width={25} src={twitterLogo} alt="Twitter"/>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <img width={25} src={youtubeLogo} alt="YouTube"/>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <img width={25} src={linkedinLogo} alt="LinkedIn"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
