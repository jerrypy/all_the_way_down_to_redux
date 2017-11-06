import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

class ControlPanel extends React.Component {
    state = {
        total : 0
    }

    handleIncrement = () => {
        this.setState({
            total: this.state.total + 1
        })
    }

    handleDrement = () => {
        this.setState({
            total: this.state.total - 1
        })
    }

    render() {
        const CounterItem = [1, 2, 3];
        const CounterList = CounterItem.map((num) => 
            <Counter caption={num.toString()} key={num.toString()} incrementClickCb={this.handleIncrement} decrementClickCb={this.handleDrement} />
        );
        return (
            <div>
                {CounterList}
                <hr />
                Total count: {this.state.total}
            </div>
        )
    }
}

export default ControlPanel;