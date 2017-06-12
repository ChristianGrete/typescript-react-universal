import { About } from 'components/about';
import { Home } from 'components/home';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import * as React from 'react';
import useSheet from 'react-jss';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import styles from './style';

export interface IAppProps {
  store: any;
  history: any;
  userAgent: any;
  sheet?: any;
}

@useSheet(styles)
export class App extends React.Component<IAppProps, undefined> {
  public render() {
    const { classes } = this.props.sheet;
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
    });
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <Route exact={true} path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}
