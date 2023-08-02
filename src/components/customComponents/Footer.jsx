import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LINKEDIN_ICON } from '../utils/Const';

export default function Footer({ component }) {
    
    return (
        <footer>
            <div>
                <a className='footerlink' href={component.HomeLinks.url}><img src="https://www.builderfloor.com/assets/imgs/template/BUILDER.png" alt="" width='40px' height='50px' /></a>
            </div>
            <hr />
            <hr />
            <div >
                {component.social_media.map((social, index) => {
                    const SocialIcon = social.name === LINKEDIN_ICON ? LinkedInIcon : InstagramIcon;
                    return(

                    <a key={index} href={social.url}>
                        <SocialIcon />
                    </a>
                )})}
                
            </div>
            <div >
                <p className='copyright'>{component.copyright}</p>
            </div>
        </footer>
    );
};

