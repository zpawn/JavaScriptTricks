import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classes from './Form.css';

class Input extends PureComponent {

    onChangeHandler = e => e.target.value;

    render() {
        return (
            <input
                type={this.props.type}
                placeholder={this.props.placeholder}
                className={classes.Input}
                onChange={(e) => this.props.onChange(this.onChangeHandler(e))}
            />
        );
    }
}

Input.propTypes = {
    type: PropTypes.oneOf(['text']),
    placeholder: PropTypes.string,
    className: PropTypes.string
};

export default Input;
