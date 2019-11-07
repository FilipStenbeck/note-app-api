const { gql } = require('apollo-server');

const typeDefs = gql`
    type Note {
        title: String
        body: String
        id: ID
    }

    type Query {
        notes: [Note]
    }
`;

module.exports = typeDefs;
