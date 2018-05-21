import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

class Button extends PureComponent {

    render () {
        let button = null;
        let btnType = '';
        const btnClasses = [classes.Button];

        if (this.props.className) {
            btnClasses.push(this.props.className);
        }

        switch (this.props.color) {
            case 'primary': this.props.outline
                ? btnClasses.push(classes.OutlinePrimary)
                : btnClasses.push(classes.Primary);
                break;
            case 'secondary': this.props.outline
                ? btnClasses.push(classes.OutlineSecondary)
                : btnClasses.push(classes.Secondary);
                break;
            case 'success': this.props.outline
                ? btnClasses.push(classes.OutlineSuccess)
                : btnClasses.push(classes.Success);
                break;
            case 'info': this.props.outline
                ? btnClasses.push(classes.OutlineInfo)
                : btnClasses.push(classes.Info);
                break;
            case 'warning': this.props.outline
                ? btnClasses.push(classes.OutlineWarning)
                : btnClasses.push(classes.Warning);
                break;
            case 'danger': this.props.outline
                ? btnClasses.push(classes.OutlineDanger)
                : btnClasses.push(classes.Danger);
                break;
            case 'light': this.props.outline
                ? btnClasses.push(classes.OutlineLight)
                : btnClasses.push(classes.Light);
                break;
            case 'dark': this.props.outline
                ? btnClasses.push(classes.OutlineDark)
                : btnClasses.push(classes.Dark);
                break;
            default: break;
        }

        switch (this.props.type) {
            case 'button': btnType = 'button'; break;
            case 'submit': btnType = 'submit'; break;
            case 'reset': btnType = 'reset'; break;
            default: btnType = 'button';
        }

        return <button
            className={btnClasses.join(' ')}
            type={btnType}
            onClick={this.props.onClick}
            disabled={this.props.disabled}
        >{this.props.children}</button>;
    }
}

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']),
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};



export default Button;
