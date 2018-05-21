import React, { PureComponent, Fragment } from 'react';

import classes from './Popover.css';
import Overlay from '../Overlay/Overlay';

class Popover extends PureComponent {

    constructor (props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount () {
        this.inputElement.current.focus();
    }

    render () {

        return (
                <Fragment>
                    <Overlay clicked={this.props.onHidePopover}/>
                    <span className={[classes.Popover, classes.ArrowBottom].join(' ')}>
                        <form onSubmit={this.props.onSaveAccord}>
                            <input
                                ref={this.inputElement}
                                type='text'
                                value={this.props.accord}
                                onChange={this.props.onChangeAccord}
                            />
                            <input type='submit' style={{ display: 'none' }}/>
                        </form>
                    </span>
                </Fragment>
            )
        }
}

export default Popover;
