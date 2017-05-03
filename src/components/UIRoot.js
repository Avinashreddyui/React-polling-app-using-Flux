import React, { Component } from 'react';

import { Grid, Jumbotron } from 'react-bootstrap';

import Bot from './Bot';
import ErrorAlert from './ErrorAlert';
import Header from './Header';
import Footer from './Footer';

import AppActions from '../actions/AppActions';

export default class UIRoot extends Component {
    componentWillMount() {
        AppActions.apiGetAll();
    }
    render() {
        return <div>
            <Header />
            <Grid>
                {this.props.children}
            </Grid>
            <Footer />
        </div>;
    }
};