import React from 'react';
import PropTypes from 'prop-types';

import classes from './Grid.css';

const gridRow = props => {

    const classesRow = [classes.Row];

    if (props.className) {
        classesRow.push(props.className);
    }

    if (props.centred) {
        classesRow.push(classes.Centred)
    }

    if (props.middle) {
        classesRow.push(classes.Middle)
    }

    return (
        <div className={classesRow.join(' ')} style={props.style}>
            {props.children}
        </div>
    );
};

gridRow.propTypes = {
    className: PropTypes.string,
    centred: PropTypes.bool,
    middle: PropTypes.bool
};

export default gridRow;
