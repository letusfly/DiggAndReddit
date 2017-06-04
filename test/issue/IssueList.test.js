
import React from 'react';
import IssueList from '../../src/issue/IssueList';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


describe('<IssueList>', () => {
  test('default render', () => {

    const testData= [{
      key : 'id1',
      id : 'id1',
      rank : 1,
      voteCnt : 0,
      text : 'test data'
    },{
      key : 'id2',
      id : 'id2',
      rank : 2,
      voteCnt : 0,
      text : 'test data2'
    }];

    const component = renderer.create(
      <MuiThemeProvider>
        <IssueList list={testData} ></IssueList>
      </MuiThemeProvider>
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  test('addRow', () => {

    const testData= [{
      key : 'id1',
      id : 'id1',
      rank : 1,
      voteCnt : 0,
      text : 'test data'
    },{
      key : 'id2',
      id : 'id2',
      rank : 2,
      voteCnt : 0,
      text : 'test data2'
    }];

    const component = renderer.create(
      <MuiThemeProvider>
        <IssueList list={testData} ></IssueList>
      </MuiThemeProvider>
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();

    testData.push({
      key : 'id3',
      id : 'id3',
      rank : 3,
      voteCnt : 0,
      text : 'test data3'
    });

    result = component.toJSON();
    expect(result).toMatchSnapshot();


  });
})
