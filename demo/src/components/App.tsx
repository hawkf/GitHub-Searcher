import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./main-page";
import { UserInformation } from "./user-information";
import { AppRoute } from "../const";
import "../css/App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.USER}>
          <UserInformation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
