import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./components/main-page";
import { UserInformation } from "./components/user-information";
import { AppRoute } from "./const";
import { User } from "./type-const";
import "./css/App.css";

const App: React.FC = () => {
  const [users, setUsers] = useState([] as User[]);

  const onChangeHandler = (user: User): void => {
    setUsers([...users, user]);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage
            users={users}
            onChangeHandler={(user: User) => onChangeHandler(user)}
          />
        </Route>
        <Route exact path={AppRoute.USER}>
          <UserInformation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
