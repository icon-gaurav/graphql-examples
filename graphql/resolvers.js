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
            return {
                id: Math.floor(Math.random() * 100),
                title: title
            }
        }
    }
};

module.exports = resolvers
