import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header(props) {
    return (
        <div className={
            classNames('Header', {
                "Header--invertedBg": props.invertBg,
            })
        }>
            <Link className="Header--Link" to="/about">About</Link>
            <Link className="Header--Link" to="/skills">Skills</Link>
            <Link className="Header--Link" to="/projects">Projects</Link>
            <Link className="Header--Link" to="/oss">OSS</Link>
            <Link className="Header--Link" to="/talks">Talks</Link>
            {/* <Link className="Header--Link" to="/about">Articles</Link> */}
        </div>
    );
}
