import React from 'react';

import classes from './Button.css';

const buttonGroup = (props) => {

    const btnGroupClasses = [classes.ButtonGroup];

    if (props.fill) {
        btnGroupClasses.push(classes.Fill);
    }

    return (
        <div className={btnGroupClasses.join(' ')}>
            {props.children}
        </div>
    )
};

export default buttonGroup;
