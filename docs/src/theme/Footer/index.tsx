import React, { type ReactNode } from 'react';

import { useThemeConfig } from '@docusaurus/theme-common';
import { FaInstagram, FaLinkedin, FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa";

import './Footer.css';

function Footer(): ReactNode {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }

  const iconSize = '2rem';

  return (
    <footer className="Footer">
      <div className="footer-content">

        <div className="footer-section">
          <h4>Get in touch</h4>
          <p><a href="mailto:contact@digitalsportssolutions.com" target='_blank'>contact@digitalsportssolutions.com</a></p>
          <p><a href="mailto:support@digitalsportssolutions.com" target='_blank'>support@digitalsportssolutions.com</a></p>
          <p><a href="tel:216-924-5393">216-924-5393</a></p>
        </div>

        <div className="footer-section centered">
          <h4>Connect</h4>
          <a href="https://www.youtube.com/channel/UCj6qESOEGemvzRvgxagYHWg" target='_blank'> <FaYoutube size={iconSize} /> </a>
          <a href="https://www.instagram.com/digitalsportssolutions?igsh=MTc0YXltdXBmdjFqcw==" target='_blank'><FaInstagram size={iconSize} /></a>
          <a href="https://www.linkedin.com/company/digitalsportssolutions/" target='_blank'> <FaLinkedin size={iconSize} /></a>
          <a href="https://discord.gg/T2qfkr3JqT" target='_blank'> <FaDiscord size={iconSize} /> </a>
          <a href="https://www.facebook.com/people/Digital-Sports-Solutions/61558423260160/" target='_blank'> <FaFacebook size={iconSize} /> </a>
        </div>

        <div className="footer-section right">
          <a href="/"><img src="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/DSS_CombinationMark.svg" className="logo" draggable="false" /></a>
        </div>
      </div>

      <div className="footer-blurb">
        <p>
          This website is for informational purposes only and does not constitute legal advice. All product names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement.
        </p>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 Digital Sports Solutions LLC<br />
          Website designed and built by <a href="https://www.linkedin.com/in/noah-klein-5a215a251/" target="_blank">Noah Klein</a><br />
          Graphic elements designed by <a href="https://www.mattmk.com/" target="_blank">Matt Kerekanich</a>
        </p>
        <p><a href="/terms">Terms of Service</a><span>|</span><a href="/privacy">Privacy Policy</a></p>
      </div>
    </footer>
  )
}


export default React.memo(Footer);

