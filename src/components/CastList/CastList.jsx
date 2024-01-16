import { Grid, GridItem } from 'components';

const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/';
const PROFILE_SIZE = 'w185';

export const CastList = ({ cast }) => {
  return (
    <Grid>
      {cast.map(({ id, name, profile_path }) => (
        <GridItem key={id}>
          <img
            src={`${BASE_IMAGE_URL}${PROFILE_SIZE}${profile_path}`}
            alt={name}
          />
          <p>{name}</p>
        </GridItem>
      ))}
    </Grid>
  );
};
