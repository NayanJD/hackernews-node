const { GraphQLServer } = require("graphql-yoga");

const db = require("../models");

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: async (root, args, context, info) => {
      const links = await context.Link.findAll();
      return links;
    },
  },
  Mutation: {
    // 2
    post: async (parent, args, context) => {
      const newLink = context.Link.build({
        description: args.description,
        url: args.url,
      });

      const createdLink = await newLink.save();

      return createdLink;
    },
  },
};

// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { ...db.sequelize.models },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
