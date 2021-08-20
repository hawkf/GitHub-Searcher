import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./components/main-page";
import { UserInformation } from "./components/user-information";
import { AppRoute } from "./const";
import { User } from "./type-const";
import "./css/App.css";
import axios from "axios";
import { Repository } from "./type-const";

let inputSearchValue = "";

const changeInputSearchValueHandler = (serchText: string) => {
  inputSearchValue = serchText;
};

const App: React.FC = () => {
  const [users, setUsers] = useState([] as User[]);
  const [repos, setRepos] = useState([] as Repository[] | []);

  const onChangeHandler = (users: User[]): void => {
    setUsers(users);
  };

  const usersList = users
    .map((item) => {
      return `user:${item.login}`;
    })
    .join(" ");

  useEffect(() => {
    const queryString = encodeURIComponent(usersList);
    if (usersList.length > 0) {
      let pageCount: number;
      let totalCount: number = 0;
      axios
        .get(
          `https://api.github.com/search/repositories?q=${queryString}&per_page=${100}&page=${1}`
        )
        .then((response) => {
          totalCount = response.data.total_count;
          setRepos(response.data.items.slice());
          pageCount = Math.trunc(totalCount / 100);

          for (let i = 2; i <= pageCount! + 1; i++) {
            axios
              .get(
                `https://api.github.com/search/repositories?q=${queryString}&per_page=${100}&page=${i}`
              )
              .then((response) => {
                setRepos(repos!.concat(response.data.items.slice()));
                console.log(repos);
              });
          }
        })
        .catch((response) => {
          console.log(response.data);
        });
    }
  }, [users]);

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
            repos={repos}
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
