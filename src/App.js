// import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js'
import Orders from './components/Orders';
import Header from './components/Headers';
import Home from './components/Home'
import Login from './components/Login';
import Checkout from './components/Checkout'
import Payment from './components/Payment'

const promise = loadStripe(
  'pk_test_51JJgQYHul6GMttKd27bsOFgzVHMHmTQAajlecgQwWfh1KthgdKsvS2BvQ5oAhog7ImTuJVvN1Gc8qUb6WJjEicy800WML6YPN8'
  );

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;