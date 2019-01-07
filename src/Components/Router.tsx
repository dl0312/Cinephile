import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
import CommunityAdd from "../Routes/CommunityAdd";

const Container = styled.div`
  margin: 6rem auto 0;
  padding: 2rem;
  width: 60rem;
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
      <Route path="/login" exact component={LogIn} />
      <Route path="/register" exact component={Register} />
      <Route
        path={"*"}
        exact
        render={({ location }) => (
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Container>
              <Switch>
                <Route path="/film/:id" exact component={MovieDetail} />
                <Route path="/" exact component={Home} />
                <Route path="/director/:id" exact component={Home} />
                <Route path="/films/year/:year" exact component={Home} />
                <Route path="/film" exact component={Home} />
                <Route path="/community/add" exact component={CommunityAdd} />
                <Route path="/community" exact component={Community} />
                <Route path="/ticket" exact component={Ticket} />
                <Route path="/goods" exact component={Goods} />
                <Route path="/search/:term" exact component={Search} />
                <Redirect from="*" to="/" />
              </Switch>
            </Container>
          </>
        )}
      />
    </Switch>
  </>
);
