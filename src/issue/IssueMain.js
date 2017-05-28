import React, { Component } from 'react';
import IssueList from './IssueList';
import IssueForm from './IssueForm';
import Axios from 'axios'

export default class IssueMain extends Component{
  constructor(props){
    super(props);
    this.state = {
      list : []
    };

    this.maxIdx = 0;

    this.handleCreateIssue = this.handleCreateIssue.bind(this);
    this.handleUpdateVote = this.handleUpdateVote.bind(this);
    this.handleIssueListCallback = this.handleIssueListCallback.bind(this);
  }
  /**
  * lifecycle method to initialize issue list data
  */
  componentWillMount(){
    Axios.get('/issue').then(this.handleIssueListCallback);
  }
  /**
  * callback function for all request
  * handle response and setup list data
  *
  * @data list of issues
  */
  handleIssueListCallback({data}){
    var rank = 1;
    for(let index in data){
      data[index].rank = rank++;
    }

    this.setState({list : data});
  }
  /**
  * to create issue, request to the server
  *
  * @issueContent : text content to create issue
  */
  handleCreateIssue(issueContent){

    if(issueContent === ''){
      return;
    }

    Axios.put('/issue', {text:issueContent}).then(this.handleIssueListCallback);

  }
  /**
  * to update voteCnt, request to the server
  *
  * @id : unique id for each issue
  * @isUp : true|false if true than upvote o/w downvote
  */
  handleUpdateVote(id, isUp){
    Axios.put('/issue/'+id, {isUp:isUp}).then(this.handleIssueListCallback);
  }
  render(){
    return (
      <div>
        <h3>Top 20 Issues</h3>
        <IssueList list={this.state.list} handleUpdateVote={this.handleUpdateVote}/>
        <IssueForm handleCreateIssue={this.handleCreateIssue}/>
      </div>);
  }
}
