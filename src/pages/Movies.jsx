import { useSearchParams } from 'react-router-dom';

import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  MoviesList,
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
    setSearchQuery({ query });
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
            <div>
              {isPrevBtnVisible && (
                <button type="button" onClick={() => changePageNumber(-1)}>
                  Previos page
                </button>
              )}
              <div></div>
              {isNextBtnVisible && (
                <button type="button" onClick={() => changePageNumber(+1)}>
                  Next page
                </button>
              )}
            </div>
            <MoviesList movies={movies} />
          </>
        )}
      </Container>
    </Section>
  );
};
