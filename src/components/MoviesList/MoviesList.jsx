import {
  Grid,
  GridImage,
  GridImageWrapper,
  GridItem,
  GridItemTitle,
} from 'components';
import { Link, useLocation } from 'react-router-dom';

import moviePlaceholder from '../../images/movie_placeholder.jpg';

const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w185';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Grid>
      {movies.map(({ id, title, poster_path }) => (
        <GridItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <GridImageWrapper>
              <GridImage
                src={
                  poster_path
                    ? `${BASE_IMAGE_URL}${POSTER_SIZE}${poster_path}`
                    : moviePlaceholder
                }
                alt={title}
              />
            </GridImageWrapper>
            <GridItemTitle>{title}</GridItemTitle>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
