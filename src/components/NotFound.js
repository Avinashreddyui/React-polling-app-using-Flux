import React, { Component } from 'react';

import { Jumbotron } from 'react-bootstrap';

export default class NotFound extends Component {
    render() {
        return <Jumbotron>
                    <h1>I'm not here</h1>
                    <p>This isn't happening</p>
                </Jumbotron>
    }
};