import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserFeatures } from "./user-features";
import { RepositoriesList } from "./repositories-list";
import { User } from "../type-const";

export const UserInformation: React.FC<{ users: User[] }> = (props) => {
  const [currentUser, setCurrentUser] = useState(
    null as null | User | undefined
  );
  const { users } = props;

  const { userLogin } = useParams<{ userLogin?: string }>();

  useEffect(() => {
    setCurrentUser(
      users.find((item: User) => {
        return item.login === userLogin;
      })
    );
  }, [userLogin, users]);

  return (
    <>
      <header className='page-header'>
        <h1 className='page-header__title'>GitHub Searcher</h1>
      </header>
      <main className='main-container'>
        <UserFeatures user={currentUser!} />
        <p className='user-information-biography'>
          This is their biography. It may be long and needs to all fit
        </p>
        <RepositoriesList login={userLogin!} />
      </main>
    </>
  );
};
