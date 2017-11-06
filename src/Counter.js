import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {

    incrementClick = () => {
        this.props.onChange(this.props.caption, 1);
    }

    decrementClick = () => {
        this.props.onChange(this.props.caption, -1);
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementClick}>+</button>
                <button onClick={this.decrementClick}>-</button>
                Counter {this.props.caption}: {this.props.value}
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
}

export default Counter;