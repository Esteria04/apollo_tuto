import { ApolloServer, gql } from "apollo-server";

const typeDef = gql`
    type Query {
        type Author {
            name: String,
            articles: [Article],
            comments: [Comment]
        }
        type Article {
            author: Author,                                       
            publish-date: String,
            modify-date: String,
            title: String,
            content: String,
            comments: [Comment]
        }
        type Comment {
            author: Author,
            article: Article,
            content: String
        }
    }
`;

const server = new ApolloServer({});
server.listen().then(({url})=>{
    console.log(`Running on the ${url}`);
});
