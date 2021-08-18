import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./components/main-page";
import { UserInformation } from "./components/user-information";
import { AppRoute } from "./const";
import { User } from "./type-const";
import "./css/App.css";

let inputSearchValue = "";

const changeInputSearchValueHandler = (serchText: string) => {
  inputSearchValue = serchText;
};

const App: React.FC = () => {
  const [users, setUsers] = useState([] as User[]);

  const onChangeHandler = (users: User[]): void => {
    setUsers(users);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage
            users={users}
            onChangeHandler={(users: User[]) => onChangeHandler(users)}
            inputSearchValue={inputSearchValue}
            changeInputSearchValueHandler={(searchText: string): void =>
              changeInputSearchValueHandler(searchText)
            }
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
