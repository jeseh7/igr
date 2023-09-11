import { gql } from '@apollo/client';

export const ADD_REVIEW = gql`
  mutation addReview($reviewText: String!, $reviewAuthor: String!) {
    addReview(reviewText: $reviewText, reviewAuthor: $reviewAuthor) {
      _id
      reviewText
      reviewAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($reviewId: ID!, $commentText: String!) {
    addComment(reviewId: $reviewId, commentText: $commentText) {
      _id
      reviewText
      reviewAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
