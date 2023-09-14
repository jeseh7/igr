import { gql } from '@apollo/client';

export const QUERY_REVIEWS = gql`
  query getReviews {
    reviews {
      _id
      reviewText
      reviewAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_REVIEW = gql`
  query getSingleReview($reviewId: ID!) {
    review(reviewId: $reviewId) {
      _id
      reviewText
      reviewAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      username
      reviews {
        _id
        reviewText
        reviewAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      username
      reviews {
        _id
        reviewText
        reviewAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      reviews {
        _id
        reviewText
        reviewAuthor
        createdAt
      }
    }
  }
`;
