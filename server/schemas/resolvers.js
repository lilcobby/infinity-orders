// need to add everything we need for our resolvers. our queries and mutations
const { User, Message } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getUser: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findById({ _id: context.user._id });

        // to check if array is populating properly
        return userData;
      }
    },
  },
  Mutation: {
    addUser: async (parent, { userName, email, password }) => {
      const user = await User.create({ userName, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addList: async (parent, { name }, context) => {
      const currentUser = context.user;
      const updatedUser = await User.findByIdAndUpdate(
        currentUser._id,
        { $addToSet: { Lists: name } },
        { new: true }
      );

      return updatedUser;
    },
    addOrder: async (parent, { listId, image }, context) => {
      try {
        const currentUser = context.user;
        const user = await User.findById(currentUser._id);
        const newList = user.lists.find((list) => list._id.equals(listId));
        newList.orders.push({ image });
        const updatedUser = await user.save();
        return updatedUser;
      } catch (error) {
        throw new Error(`Failed to add order: ${error.message}`);
      }
    },
    deleteOrder: async (parent, { listId, orderId }, context) => {
      try {
        const currentUser = context.user;
        const user = await User.findById(currentUser._id);
        const newList = user.lists.find((list) => list._id.equals(listId));

        // Filter out the order with the specified orderId
        newList.orders = newList.orders.filter(
          (order) => !order._id.equals(orderId)
        );

        await user.save();

        return currentUser;
      } catch (error) {
        throw new Error(`Failed to delete order: ${error.message}`);
      }
    },
  },
};
module.exports = resolvers;

// new comment for testing
