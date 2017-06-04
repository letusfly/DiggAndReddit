import React from 'react';
import IssueRow from '../../src/issue/IssueRow';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

test('<IssueRow>', () => {

  const testData= {
    key : 'id1',
    id : 'id1',
    rank : 1,
    voteCnt : 0,
    text : 'test data'
  };

  const component = renderer.create(
    <MuiThemeProvider>
      <IssueRow {...testData} ></IssueRow>
    </MuiThemeProvider>
  );

  let result = component.toJSON();

  expect(result).toMatchSnapshot();

});
