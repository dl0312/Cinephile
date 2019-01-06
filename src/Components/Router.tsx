import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import MovieDetail from "../Routes/MovieDetail";
import Search from "../Routes/Search";
import Header from "./Header";
import LogIn from "../Routes/LogIn";
import Register from "../Routes/Register";
import styled from "styled-components";
import Community from "../Routes/Community";
import Ticket from "../Routes/Ticket";
import Goods from "../Routes/Goods";

const Container = styled.div`
  margin-top: 6rem;
  padding: 2rem;
`;

// function PrivateRoute({ component: Component, isLoggedIn, ...rest }: any) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isLoggedIn === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// }

interface IProps {
  isLoggedIn: boolean;
}

export const Router: React.SFC<IProps> = ({ isLoggedIn }) => (
  <>
    <Switch>
      <Route path="/login" exact={true} component={LogIn} />
      <Route path="/register" exact={true} component={Register} />
      <Route
        path={"*"}
        exact={true}
        render={({ location }) => (
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Container>
              <Route path="/film/:id" component={MovieDetail} />
              <Route path="/" exact component={Home} />
              <Route path="/director/:id" exact component={Home} />
              <Route path="/films/year/:year" exact component={Home} />
              <Route path="/film" exact component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/community" component={Community} />
              <Route path="/ticket" component={Ticket} />
              <Route path="/goods" component={Goods} />

              <Redirect from="*" to="/" />
            </Container>
          </>
        )}
      />
    </Switch>
  </>
);
