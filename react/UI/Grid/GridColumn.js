import React from 'react';
import PropTypes from 'prop-types';

import classes from './Grid.css';

const gridColumn = props => {
    const classesColumn = [];

    console.log('>>> grid', props);

    if (props.className) {
        classesColumn.push(props.className)
    }

    if (!props.col) {
        classesColumn.push(classes.Col);
    } else {
        classesColumn.push(classes[`Col${props.col}`])
    }

    if (props.colOffset) {
        classesColumn.push(classes[`ColOffset${props.colOffset}`])
    }

    return (
        <div className={classesColumn.join(' ')} style={props.style}>
            {props.children}
        </div>
    );
};

gridColumn.propTypes = {
    col: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    colOffset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    className: PropTypes.string
};

export default gridColumn;
