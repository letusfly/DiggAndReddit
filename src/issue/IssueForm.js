import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class IssueForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      issueString : ''
    };

    this.handleCreateIssue = this.handleCreateIssue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){

  }

  handleChange(event){
    if(event.target.value.length <= 255){
      this.setState({issueString : event.target.value});
    }
  }
  handleCreateIssue(){
    this.props.handleCreateIssue(this.state.issueString);
    this.setState({issueString:''});
  }
  render(){
    return (
      <div>
        <TextField
          hintText="create issue"
          multiLine={true}
          fullWidth={true}
          value={this.state.issueString}
          onChange={this.handleChange}
        />
        <div className="Issue-IssueForm-IssueLength">
          <span>{this.state.issueString.length}/255</span>
        </div>
        <div className="Issue-IssueForm-Button">
         <RaisedButton label="Create" onClick={this.handleCreateIssue}></RaisedButton>
        </div>
      </div>
    );
  }
}
