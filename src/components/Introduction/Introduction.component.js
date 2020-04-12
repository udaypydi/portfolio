import React from 'react';
import SocialProfiles from '../SocialProfiles/SocialProfiles.component';
import "./Introduction.scss";

// introduction added

const Introduction = (props) => {
    return (
        <div className="Introduction">
            <img className="Introduction--image" src={require('../../assets/uday.png')} />
            <div className="Introduction__text">
                <p className="Introduction__header">Hello World</p>
                <p className="Introduction__name">I am <strong>Uday Bhaskhar</strong> and I love <strong>Javascript</strong></p>
                <SocialProfiles />
            </div>
        </div>
    )
}

export default Introduction;
