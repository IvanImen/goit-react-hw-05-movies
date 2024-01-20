import styled from '@emotion/styled';

export const ReviewWrapper = styled.li`
  background: #fff;

  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  position: relative;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  padding: 50px;
`;

export const ReviewTitle = styled.h3`
  color: #999;
  margin-bottom: 50px;
`;

export const ReviewText = styled.p`
  color: #2c5364;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
