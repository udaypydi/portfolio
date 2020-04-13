import React from 'react';
import { TalksData } from './Talks.constant';
import './Talks.scss';

export default function Talks(props) {
    return (
        <div className="Talks--Container">
              <p className="Talks--Title">Talks</p>
              <div className="Talks">
                    {
                        TalksData.map(talk => (
                            <div className="Talks--Card">
                                <img className="Talks--Image " src={talk.image} />
                                <div>
                                    <p className="Talks--Header">{talk.name}</p>
                                    <p className="Talks--Location">Location: <strong>{talk.location}</strong></p>
                                    <p onClick={() => window.open(talk.url, '_blank')}>{talk.url}</p>
                                </div>
                            </div>
                        ))
                    }
              </div>
        </div>
    );
}
