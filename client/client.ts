import { ApolloClient, InMemoryCache } from "@apollo/client";

export const setClient = (type: "graphql" | "apiRest") => {
  if (type === "apiRest") {
    return fetch;
  }

  if (type === "graphql") {
    return new ApolloClient({
      uri: "https://swapi-graphql.eskerda.vercel.app/",
      cache: new InMemoryCache(),
    });
  }

  throw new Error("Invalid client type");
};
