import { useHistory } from "react-router-dom";
import { User } from "../type-const";

export const UserItem: React.FC<{ user: User }> = (props) => {
  const { user } = props;
  const history = useHistory();
  const USER_PAGE = `/user/${user.login}`;

  const onClickHandle = (): void => {
    history.push(USER_PAGE);
  };

  return (
    <li onClick={onClickHandle} className='users-list__item'>
      <img
        className='users-list__item-photo'
        src={user.avatar_url}
        width='60'
        height='60'
        alt='users-photo'
      />
      <p className='users-list__item-user-name'>{user.name}</p>
      <p className='users-list__item-repo-number'>{`Repo: ${user.public_repos}`}</p>
    </li>
  );
};
