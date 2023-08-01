import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer({ component }) {
    return (
        <footer>
            <div>
                <a className='footerlink' href={component.HomeLinks.url}><img src="https://www.builderfloor.com/assets/imgs/template/BUILDER.png" alt="" width='40px' height='50px'/></a>
            </div>
            <hr/>
            <hr/>
            <div >
                {component.social_media.map((social, index) => (
                    <a key={index} href={social.url}>
                        <img src={social.icon} alt={social.name} style={{ width: '1.5rem', height: '1.5rem' }}/>
                    </a>
                ))}
            </div>
            <div >
                <p className='copyright'>{component.copyright}</p>
            </div>
        </footer>
    );
};

