import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'service/movie_service';
import { Container, Heading, Section } from 'components/App/App.styled';
import { Loader } from 'components';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

export const Reviews = () => {
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const resp = await getMovieReviews(movieId);
        if (!resp.length) setError('We don`t have any reviews for this movie');
        setReviews(resp);
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
        <ReviewsList reviews={reviews} />
      </Container>
    </Section>
  );
};
