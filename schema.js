const { gql } = require('apollo-server');

const typeDefs = gql`
    type Note {
        title: String
        body: String
        id: String
    }

    type Query {
        notes: [Note]
    }

    input NoteInput {
        title: String
        body: String
    }

    type Message {
        status: String
        message: String
    }
    type Mutation {
        saveNote(id: String, title: String, body: String): Note
        addNote(title: String, body: String): Note
        deleteNote(id: String): Message
    }
`;

module.exports = typeDefs;
