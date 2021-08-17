import { User } from "../type-const";

export const UserFeatures: React.FC<{ user: User }> = (props) => {
  const { user } = props;
  const {
    name,
    avatar_url,
    email,
    location,
    created_at,
    followers,
    following,
  } = user;

  return (
    <section className='user-information'>
      <img
        className='user-information__image'
        src={avatar_url}
        width='120'
        height='120'
        alt='user'
      />
      <ul className='features-list'>
        <li className='features-list__item'>{name}</li>
        <li className='features-list__item'>{email}</li>
        <li className='features-list__item'>{location}</li>
        <li className='features-list__item'>{created_at}</li>
        <li className='features-list__item'>{`${followers} Followers`}</li>
        <li className='features-list__item'>{`Following ${following}`}</li>
      </ul>
    </section>
  );
};
