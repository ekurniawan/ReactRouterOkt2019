import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <h2>PageOne</h2>
      <Link to="/pageTwo">Navigate to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <h2>PageTwo</h2>
      <button>Click Me !</button><br />
      <Link to="/">Navigate to Page One</Link> 
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
            <Route path="/" exact component={PageOne} />
            <Route path="/pageTwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;