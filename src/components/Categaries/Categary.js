import React from 'react'
import './Categary.css'
import {Link} from 'react-router-dom'
const Categary = () => {
    return (
        <div className='categary'>

       
         <Link to='/mobile'><li className='x'>Mobile</li></Link> 
         <Link to='/laptop'><li className='x'>Laptop</li></Link> 
        </div>
    )
}

export default Categary
