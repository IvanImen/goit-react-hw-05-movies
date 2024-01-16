import { useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { GoBackBtn } from 'components';
import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './MovieInfo.styled';

const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w342';

export const MovieInfo = ({
  movie: {
    poster_path,
    title,
    release_date,
    popularity,
    overview,
    genres = [],
  },
}) => {
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');

  return (
    <>
      <GoBackBtn path={goBack.current}>Go back</GoBackBtn>
      <CountryWrapper>
        <Flag>
          <Image
            src={`${BASE_IMAGE_URL}${POSTER_SIZE}${poster_path}`}
            alt={title}
          />
        </Flag>
        <CountryDescription>
          <CountryCapital>
            Title:{' '}
            <Accent>
              {title}({release_date})
            </Accent>
          </CountryCapital>

          <CountryDetail>
            Popularity: <Accent>{popularity}</Accent>
          </CountryDetail>

          <h2>Overview</h2>
          <CountryTitle>{overview}</CountryTitle>

          <CountryDetail>
            Genres: <Accent>{genres.map(({ name }) => name).join(', ')}</Accent>
          </CountryDetail>
        </CountryDescription>
      </CountryWrapper>
      <div>
        <h3>Editional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
