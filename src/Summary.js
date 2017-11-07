import React from 'react';
import PropTypes from 'prop-types';
import store from './Store';
import * as Actions from './Actions';

class Summary extends React.Component {
    
    state = store.getState();

    getSummary = () => {
        let sum = 0;
        for (const key in this.state) {
            sum += this.state[key];
        }
        return sum;
    }

    onChange = () => {
        this.setState(store.getState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        return (
            <div>
                Total counts: {this.getSummary()}
            </div>
        )
    }
}

export default Summary;