import React from 'react';
import { Row } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Reaction from './Reaction';

import AppActions from '../actions/AppActions';
import ReactionsStore from '../stores/ReactionsStore';

export default React.createClass({
    componentDidMount: function () {
        ReactionsStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        ReactionsStore.removeChangeListener(this.onChange);
    },
    onChange: function () {
        this.setState({
            reactionList: ReactionsStore.getAll(),
            name: ReactionsStore.getName()
        });
    },
    getInitialState: function () {
        return {
            reactionList: ReactionsStore.getAll()
        };
    },
    render: function () {
        return <Row>
            <ReactCSSTransitionGroup transitionName='fade'
                                     transitionEnterTimeout={500}
                                     transitionLeaveTimeout={500}>
                {

                    this.state.reactionList.map(item =>
                            <Reaction {...item} key={item.id} name={this.state.name}/>
                    )
                }
            </ReactCSSTransitionGroup>
        </Row>
    }
});