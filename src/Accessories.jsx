import React from 'react'
import Style from './Style.module.css'

const Accessories = () => {
  return (
    <div className={Style.Accessories}>
        <h1>Accessories</h1>
        <div className={Style.AudioDiv}>
            <a className={Style.Audio} href="">Audio</a>
            <a className={Style.Audio} href="">Smart Wearable</a>
        </div>
    </div>
  )
}

export default Accessories