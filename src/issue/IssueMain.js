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

  componentDidMount(){
    Axios.get('/issue').then(this.handleIssueListCallback);
  }

  handleIssueListCallback({data}){
    var rank = 1;
    for(let index in data){
      data[index].rank = rank++;
    }

    this.setState({list : data});
  }

  handleCreateIssue(issueContent){

    if(issueContent === ''){
      return;
    }

    Axios.put('/issue', {text:issueContent}).then(this.handleIssueListCallback);

  }

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
