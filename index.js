const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const notes = require('./mockData');

const resolvers = {
    Query: {
        notes: () => notes
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
