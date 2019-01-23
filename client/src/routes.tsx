import React from 'react';
import { Route, Switch, BrowserRouter }  from 'react-router-dom';
import RoomsComponent from './rooms/rooms';
import PokerSessionComponent from './pokerSession/pokerSession';

import {P2PLayoutComponent} from './components/P2PLayoutComponent';


const Routes: React.SFC = () => (
    <P2PLayoutComponent>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RoomsComponent} />
          <Route path="/pokerSession" component={PokerSessionComponent} />
          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </P2PLayoutComponent>
  )
  
  export default Routes