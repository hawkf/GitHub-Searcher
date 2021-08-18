import { SearchForm } from "./search-form";
import { UserItem } from "./user-item";
import { User } from "../type-const";

export interface Props {
  user: User;
}

export const MainPage: React.FC<{
  users: User[];
  onChangeHandler(users: User[]): void;
  inputSearchValue: string;
  changeInputSearchValueHandler(searchText: string): void;
}> = (props) => {
  const {
    users,
    onChangeHandler,
    inputSearchValue,
    changeInputSearchValueHandler,
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
            return <UserItem user={item} key={item.login} />;
          })}
        </ul>
      </main>
    </>
  );
};
