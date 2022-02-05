import React from 'react'
import './ImageQRCode.css'

export default (props) => {
    return (
        <div className="ImageQRCode">
            <img src={props.QRCode} alt="qrcode from frontend mentor"/>
        </div>
    )
}