import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    state = {
        count: 0
    }

    handleIncrement = (e) => {
        this.props.incrementClickCb()
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDrement = (e) => {
        this.props.decrementClickCb()
        this.setState({
            count: this.state.count - 1
        })
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