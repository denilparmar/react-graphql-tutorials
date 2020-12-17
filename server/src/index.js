const { GraphQLServer } = require('graphql-yoga');
const users = require('./utils/users');
const Mutation = require('./resolvers/Mutuation');
const Query = require('./resolvers/Query');

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation
    },
    context: {
        users,
    }
});

const options = {
    port: 4000,
    endpoint: '/graphql'
};

server.start(options, ({ port }) =>
    console.log(`Server started on port ${port}`)
);