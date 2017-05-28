import React, { Component } from 'react';
import IssueMain from './issue/IssueMain';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class IssueApp extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Issue-AppWrapper">
          <div className="Issue-AppMain">
            <IssueMain/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
