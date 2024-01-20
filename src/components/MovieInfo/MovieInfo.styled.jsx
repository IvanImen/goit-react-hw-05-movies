import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieWrapper = styled.div`
  background: #fff;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  position: relative;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

export const Poster = styled.div`
  background-color: transparent;
  height: 90px;
  width: 140px;

  border-radius: 8px;

  z-index: 10;
  /* box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3); */
  /* border: 4px solid #fff; */

  position: absolute;
  left: -6%;
  top: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  /* width: 150px; */

  position: relative;
  border-radius: 8px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const MovieDescription = styled.div`
  padding: 50px;
  padding-left: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;
`;

export const MovieTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #999;
  font-size: 1.25rem;
  margin: 0;
`;

export const MoviePopularity = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #999;
  font-size: 1.25rem;
  margin: 0;
`;

export const MovieOverviewHeader = styled.h2`
  margin: 0 0 0.5rem 0;
  color: #999;
  font-size: 1.25rem;
  margin: 0;
`;

export const MovieOwerview = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #333;
  margin: 0;
`;

export const MovieGenre = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  color: #999;
  margin: 0;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const AdditionalInfo = styled.div`
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;
`;

export const AdditionalTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  color: #999;
  font-size: 1.25rem;
  margin: 0;
`;

export const DetailsBtnWrapper = styled.ul`
  display: flex;
  gap: 20px;
`;

export const DetailsBtn = styled.li`
  color: ${({ theme }) => theme.colors.dark};

  letter-spacing: 0.06em;
  border: 1px solid #2c5364;
  border-radius: ${({ theme }) => theme.spacing(1)};

  padding: 12px 18px;
  transition: background-color ${({ theme }) => theme.animations.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.imageBackground};
  }
`;

export const DetailsLink = styled(NavLink)`
  width: 100%;
  height: 100%;
`;
