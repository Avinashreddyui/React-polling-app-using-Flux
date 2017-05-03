import React from 'react';
import { Badge, Button, Col, Glyphicon, ProgressBar, Thumbnail } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { History } from 'react-router';

import AppActions from '../actions/AppActions';

export default React.createClass({
    getDefaultProps: function () {
        return {
            question: "What is the answer to life, the universe and everything?",
            answer1: "42",
            answer2: "NaN",
            imageUrl: "/assets/default-image.png",
            answer1Votes: [],
            answer2Votes: [],
            name: "User"
        };
    },
    isActive: function () {
      return this.props.answer1Votes.indexOf(this.props.name) < 0 && this.props.answer2Votes.indexOf(this.props.name) < 0;
    },
    mixins: [History],
    onAnswer1: function () {
        AppActions.voteAnswer1(this.props.id, this.props.name);
    },
    onAnswer2: function () {
        AppActions.voteAnswer2(this.props.id, this.props.name);
    },
    onRemove: function () {
      AppActions.remove(this.props.id);
      if (this.props.isInDetail) {
          this.history.pushState(null, "/reactions");
      }
    },
    propTypes: {
        question: React.PropTypes.string,
        answer1: React.PropTypes.any,
        answer2: React.PropTypes.any,
        imageUrl: React.PropTypes.string,
        answer1Votes: React.PropTypes.array,
        answer2Votes: React.PropTypes.array,
        reactionSeconds: React.PropTypes.number
    },
    render: function () {
        console.log("Rendering: " + this.props.id + ": " + this.props.question);
        return <Col sm={6} md={4} lg={3}>
                <Thumbnail src={this.props.imageUrl}>
                    <Button bsSize="small" onClick={this.onRemove}><Glyphicon glyph="remove" /></Button>
                    <LinkContainer to={`/reactions/${this.props.id}`}><Button bsSize="small"><Glyphicon glyph="search" /></Button></LinkContainer>
                    <h3>{this.props.question}</h3>
                    <div>
                        <ProgressBar>
                            <ProgressBar bsStyle="success" now={Math.round(100 * this.props.answer1Votes.length / ( this.props.answer1Votes.length + this.props.answer2Votes.length))}></ProgressBar>
                            <ProgressBar bsStyle="danger" now={Math.round(100 * this.props.answer2Votes.length / ( this.props.answer1Votes.length + this.props.answer2Votes.length))}></ProgressBar>
                        </ProgressBar>
                    </div>
                    <div>
                        <Button block bsStyle="success" disabled={!this.isActive()} onClick={this.onAnswer1}>
                            {this.props.answer1}
                            <Badge pullRight>{this.props.answer1Votes.length}</Badge>
                        </Button>&nbsp;
                        <Button block bsStyle="danger" disabled={!this.isActive()} onClick={this.onAnswer2}>
                            {this.props.answer2}
                            <Badge pullRight>{this.props.answer2Votes.length}</Badge>
                        </Button>
                    </div>
                </Thumbnail>
            </Col>;
    }

});