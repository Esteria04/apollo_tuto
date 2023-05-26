import { ApolloServer, gql } from "apollo-server";

const tweets = [
    {
        id:"1",
        text:"hello"
    },
    {
        id:"2",
        text:"hello1"
    },
    {
        id:"3",
        text:"hello2"
    },
    {
        id:"4",
        text:"hello3"
    },
]

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
    }
    type Tweet {
        id: ID!
        text: String!
        author: User!
    }    
    type Query {
        allTweets: [Tweet!]!
        tweet(id: ID): Tweet
        ping: String!
    }
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id: ID!): Boolean!
    }
`;

const resolvers = {
    Query: {
        tweet() {
            console.log("I'm called");
            return null;
        },
        ping() {
            return "pong";
        },
        allTweets() {
            return tweets;
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({url})=>{
    console.log(`Running on ${url}`);
});  