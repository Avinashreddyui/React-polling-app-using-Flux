import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Footer extends Component {

    render () {
        return <Navbar fixedBottom>
            <Navbar.Text>&copy; 2015 - 2016 Reaction Tracker. All rights reserved</Navbar.Text>
        </Navbar>;
    }

};