import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w185';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Grid>
      {movies.map(({ id, title, poster_path }) => (
        <GridItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`${BASE_IMAGE_URL}${POSTER_SIZE}${poster_path}`}
              alt={title}
            />
            <p>{title}</p>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
