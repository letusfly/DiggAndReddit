import React from 'react';
import IssueMain from '../../src/issue/IssueMain';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

describe('<IssueMain>', () => {
  const component = mount(
    <MuiThemeProvider>
      <IssueMain />
    </MuiThemeProvider>
  );

  test('is visible top 20', () => {
    expect(component.contains(<h3>Top 20 Issues</h3>)).toEqual(true);
  });
});
