import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'service/movie_service';
import { CastList } from 'components/CastList/CastList';
import { Container, Heading, Section } from 'components/App/App.styled';
import { Loader } from 'components';

export const Cast = () => {
  const [error, setError] = useState('');
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const resp = await getMovieCredits(movieId);
        if (!resp.length)
          setError('We don`t have information about cast for this movie');
        setCast(resp);
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
        <CastList cast={cast} />
      </Container>
    </Section>
  );
};
