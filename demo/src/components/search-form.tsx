import React, { useEffect, useState } from "react";
import { User } from "../type-const";
import { useDebounce } from "../hooks/useDebounce";

const INPUT_DELAY = 500;

export const SearchForm: React.FC<{
  onChangeHandler(users: User[]): void;
  inputSearchValue: string;
  changeInputSearchValueHandler(searchText: string): void;
}> = (props) => {
  const { inputSearchValue, changeInputSearchValueHandler } = props;
  const [inputValue, setInputValue] = useState(inputSearchValue);

  const onInputHanldler = (evt: React.FormEvent<HTMLInputElement>): void => {
    setInputValue(evt.currentTarget.value.trim());
  };

  const debauncedInputValue = useDebounce(inputValue, INPUT_DELAY);

  useEffect(() => {
    changeInputSearchValueHandler(debauncedInputValue);
  }, [debauncedInputValue, changeInputSearchValueHandler]);

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
