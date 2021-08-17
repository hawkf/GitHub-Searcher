import { useState, useRef } from "react";
import { throwStatement } from "@babel/types";
import { createApi } from "../services/api";
import { User } from "../type-const";

const api = createApi();

export const SearchForm: React.FC<{ onChangeHandler(user: User): void }> = (
  props
) => {
  const [inputText, setInputTex] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onInputHanldler = (): void => {
    api.get(inputRef.current!.value).then((response) => {
      console.log(response.data);
      props.onChangeHandler(response.data);
    });
  };

  return (
    <form className='search-form'>
      <input
        ref={inputRef}
        onChange={onInputHanldler}
        className='search-form__input'
        placeholder='Search for Users'
        type='text'
      />
    </form>
  );
};
