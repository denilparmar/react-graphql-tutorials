const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutuation');
const Query = require('./resolvers/Query');
require('../connection');

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation
    },
});

const options = {
    port: 4000,
    endpoint: '/graphql'
};

server.start(options, ({ port }) =>
    console.log(`Server started on port ${port}`)
);