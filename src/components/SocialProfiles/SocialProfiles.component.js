import React from 'react';
import { SocialProfiles as SocialProfilesData } from './SocialProfiles.constant';
import './SocialProfile.scss';

export default function SocialProfiles() {
    return (
        <div className="SocialProfiles">
            {
                SocialProfilesData.map(profile => (
                    <img 
                        onClick={() => window.open(profile.link, '_blank')}
                        src={require(`../../assets/icons/${profile.icon}`)} 
                        className="SocialProfiles--Image" 
                    />
                ))
            }
        </div>
    )
}