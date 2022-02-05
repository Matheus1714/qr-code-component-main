import React, { Component } from 'react'
import Footer from '../components/Footer'
import Card from '../components/Card'
import ImageQRCode from '../components/ImageQRCode'
import BodyText from '../components/BodyText'
import './QRCodeCard.css'
import QRCode from '../assets/image-qr-code.png'


export default class QRCodeCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="QRCodeCard">
                <Card>
                    <ImageQRCode QRCode={QRCode} />
                    <BodyText 
                        title="Improve your front-end skills by building projects"
                        subtitle="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
                    />
                </Card>
                <Footer />
            </div>
        )
    }
}