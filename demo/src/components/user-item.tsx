import { useHistory } from "react-router-dom";
import { User } from "../type-const";
import { createApi } from "../services/api";
import axios from "axios";

let repoNumber: number | null = null;

export const UserItem: React.FC<{ user: User; reposCount: number }> = (
  props
) => {
  const { user, reposCount } = props;
  const history = useHistory();
  const USER_PAGE = `/user/${user.login}`;

  const onClickHandle = (): void => {
    history.push(USER_PAGE);
  };

  const api = createApi();

  return (
    <li onClick={onClickHandle} className='users-list__item'>
      <img
        className='users-list__item-photo'
        src={user.avatar_url}
        width='60'
        height='60'
        alt='user'
      />
      <p className='users-list__item-user-name'>{user.name}</p>
      <p className='users-list__item-repo-number'>{`Repo: ${reposCount}`}</p>
    </li>
  );
};
