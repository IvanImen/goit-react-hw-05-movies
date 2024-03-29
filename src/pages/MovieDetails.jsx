import { useParams } from 'react-router-dom';
import { Section, Container, Loader, Heading, MovieInfo } from 'components';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'service/movie_service';

export const MovieDetails = () => {
  const [error, setError] = useState('');
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const resp = await getMovieDetails(movieId);
        setMovie(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [movieId]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading>{error}</Heading>}
        <MovieInfo movie={movie} />
      </Container>
    </Section>
  );
};
