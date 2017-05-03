import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import {ButtonInput, Input, Well} from 'react-bootstrap';
import { History } from 'react-router';

import AppActions from '../actions/AppActions';

export default React.createClass({
    getInitialState: function () {
        return {
            question: "",
            answer1: "",
            answer2: "",
            imageUrl:""
        };
    },
    mixins: [LinkedStateMixin, History],
    onAddReaction: function (e) {
        e.preventDefault();
        var reactionToAdd = {
            id: -1,
            question: this.state.question,
            answer1: this.state.answer1,
            answer2: this.state.answer2,
            answer1Votes: [],
            answer2Votes: []
        };
        if (this.state.imageUrl !== "") {
            reactionToAdd.imageUrl = this.state.imageUrl;
        }
        AppActions.add(reactionToAdd);
        this.setState({
            question: "",
            answer1: "",
            answer2: "",
            imageUrl: ""
        });

        this.history.pushState(null, "/reactions");
    },
    render: function () {
        return <Well>
            <h2>Add Reaction</h2>
            <form onSubmit={this.onAddReaction}>
                <Input label="Question:" type="text" valueLink={this.linkState('question')}/>
                <Input label="Answer 1:" type="text" valueLink={this.linkState('answer1')}/>
                <Input label="Answer 2:" type="text" valueLink={this.linkState('answer2')}/>
                <Input label="Image URL:" type="text"  valueLink={this.linkState('imageUrl')}/>
                <ButtonInput bsStyle="primary" type="submit" value="Add" />
            </form>
        </Well>;
    }

});