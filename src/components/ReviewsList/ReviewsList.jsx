import {
  Accent,
  ReviewText,
  ReviewTitle,
  ReviewWrapper,
} from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <ReviewWrapper key={id}>
          <ReviewTitle>
            Author: <Accent>{author}</Accent>
          </ReviewTitle>
          <ReviewText>{content}</ReviewText>
        </ReviewWrapper>
      ))}
    </ul>
  );
};
