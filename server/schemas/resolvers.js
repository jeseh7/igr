const { User, Review } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("reviews");
      }
      throw AuthenticationError;
      },
    users: async () => {
      return User.find().populate("reviews");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("reviews");
    },
    reviews: async () => {
      return Review.find().sort({ createdAt: -1 });
    },

    review: async (parent, { reviewId }) => {
      return Review.findOne({ _id: reviewId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      const correctPw = await user.isCorrectPassword(password);

      const token = signToken(user);

      return { token, user };
    },
    addReview: async (parent, { reviewText, reviewAuthor }) => {
      const review = new Review({ reviewText, reviewAuthor });
    
      try {
        const savedReview = await review.save();
    
        await User.findOneAndUpdate(
          { username: reviewAuthor },
          {
            $addToSet: { reviews: savedReview._id },
          }
        );
    
        console.log(savedReview);
        return savedReview;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to create a review.");
      }
    },
    addComment: async (parent, { reviewId, commentText }) => {
      return Review.findOneAndUpdate(
        { _id: reviewId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeReview: async (parent, { reviewId }) => {
      return Review.findOneAndDelete({ _id: reviewId });
    },
    removeComment: async (parent, { reviewId, commentId }) => {
      return Review.findOneAndUpdate(
        { _id: reviewId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
