import React from 'react';

import './input.styles.scss';

const Input = ({type, name, children, textarea}) => {
    return (
        <div className='input'>
            {
                !textarea ? 
                (<input className="input__type" type={type} name={name} placeholder={children} required></input>) :
                (<textarea className="input__type" name={name} placeholder={children} required></textarea>)
            }
            <span className='input__span'></span>
        </div>
    )
}

export default Input
