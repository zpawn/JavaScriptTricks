import React from 'react';

import classes from '../Overlay/Overlay.css';

const overlay = (props) => (
    <span
        className={classes.Overlay}
        onClick={props.clicked}
    />
);

export default overlay;
