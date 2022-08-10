const {ApolloServer} = require("apollo-server");
const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');
const schema = require('./graphql/schema');
const server = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
