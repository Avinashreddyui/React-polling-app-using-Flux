import React from 'react';
import { Alert } from 'react-bootstrap';

import AppActions from '../actions/AppActions';
import ReactionsStore from '../stores/ReactionsStore';

export default React.createClass({
    componentDidMount: function () {
        ReactionsStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        ReactionsStore.removeChangeListener(this.onChange);
    },
    getInitialState: function () {
      return {
          error: null
      };
    },
    onChange: function () {
        let error = ReactionsStore.getError();
        this.setState({
            error: ReactionsStore.getError()
        });
    },
    onDismiss: function () {
        this.setState({
            error: null
        });
    },
    render: function () {
        if (this.state.error) {
            return <Alert bsStyle="danger" onDismiss={this.onDismiss}>Error: {this.state.error.toString()}</Alert>
        }
        return null;
    }
});