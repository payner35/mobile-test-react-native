import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { applyMiddleware } from 'redux';


//set up apollo and graphQL
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cizat2r7j5glw0166rlbtqn5n';
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0ODgzOTA1MTUsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNpemF0MnI3ajVnbHcwMTY2cmxidHFuNW4iLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNpenI5YTd1bWszNmowMTUwbmh4cDR4b3QifQ.GkgiXAFgstLmd5zxnOkPgyNtjNWXHtEYYmxUfryVKOE';
if (!GRAPHCMS_API || !TOKEN) {
    throw new Error(`Environment variables "GRAPHCMS_API" or "TOKEN" missing`)
}
//sort the token...!!
const networkInterface = createNetworkInterface({
  uri: GRAPHCMS_API
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

    // get the authentication token from local storage if it exists
    req.options.headers.authorization = `Bearer ${TOKEN}`;
    next();
  }
}]);

export default client = new ApolloClient({
  networkInterface,
});
