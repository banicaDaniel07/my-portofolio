import React from 'react';

import './input.styles.scss';

const Input = ({type, name, children, textarea}) => {
    return (
        <div className='input'>
            {
                !textarea ? 
                (<input class="input__type" type={type} name={name} placeholder={children}></input>) :
                (<textarea class="input__type" name={name} placeholder={children}></textarea>)
            }
            <span className='input__span'></span>
        </div>
    )
}

export default Input
