import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header(props) {
    return (
        <div className="Header">
            <Link className="Header--Link" to="/about">About</Link>
            <Link className="Header--Link" to="/skills">Skills</Link>
            <Link className="Header--Link" to="/about">Projects</Link>
            <Link className="Header--Link" to="/about">OSS</Link>
            <Link className="Header--Link" to="/about">Talks</Link>
            <Link className="Header--Link" to="/about">Articles</Link>
        </div>
    );
}
