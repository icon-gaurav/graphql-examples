const Todo = require('../models/todo');
const resolvers = {
    Query: {
        listOfTodos: () => {
            return [{
                id: 1,
                title: "Wakeup"
            },
                {
                    id: 2,
                    title: "Setup Bed"
                },
                {
                    id: 3,
                    title: "Fresh"
                },
                {
                    id: 4,
                    title: "Exercise"
                }]
        }
    },

    Mutation: {
        createTodo: (_parent, {title}, _info) => {
            let newTodo = new Todo({
                title
            });
            return newTodo.save()
                .then(todo => todo)
                .catch(e => e)
        }
    }
};

module.exports = resolvers
