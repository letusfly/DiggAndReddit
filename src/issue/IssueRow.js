import React, { Component } from 'react';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';

export default class IssueList extends Component{
  render(){

    let textList = [];
    let text = this.props.text.split('\n');
    for(let index in text){
      textList.push(<span key={index}>{text[index]}<br/></span>);
    }

    return (
      <div className="Issue-IssueList-IssueRow">
        <div className="Issue-IssueList-IssueRow-ranks">
          <div className="Issue-IssueList-IssueRow-ranks-rank">
            <span>{this.props.rank}</span>
          </div>
          <div className="Issue-IssueList-IssueRow-ranks-voteCnt">
            <span>{this.props.voteCnt}</span>
          </div>
        </div>
        <div className="Issue-IssueList-IssueRow-content">
          {textList}
        </div>
        <div className="Issue-IssueList-IssueRow-buttons">
          <ThumbUp style={{fill:'#42A5F5', marginRight:'10px'}} onClick={()=> this.props.handleUpdateVote(this.props.id, true) } />
          <ThumbDown style={{fill:'#EF5350'}} onClick={()=> this.props.handleUpdateVote(this.props.id, false) } />
        </div>
      </div>
    );
  }
}
