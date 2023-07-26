import React from 'react';

export default function Footer({ component }) {
    return (
        <footer>
            <div >
                <a href={component.HomeLinks.url}>{component.HomeLinks.icon}</a>
            </div>
            <div >
                {component.social_media.map((social, index) => (
                    <a key={index} href={social.url}>
                        <i className={`fa fa-${social.icon}`} />
                    </a>
                ))}
            </div>
            <div >
                <p>{component.copyright}</p>
            </div>
        </footer>
    );
};

