const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const notes = require('./mockData');
const db = require('./db');

const resolvers = {
    Query: {
        notes: () => db.get()
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

//Pre-populate the db with some notes
notes.map(note => db.push(note.id, note));
console.log(db.get());

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
