import React from 'react';

import EclipseLogo from '../assets/logo.png';

import './assets/ComponentsStyles.css';

const ImageCard = ({title, styles, button, buttonAction, buttonProps, data}) => {
    return (
        <div className="image-card" style={styles}>
            <div className='card-image-container'>
                <img src={EclipseLogo} alt={data.title} />
            </div>
            <h2>{title}</h2>
            {button && (
                <button onClick={buttonAction} style={buttonProps.style || {}}>
                    {button}
                </button>
            )}
        </div>
    );
};

export default ImageCard;
