import React from 'react';
import IssueForm from '../../src/issue/IssueForm';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

describe('<IssueForm>', () => {

  const component = mount(
    <MuiThemeProvider>
      <IssueForm handleCreateIssue={()=>console.log('clicked')}/>
    </MuiThemeProvider>,
  );

  test('render input text field', () => {
    expect(component.find(TextField).props().value).toEqual('');
  });

  test('render RaisedButton', () => {
    expect(component.find(RaisedButton).props().label).toEqual('Create');
  });

  test('change input text', () => {
    component.find(TextField).find('textarea').last().simulate('change', {target : {value :'aaaaa'}});
    expect(component.find(TextField).props().value).toEqual('aaaaa');
  });

  test('change input text over than 255', () => {
    let str = "";
    for(let i = 0 ; i < 300 ; i++){
      str += 'a'
    }
    component.find(TextField).find('textarea').last().simulate('change', {target : {value :str}});
    expect(component.find(TextField).props().value).toEqual('aaaaa');
  });

  test('check clear textArea when button clicked', () => {
    component.find(RaisedButton).find('button').simulate('click');
    expect(component.find(TextField).props().value).toEqual('');
  });

});
