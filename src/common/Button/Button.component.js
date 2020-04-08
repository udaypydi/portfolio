import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default function Button(props) {
    const { buttonText, onClick } = props;
    return (
        <button className="Button" onClick={onClick}>
            {buttonText}
        </button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: () => {},
};
