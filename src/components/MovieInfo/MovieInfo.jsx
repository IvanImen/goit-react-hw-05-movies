import { useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  AdditionalInfo,
  AdditionalTitle,
  DetailsBtn,
  DetailsBtnWrapper,
  GoBackBtn,
  MovieDescription,
  MovieGenre,
  MovieOverviewHeader,
  MovieOwerview,
  MoviePopularity,
  MovieTitle,
  MovieWrapper,
  Poster,
} from 'components';
import { Image, Accent } from './MovieInfo.styled';

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
      <MovieWrapper>
        <Poster>
          <Image
            src={`${BASE_IMAGE_URL}${POSTER_SIZE}${poster_path}`}
            alt={title}
          />
        </Poster>
        <MovieDescription>
          <MovieTitle>
            Title:{' '}
            <Accent>
              {title} ({release_date?.slice(0, 4)})
            </Accent>
          </MovieTitle>

          <MoviePopularity>
            Popularity: <Accent>{popularity}</Accent>
          </MoviePopularity>

          <MovieOverviewHeader>Overview</MovieOverviewHeader>
          <MovieOwerview>{overview}</MovieOwerview>

          <MovieGenre>
            Genres: <Accent>{genres.map(({ name }) => name).join(', ')}</Accent>
          </MovieGenre>
        </MovieDescription>
      </MovieWrapper>
      <MovieWrapper>
        <AdditionalInfo>
          <AdditionalTitle>Additional information</AdditionalTitle>
          <DetailsBtnWrapper>
            <DetailsBtn>
              <NavLink to="cast">Cast</NavLink>
            </DetailsBtn>
            <DetailsBtn>
              <NavLink to="reviews">Reviews</NavLink>
            </DetailsBtn>
          </DetailsBtnWrapper>
        </AdditionalInfo>
      </MovieWrapper>
      <Outlet />
    </>
  );
};
