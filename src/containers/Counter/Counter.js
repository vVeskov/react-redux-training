import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { increment } from '../../store/actions/actions';
import * as actionCreators from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.add5ToCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.subtract5fromCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => { dispatch(actionCreators.increment()) },
        onDecrementCounter: () => { dispatch(actionCreators.decrement()) },
        add5ToCounter: () => { dispatch(actionCreators.add(5)) },
        subtract5fromCounter: () => { dispatch(actionCreators.subtract(5)) },
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators, actionCreators.deleteResult(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);