import React from "react";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router";

const App = () => {
  console.log(useSelector((state) => state));
  const isAuth = useSelector((state) => state.auth.user.isAuth);
  return (
    <div className="App">
      <Header isAuth={isAuth} />
      <Container maxWidth="lg">
        <Box>
          {isAuth ? <Redirect to="/profile" /> : <Redirect to="/" />}
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/">
              {isAuth ? (
                <div>
                  <h1>Главная страница</h1>
                </div>
              ) : (
                <Login isAuth={isAuth} />
              )}
            </Route>
          </Switch>
        </Box>
      </Container>
    </div>
  );
};

export default App;
