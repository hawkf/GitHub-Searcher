import { useEffect, useState, useRef } from "react";
import { Repository } from "../type-const";
import { createApi } from "../services/api";
import { findSubstring } from "../utils";

const api = createApi();

export const RepositoriesList: React.FC<{ login: string }> = (props) => {
  const [repositories, setRepositories] = useState([] as Repository[]);
  const [filteredRepositories, setFilteredRepositories] = useState(
    [] as Repository[]
  );
  const inputText = useRef<HTMLInputElement>(null);
  const { login } = props;

  useEffect(() => {
    api.get(`${login}/repos`).then((response) => {
      setRepositories(response.data.slice());
      setFilteredRepositories(response.data.slice());
    });
  }, [login]);

  const onInputHandler = (): void => {
    if (inputText.current!.value.trim().length > 0) {
      const resultList = repositories.filter((item: Repository) => {
        return findSubstring(item.name, inputText.current!.value.trim());
      });
      setFilteredRepositories(resultList.slice());
    }
  };

  const onItemClickHandler = (url: string): void => {
    window.open(url);
  };

  return (
    <>
      <form className='search-form'>
        <input
          onChange={onInputHandler}
          ref={inputText}
          className='search-form__input'
          placeholder="Search for User's Repositories"
          type='text'
        />
      </form>
      <ul className='repos-list'>
        {filteredRepositories !== null &&
          filteredRepositories.map((item: Repository) => {
            return (
              <li
                onClick={() => onItemClickHandler(item.html_url)}
                className='repos-list__item'
              >
                <p className='repos-list__repo-name'>{item.name}</p>
                <div className='repos-list__detail-information'>
                  <p>{`${item.forks_count} Forks`}</p>
                  <p>{`${item.stargazers_count} Stars`}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
