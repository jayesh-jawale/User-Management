import './App.css';
import { NavBar } from './Components/NavBar'
import {AllUsers} from './Components/AllUsers';
import {AddUsers} from './Components/AddUsers';
import {EditUsers} from './Components/EditUsers';
import {UserDetails} from './Components/UserDetails';

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
          <Switch>
            <Route exact path='/'>
            <h1 style={{textAlign: 'center', margin: '200px'}}> Welcome, this is Home of Cricket.</h1>
            </Route>

            <Route exact path='/users' component={AllUsers} />

            <Route exact path='/users/add-users' component={AddUsers} />

            <Route exact path='/users/edit-users/:id' component={EditUsers} />

            <Route exact path='/users/:id' component={UserDetails} />

            <Route exact path="**">
              <NotFound />
            </Route>
          </Switch>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <h2> Not Found</h2>
  )
}