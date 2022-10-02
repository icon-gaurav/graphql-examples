const {ApolloServer} = require("apollo-server");
var mongoose = require('mongoose');
const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');
const schema = require('./graphql/schema');

// database url from atlas cloud
mongoose.connect("DATABASE_URL", {useNewUrlParser: true, useUnifiedTopology: true}).then((result) => {
    const server = new ApolloServer({
        schema,
        plugins: [
            ApolloServerPluginLandingPageLocalDefault({embed: true}),
        ],
    });

// The `listen` method launches a web server.
    server.listen().then(({url}) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}).catch((error) => {
    console.log(error);
});
