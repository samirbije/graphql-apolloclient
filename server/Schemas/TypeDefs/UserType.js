const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    message: { type: GraphQLString },
    userName: { type: GraphQLString },
    createdTime: { type: GraphQLString },
  }),
});

module.exports = UserType;
