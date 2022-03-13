import React, { Suspense } from "react";
import "./assets/style.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const AddBook = React.lazy(() => import("./pages/AddBook"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  const { path } = useRouteMatch();

  return (
    <Suspense fallback={<div></div>}>
      <>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path={"/add-book"} component={AddBook}></Route>
        </Switch>
      </>
    </Suspense>
  );
}

export default App;
