import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

class ControlPanel extends React.Component {

    // lifting state to upper component -- ControlPanel
    state = {
        counter1: 0,
        counter2: 0,
        counter3: 0
    }

    getSum = () => {
        return this.state.counter1 + this.state.counter2 + this.state.counter3;
    }

    changeCounter = (caption, value) => {
        this.setState({
            ["counter" + caption]: this.state["counter" + caption] + value
        })
    }

    render() {
        return (
            <div>
                <Counter caption="1" value={this.state.counter1} onChange={this.changeCounter} />
                <Counter caption="2" value={this.state.counter2} onChange={this.changeCounter} />
                <Counter caption="3" value={this.state.counter3} onChange={this.changeCounter} />
                <hr />
                Total count: {this.getSum()}
            </div>
        )
    }
}

export default ControlPanel;