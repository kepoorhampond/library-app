import React from 'react';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import Navigator from './src/components/Navigator';

/* uiTheme keys:
spacing: {} // can be used to change the spacing of components.
fontFamily: {} // can be used to change the default font family.
palette: {  // can be used to change the color of components.
    primaryColor: blue500,
    accentColor: red500,
    ...
}
typography: {} // can be used to change the typography of components
// you can change style of every each component
avatar: {}
button: {}
toolbar: {}
*/

const uiTheme = {
  palette: {
      primaryColor: COLOR.blue500,
      accentColor: COLOR.red200,
  },
  toolbar: {
      container: {
          height: 50,
      },
  },
};

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Navigator />
      </ThemeProvider>
    );
  }
}