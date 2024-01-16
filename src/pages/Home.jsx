import { getTrendingMovies } from 'service/movie_service';
import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [error, setError] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const resp = await getTrendingMovies();
        setCountries(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading>{error}</Heading>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
