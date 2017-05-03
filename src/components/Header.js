import React from 'react';

import AppActions from '../actions/AppActions';
import ReactionsStore from '../stores/ReactionsStore';
import {Navbar, Nav, NavItem, Image, Input } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default React.createClass({
    getInitialState: function () {
      return {
          name: ReactionsStore.getName()
      };
    },
    componentDidMount: function () {
        ReactionsStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        ReactionsStore.removeChangeListener(this.onChange);
    },
    onChange: function () {
        this.setState({
            name: ReactionsStore.getName()
        });
    },
    onNameChange: function (e) {
        AppActions.setUsername(e.target.value);
    },
    render: function () {
        return <Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <LinkContainer to="/"><Image src="/assets/rt-logo.svg"/></LinkContainer>
                </Navbar.Brand>
                <Navbar.Brand>
                    Reaction Tracker
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullRight>
                    <Input type="text" value={this.state.name} onChange={this.onNameChange} />
                </Navbar.Form>
                <Nav pullRight>
                    <LinkContainer to="/reactions"><NavItem>Reactions</NavItem></LinkContainer>
                    <LinkContainer to="/add"><NavItem>Add</NavItem></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>;

    }

});