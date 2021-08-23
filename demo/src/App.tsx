import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./components/main-page";
import { UserInformation } from "./components/user-information";
import { AppRoute } from "./const";
import { User } from "./type-const";
import "./css/App.css";
import axios from "axios";
import swal from "sweetalert";

const USERS_COUNT = "2";

const App: React.FC = () => {
  const [users, setUsers] = useState([] as User[]);
  const [inputSearchValue, setInputSearchValue] = useState("");

  const onChangeHandler = (users: User[]): void => {
    setUsers(users);
  };

  const changeInputSearchValueHandler = (searchText: string) => {
    setInputSearchValue(searchText);
  };

  useEffect(() => {
    let serchedUsers: User[] | [] = [];
    let resultUsers: User[] = [];

    if (inputSearchValue.length <= 3) {
      setUsers([]);
    }

    if (inputSearchValue.length > 3) {
      axios
        .get("https://api.github.com/search/users", {
          params: {
            q: inputSearchValue,
            per_page: USERS_COUNT,
          },
        })
        .then((response) => {
          serchedUsers = response.data.items.slice();
          serchedUsers.forEach((item) => {
            axios
              .get(`https://api.github.com/users/${item.login}`)
              .then((response) => {
                resultUsers.push(response.data);
                setUsers(resultUsers.slice());
              })
              .catch(() => swal("Произошла ошибка во время получения данных"));
          });
        })
        .catch(() => console.log("Пользователь не найден"));
    }
  }, [inputSearchValue]);

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
          <UserInformation users={users} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
