import { GraphQLClient } from "graphql-request";

export const GRAPHQL_ENDPOINT =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhw4y2qh12s601tb1hzae4sb/master";

export const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
  },
});
