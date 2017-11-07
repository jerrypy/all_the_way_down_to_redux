import React from 'react';
import PropTypes from 'prop-types';
import store from './Store';
import * as Actions from './Actions';

class Counter extends React.Component {
    
    getOwnState = () => {
        return {
            value: store.getState()[this.props.caption]
        };
    }

    state = this.getOwnState();

    
    
    componentDidMount() {
        console.log(typeof this.getOwnState)
    
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    onChange = () => {
        this.setState(this.getOwnState());
    }

    handleIncrement = () => {
        store.dispatch(Actions.increment(this.props.caption));
    }

    handleDrement = () => {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDrement}>-</button>
                Counter {this.props.caption}: {this.state.value}
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
}

export default Counter;