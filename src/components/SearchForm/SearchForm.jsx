import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, SearchFormStyled, Input } from './SearchForm.styled';

export const SearchForm = ({ searchByQuery }) => {
  const [movieQuery, setMovieQuery] = useState('');

  const onChangeHandler = e => {
    setMovieQuery(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    searchByQuery(movieQuery);
  };

  return (
    <SearchFormStyled onSubmit={onSubmitHandler}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Input
        type="text"
        name="movie"
        required
        placeholder="Enter movie title here"
        onChange={onChangeHandler}
        value={movieQuery}
      ></Input>
    </SearchFormStyled>
  );
};
