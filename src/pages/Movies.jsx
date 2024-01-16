import { useSearchParams } from 'react-router-dom';

import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { getSearchMovies } from 'service/movie_service';

export const Movies = () => {
  const [error, setError] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const searchHandler = region => {
    setSearchQuery({ query: region });
  };

  useEffect(() => {
    const query = searchQuery.get('query');

    if (!query) return;

    const getData = async () => {
      try {
        const resp = await getSearchMovies(query);
        setCountries(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchQuery]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <SearchForm searchByRegion={searchHandler} />
        {error && <Heading>{error}</Heading>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
