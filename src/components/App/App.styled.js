import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    padding-top: ${({ theme }) => theme.spacing(10)};
    padding-bottom: ${({ theme }) => theme.spacing(10)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    padding-top: ${({ theme }) => theme.spacing(20)};
    padding-bottom: ${({ theme }) => theme.spacing(20)};
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: ${({ theme }) => theme.breakpoints.s};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: ${({ theme }) => theme.breakpoints.m};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: ${({ theme }) => theme.breakpoints.l};
  }
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};

    margin-bottom: ${({ theme }) => theme.spacing(7)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fontSizes.large};

    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-bottom: ${({ theme }) => theme.spacing(20)};
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${({ theme }) => theme.spacing(5)};
`;

export const GridItem = styled.li`
  padding: ${({ theme }) => theme.spacing(2.5)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};

  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${({ theme }) => theme.spacing(4)};
  transition: transform 0.5s ${({ theme }) => theme.animations.cubicBezier};

  overflow: hidden;
  cursor: zoom-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px ${({ theme }) => theme.colors.primary};
  }
`;

export const GridImageWrapper = styled.div`
  width: 100%;
  height: 286px;
  overflow: hidden;
`;

export const GridImage = styled.img`
  width: 100%;
  height: auto;
`;

export const GridItemTitle = styled.h2`
  margin-top: ${({ theme }) => theme.spacing(2.5)};
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  text-align: center;

  transition-property: color;
  transition-duration: 0.2s;
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const PrevNextBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PrevNextBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};

  letter-spacing: 0.06em;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(15)};
  padding: 12px 18px;
  transition: background-color ${({ theme }) => theme.animations.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.imageBackground};
  }
`;
