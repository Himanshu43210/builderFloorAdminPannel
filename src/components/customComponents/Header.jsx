import React from 'react';

export default function Header({ component }) {
    return (
        <div>
            <a className='headerlink' href={component.url}><img src="https://www.builderfloor.com/assets/imgs/template/BUILDER.png" alt="" width='40px' height='50px' />BuilderFloor.com</a>
        </div>
    )
}