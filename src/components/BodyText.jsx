import React from 'react'
import './BodyText.css'

export default (props) => {
    const title = props.title
    const subtitle = props.subtitle
    return (
        <div className="BodyText">
            <h1 className='title'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>
        </div>
    )
}