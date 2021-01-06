import React , {useState} from 'react'
import './Heart.css'
const Heart = () => {
    const [heart,setHeart] = useState(true)

    return (
        <div>
            <i className={heart ? 'far fa-heart' : 'far fa-heart active'} onClick={() => setHeart(!heart)}></i>
        </div>
    )
}

export default Heart
