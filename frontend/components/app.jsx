import React from 'react';
import GreetingContainer from './greeting_container';
// import SessionForm from './session_form/session_form_container';
import { Route, Switch } from 'react-router-dom';
// import {AuthRoute, ProtectedRoute} from '../util/route_util';


const App = ({currentUser}) => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer />
      </header>
    </div>

  );
};

export default App;

      // <Switch>
        // <AuthRoute path="/login" component={SessionForm} />
        // <ProtectedRoute path="/" component={GreetingContainer} />
      // </Switch>
