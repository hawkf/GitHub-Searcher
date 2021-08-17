import { useRef } from "react";
import { createApi } from "../services/api";
import { User } from "../type-const";
import swal from "sweetalert";

const api = createApi();

export const SearchForm: React.FC<{ onChangeHandler(user: User): void }> = (
  props
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputHanldler = (): void => {
    api
      .get(inputRef.current!.value)
      .then((response) => {
        console.log(response.data);
        props.onChangeHandler(response.data);
      })
      .catch(() => swal("Произошла ошибка во время получения данных"));
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
