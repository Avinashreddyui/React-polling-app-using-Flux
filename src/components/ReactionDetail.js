import React from 'react';
import { Row, Col, Well } from 'react-bootstrap';

import Reaction from './Reaction';
import NotFound from './NotFound';

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
            reactionItem: ReactionsStore.getOne(this.props.params.id),
            name: ReactionsStore.getName()
        });
    },
    getInitialState: function () {
        return {
            reactionItem: ReactionsStore.getOne(this.props.params.id),
            name: ReactionsStore.getName()
        };
    },
    render: function () {
        if (!this.state.reactionItem) return <NotFound />;
        return <Row>
            <Reaction {...this.state.reactionItem} name={this.state.name} isInDetail={true}/>

            <Col lg={3} md={4} sm={6}>
                <h3>{this.state.reactionItem.answer1} Votes</h3>
                <Well>
                    <ul>
                        {
                            this.state.reactionItem.answer1Votes.map(function (item, index) {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </Well>
            </Col>
            <Col lg={3} md={4} sm={6}>
                <h3>{this.state.reactionItem.answer2} Votes</h3>
                <Well>
                    <ul>
                        {
                            this.state.reactionItem.answer2Votes.map(function (item, index) {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </Well>
            </Col>
        </Row>
    }

});