import React from 'react';
import { PROJECT_DETAILS } from './OpenSource.constant';
import Projects from '../Projects/Projects.component';

export default function OpenSource(props) {
    return (
        <Projects 
            projects={PROJECT_DETAILS} 
            title="Open Source Contributions"
            oss
        />
    );
}
