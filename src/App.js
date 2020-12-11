import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51GsSZRBXI5visGcE83adCKAZYDJtm8eznkpx6v7LfL6TeL20idktpivoPO3iRkOPKZVnvphE6bjhBFYP5fHCzeJk00wufLekPI"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        dispatch({
          type: "SET_USER",
          user: user,
        });
        console.log("user is >>>", uid);
        // ...
      } else {
        // User is signed out
        // ...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    //will only run once when the app component loads
  }, []);
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            {/*header */}
            <Header />

            {/*Home */}
            <Checkout />
          </Route>
          <Route path="/payment">
            {/*header */}
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

            {/*Home */}
          </Route>
          <Route path="/">
            <Header />

            {/*header */}
            {/*Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
