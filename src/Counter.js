import React from 'react';
import PropTypes from 'prop-types';
import CounterStore from './stores/CounterStore';
import * as Actions from './Actions';

class Counter extends React.Component {

    state = {
        count: CounterStore.getCounterValues()[this.props.caption]
    };

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange)
    }

    onChange = () => {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({
            count: newCount
        })
    }

    handleIncrement = () => {
        Actions.increment(this.props.caption);
    }

    handleDrement = () => {
        Actions.decrement(this.props.caption);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDrement}>-</button>
                Counter {this.props.caption}: {this.state.count}
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
}

export default Counter;