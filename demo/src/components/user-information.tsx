import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createApi } from "../services/api";
import { UserFeatures } from "./user-features";
import { RepositoriesList } from "./repositories-list";
import swal from "sweetalert";

const api = createApi();

export const UserInformation: React.FC = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const { userLogin } = useParams<{ userLogin?: string }>();

  useEffect(() => {
    api
      .get(userLogin!)
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch(() => swal("Произошла ошибка во время получения данных"));
  }, [userLogin]);

  if (currentUser === null) {
    return <p>Loading</p>;
  }

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
