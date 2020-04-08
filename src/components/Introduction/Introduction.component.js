import React from 'react';
import { Button } from '../../common';
import "./Introduction.scss";

const Introduction = (props) => {
    return (
        <div className="Introduction">
            <div className="Introduction__text">
                <p className="Introduction__header">Hi, This is <strong>Uday Bhaskhar</strong></p>
                <p className="Introduction__name">I am a passionate Javascript Engineer</p>
            </div>
            <Button 
                buttonText="LEARN MORE"
            />
        </div>
    )
}

export default Introduction;
