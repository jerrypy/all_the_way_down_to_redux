import React from 'react';
import PropTypes from 'prop-types';
import CounterStore from './stores/CounterStore';
import SummaryStore from './stores/SummaryStore';
import * as Actions from './Actions';

class Summary extends React.Component {
    state = {
        summary: SummaryStore.getSummary()
    }

    onChange = () => {
        this.setState({
            summary: SummaryStore.getSummary()
        })
    }

    componentDidMount() {
        SummaryStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        SummaryStore.removeChangeListener(this.onChange);
    }

    render() {
        return (
            <div>
                Total counts: {this.state.summary}
            </div>
        )
    }
}

export default Summary;