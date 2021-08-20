import { SearchForm } from "./search-form";
import { UserItem } from "./user-item";
import { User } from "../type-const";
import { Repository } from "../type-const";

export interface Props {
  user: User;
}

export const MainPage: React.FC<{
  users: User[];
  onChangeHandler(users: User[]): void;
  inputSearchValue: string;
  changeInputSearchValueHandler(searchText: string): void;
  repos: Repository[];
}> = (props) => {
  const {
    users,
    onChangeHandler,
    inputSearchValue,
    changeInputSearchValueHandler,
    repos,
  } = props;

  return (
    <>
      <header className='page-header'>
        <h1 className='page-header__title'>GitHub Searcher</h1>
      </header>
      <main className='main-container'>
        <SearchForm
          onChangeHandler={(users: User[]) => onChangeHandler(users)}
          inputSearchValue={inputSearchValue}
          changeInputSearchValueHandler={(searchText: string): void =>
            changeInputSearchValueHandler(searchText)
          }
        />
        <ul className='users-list'>
          {users.map((item) => {
            const reposItems = repos.filter((repo) => {
              return repo.owner.login === item.login;
            });

            return (
              <UserItem
                user={item}
                key={item.login}
                reposCount={reposItems.length}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
};
