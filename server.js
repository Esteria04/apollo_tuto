import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type User {
        id: ID,
        username: String
    }
    type Tweets {
        id: ID,
        text: String,
        author: User
    }    
    type Query {
        allTweets: [Tweets]
    }
`;

const server = new ApolloServer({ typeDefs });
server.listen().then(({url})=>{
    console.log(`Running on ${url}`);
});
