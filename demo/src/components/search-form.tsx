import React, { useState } from "react";
import { User } from "../type-const";
import axios from "axios";

export const SearchForm: React.FC<{
  onChangeHandler(users: User[]): void;
  inputSearchValue: string;
  changeInputSearchValueHandler(searchText: string): void;
}> = (props) => {
  const { onChangeHandler, inputSearchValue, changeInputSearchValueHandler } =
    props;
  const [inputValue, setInputValue] = useState(inputSearchValue);

  const onInputHanldler = (evt: React.FormEvent<HTMLInputElement>): void => {
    setInputValue(evt.currentTarget.value);
    changeInputSearchValueHandler(evt.currentTarget.value);

    if (evt.currentTarget.value.trim().length > 0) {
      axios
        .get("https://api.github.com/search/users", {
          params: {
            q: evt.currentTarget.value,
          },
        })
        .then((response) => {
          onChangeHandler(response.data.items.slice());
        })
        .catch(() => console.log("Пользователь не найден"));
    }
  };

  return (
    <form className='search-form'>
      <input
        value={inputValue}
        onChange={(evt) => onInputHanldler(evt)}
        className='search-form__input'
        placeholder='Search for Users'
        type='text'
      />
    </form>
  );
};
