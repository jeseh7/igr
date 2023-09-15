const typeDefs = `
  type Review {
    reviewText: String
    reviewAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    reviews: [Review]!
    review(reviewId: ID!): Review
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(reviewText: String!, reviewAuthor: String!): Review
    addComment(reviewId: ID!, commentText: String!): Review
    removeReview(reviewId: ID!): Review
    removeComment(reviewId: ID!, commentId: ID!): Review
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    reviews: [Review]!
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
