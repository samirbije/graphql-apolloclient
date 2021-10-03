import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";
import Form from "./Components/Form";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      <div className="container">
        <div className="page-title">
          <div className="row gutters">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <h5 className="title">1 day chat App</h5>
              <p>All messages will be deleted at every 00:00 UTC</p>
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card m-0">
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                    <div className="users-container">
                      <div className="form-group">
                        <label for="exampleFormControlSelect1">1. Choose your user</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                          <option>Joyse</option>
                          <option>Sam</option>
                          <option>Russell</option>
                        </select>
                      </div>
                      <p>2. Choose your Channel</p>
                      <ul className="users">
                        <li className="channel active-user">
                          <p className="name-time">
                            <span className="name">General Channel</span>
                          </p>
                        </li>
                        <li className="channel">
                          <p className="name-time">
                            <span className="name">Technology Channel</span>
                          </p>
                        </li>
                        <li className="channel">
                          <p className="name-time">
                            <span className="name">LGTM Channel</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                    <div className="selected-user">
                      <span>LGTM Channel</span>
                    </div>
                    <div className="chat-container">
                      <GetUsers />
                      <Form />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
