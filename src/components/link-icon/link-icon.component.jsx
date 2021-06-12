import React from 'react';

import './link-icon.styles.scss';

const LinkIcon = ({url, iconClass}) => {
    return (
        <a className='link-icon' href={url} target="_blank" rel="noreferrer">
            <div className="link-icon__content">
                <i className={iconClass}></i>
            </div>
        </a>
    )
}

export default LinkIcon
