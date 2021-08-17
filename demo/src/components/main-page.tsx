import { useState } from "react";
import { SearchForm } from "./search-form";
import { UserItem } from "./user-item";
import { User } from "../type-const";

export interface Props {
  user: User;
}

export const MainPage: React.FC = () => {
  const [users, setUsers] = useState([] as User[]);

  const onChangeHandler = (user: User): void => {
    setUsers([...users, user]);
  };

  return (
    <>
      <header className='page-header'>
        <h1 className='page-header__title'>GitHub Searcher</h1>
      </header>
      <main className='main-container'>
        <SearchForm onChangeHandler={(user: User) => onChangeHandler(user)} />
        <ul className='users-list'>
          {users.map((item) => {
            return <UserItem user={item} />;
          })}
        </ul>
      </main>
    </>
  );
};