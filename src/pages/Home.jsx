import { getTrendingMovies } from 'service/movie_service';
import { Container, Heading, Loader, MoviesList, Section } from 'components';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const resp = await getTrendingMovies();
        console.log('resp :>> ', resp);
        setMovies(resp);
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
        <MoviesList movies={movies} />
      </Container>
    </Section>
  );
};
