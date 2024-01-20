import { useSearchParams } from 'react-router-dom';

import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  MoviesList,
  PrevNextBtn,
  PrevNextBtnWrapper,
} from 'components';
import { useEffect, useState } from 'react';
import { getSearchMovies } from 'service/movie_service';

export const Movies = () => {
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPrevBtnVisible, setIsPrevBtnVisible] = useState(false);
  const [isNextBtnVisible, setIsNextBtnVisible] = useState(false);

  const [searchQuery, setSearchQuery] = useSearchParams();

  useEffect(() => {
    setError('');

    const query = searchQuery.get('query');
    const page = Number(searchQuery.get('page'));

    if (query) setIsLoading(true);
    if (!query) return;

    const getData = async () => {
      try {
        const resp = await getSearchMovies(query, page);

        setMovies([...resp.results]);

        setIsPrevBtnVisible(page > 1);
        setIsNextBtnVisible(page < resp.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [searchQuery]);

  const searchHandler = query => {
    setMovies([]);
    setSearchQuery({ query, page: 1 });
  };

  const changePageNumber = step => {
    const query = searchQuery.get('query');
    const page = Number(searchQuery.get('page'));
    setSearchQuery({ query, page: page + step });
  };

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <SearchForm searchByQuery={searchHandler} />
        {error && <Heading>{error}</Heading>}

        {searchQuery.get('query') && (
          <>
            <PrevNextBtnWrapper>
              {isPrevBtnVisible && !error && (
                <PrevNextBtn type="button" onClick={() => changePageNumber(-1)}>
                  Previos page
                </PrevNextBtn>
              )}
              <div></div>
              {isNextBtnVisible && !error && (
                <PrevNextBtn type="button" onClick={() => changePageNumber(1)}>
                  Next page
                </PrevNextBtn>
              )}
            </PrevNextBtnWrapper>
            <MoviesList movies={movies} />
          </>
        )}
      </Container>
    </Section>
  );
};
