import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";

function getHeaders() {
    const headers: HeadersInit = {};
    headers["Content-Type"] = `application/json`;
    return headers;
}

const httpLink = new HttpLink({
    uri: "https://movies.keyhole.institute/graphql",
    fetch: (uri: RequestInfo, options: RequestInit) => {
        options.headers = getHeaders();
        return fetch(uri, options);
    },
});

const errorLink = onError((error) => {
    if (process.env.NODE_ENV !== "production") {
        console.log(error);
    }
});

// Create the apollo client
export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: errorLink.concat(httpLink),
});