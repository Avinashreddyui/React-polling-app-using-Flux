import React, { Component } from 'react';

import { Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return <Jumbotron>
                    <h1>Welcome to Reaction Tracker!</h1>
                    <p>Reaction Tracker is the best way to find out what people are thinking about things right now!</p>
                </Jumbotron>
    }
};