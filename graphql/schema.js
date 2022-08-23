const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');
const {gql} = require('apollo-server');


const typeDefs = gql`
    type Todo{
        id:ID!
        title:String
    }
    
    type Query{
        listOfTodos:[Todo]
    }
    
    type Mutation{
        createTodo(title:String!):Todo
    }
    
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;
