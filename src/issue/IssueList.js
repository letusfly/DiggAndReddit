import React, { Component } from 'react';
import IssueRow from './IssueRow';

export default class IssueList extends Component{

  render(){

    return (
      <div>

          {this.props.list.map((function (eachIssue) {

            return (
              <IssueRow key={eachIssue.id}
                          id={eachIssue.id}
                          rank={eachIssue.rank}
                          voteCnt={eachIssue.voteCnt}
                          text={eachIssue.text}
                          handleUpdateVote={this.props.handleUpdateVote}></IssueRow>);
            }).bind(this))
          }
      </div>);
  }
}
