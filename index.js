const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const notes = require('./mockData');
const db = require('./db');

const resolvers = {
    Query: {
        notes: () => db.get()
    },
    Mutation: {
        addNote: (parent, args) => {
            const id = require('crypto')
                .randomBytes(10)
                .toString('hex');
            const note = {
                id,
                title: args.title,
                body: args.body
            };
            db.push(id, note);
            return note;
        },
        saveNote: (parent, args) => {
            const note = {
                id: args.id,
                title: args.title,
                body: args.body
            };
            db.push(note.id, note);
            return note;
        },
        deleteNote: (parent, args) => {
            db.delete(args.id);
            return { status: '200', message: 'ok' };
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

//Pre-populate the db with some notes
notes.map(note => db.push(note.id, note));
console.log(db.get());

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
