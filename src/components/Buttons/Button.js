import React from 'react'
import './Button.css'
const Button = (props) => {
    return (
        <div>
            <button className='buttonKart'>{props.name}</button>
        </div>
    )
}

export default Button
