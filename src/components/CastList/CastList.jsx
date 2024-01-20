import { Grid, GridItem } from 'components';

import actorPlaceholder from '../../images/actor_placeholder.jpg';

const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/';
const PROFILE_SIZE = 'w185';

export const CastList = ({ cast }) => {
  return (
    <Grid>
      {cast.map(({ id, name, profile_path }) => (
        <GridItem key={id}>
          <img
            src={
              profile_path
                ? `${BASE_IMAGE_URL}${PROFILE_SIZE}${profile_path}`
                : actorPlaceholder
            }
            alt={name}
          />
          <p>{name}</p>
        </GridItem>
      ))}
    </Grid>
  );
};
