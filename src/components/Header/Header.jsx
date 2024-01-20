import { useTheme } from '@emotion/react';
import { Container } from 'components/App/App.styled';

import { BiSolidMoviePlay } from 'react-icons/bi';
import { Outlet } from 'react-router-dom';
import { routes } from 'routes';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <BiSolidMoviePlay size="40px" color={theme.colors.light} />

            <LinkWrapper>
              <NavLinkStyled to={routes.HOME}>Home</NavLinkStyled>
              <NavLinkStyled to={routes.MOVIES}>Movies</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>

      <Outlet />
    </>
  );
};
