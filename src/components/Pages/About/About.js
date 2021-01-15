import React from 'react';
import './index.css';

export const About = ({mode}) => {
    return (
        <div >
            <h1 className="Maindiv">Our Mission<br/>
            <span style={{fontSize:"30px",fontWeight:"lighter"}}>Our Mission is to spread Islam ONLY</span>
            </h1>
            <h4 className="h4about" style={mode?{color:"white"}:{color:"rgb(14,80,14)"}}>We are providing education of Islam and are our Mission is to spread teaches of Islam to all over the World</h4>
        </div>
    )
}
