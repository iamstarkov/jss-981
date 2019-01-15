import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import injectSheet, {ThemeProvider} from 'react-jss'

const theme = {};

const A = injectSheet({ rootA: {} })(props => (<div className={props.classes.rootA} />));
const B = injectSheet({ rootB: { color: p => !!p.whatever ? 'white' : 'black' } })(props => (<div className={props.classes.rootB} />));
const C = injectSheet(theme => ({ rootC: {} }))(props => (<div className={props.classes.rootC} />));
const D = injectSheet(theme => ({ rootD: { color: p => !!p.whatever ? 'white' : 'black' }}))(props => (<div className={props.classes.rootD} />));

const AppRouter = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <div>
        <nav>
          <Link to="/a">Non-Themed, Non-Dynamic (WARNING)</Link>
          <br />
          <Link to="/b">Non-Themed, Dynamic (WARNING)</Link>
          <br />
          <Link to="/c">Themed, Non-Dynamic</Link>
          <br />
          <Link to="/d">Themed, Dynamic</Link>
        </nav>
        <Switch>
          <Route path="/a" exact component={A} />
          <Route path="/b" exact component={B} />
          <Route path="/c" exact component={C} />
          <Route path="/d" exact component={D} />
          <Redirect from="/" to="/a" />
        </Switch>
      </div>
    </ThemeProvider>
  </Router>
);

export default AppRouter;
