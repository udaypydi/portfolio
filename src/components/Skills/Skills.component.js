import React from 'react';
import StarRatings from 'react-star-ratings';
import { SKILLS } from './Skills.constant';
import './Skills.scss';

export default function Skills(props) {
    return (
        <div className="Skills-Container">
            <div className="Skills">
                {
                    SKILLS.map(skill => (
                        <div className="Skills-Skill">
                            <p className="Skills-SkillName">{skill.name}</p>
                            <StarRatings
                                rating={skill.rating}
                                starRatedColor="#d8d21a"
                                numberOfStars={5}
                                starDimension="30px"
                                name='rating'
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
