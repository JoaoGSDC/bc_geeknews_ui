import { ApolloServer, gql } from 'apollo-server-micro';
import { getMostRead } from '../../services/hooks/useMostRead';
import { getNews } from '../../services/hooks/useNews';
import { getTops } from '../../services/hooks/useTops';

const typeDefs = gql`
  type News {
    id: string;
    title: string;
    subtitle: string;
    matter: string;
    category: string;
    topmatter: number;
    views: number;
    datepublication: Date;
    image: string;
    duration: number;
    game: string;
  }

  type Query {
    sayHello: String
    news: [News]
    tops: [News]
    most: [News]
  }
`;

const resolvers = {
  Query: {
    news() {
      return getNews(1);
    },
    tops() {
      return getTops();
    },
    most() {
      return getMostRead();
    },
    sayHello() {
      return 'Hello World!';
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default (req: any, res: any) => {
  apolloServer.createHandler({
    path: '/api/graphql/',
  })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};
