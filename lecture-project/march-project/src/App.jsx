import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Cards from "./components/Cards";
import ReactState from "./components/ReactState";
import Forms from "./components/Forms";
import PuppyList from "./components/Puppies/PuppyList";
import PuppyDetails from "./components/Puppies/PuppyDetails";
import ClassComponent from "./components/ClassComponents";
import "./App.css";

const testElement = document.createElement("div");

window.React = React;
window.testElement = testElement;

const banana = { green: "not great", yellow: "awesome!" };

function App() {
  const [state, setState] = useState(0);

  return (
    // <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/puppies/:breed">
            <PuppyDetails />
          </Route>
          <Route path="/puppies">
             <PuppyList />
          </Route>
          <Route path="/classes">
            <ClassComponent />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/count">
            <ReactState />
          </Route>
          <Route path="/cards">
            <Cards banana={banana} onClick={() => {}}>
              <h2>I'm the h2 child</h2>
              <h2>I'm the h2 child</h2>
            </Cards>
            <div onClick={() => {}} key={"string"}>
              this is jsx
            </div>

            {/* {Array(20).fill("dollarbills").map((el, idx) => (<div key={idx}>
          <h3>here is the element: {el}</h3>
        </div>))} */}
          </Route>
          <Route exact path="/">
            <header className="App-header">
              <h1>howdy there</h1>
              <h3>count: {state}</h3>
              <button
                onClick={() => {
                  setState(state + 1);
                }}
              >
                plus
              </button>
              <button
                onClick={() => {
                  testElement.addEventListener("click", ((e) => {})());
                  setState(state - 1);
                }}
              >
                minus
              </button>
            </header>
          </Route>
          <Route path="*">
            <h1>hey you, you're lost!</h1>
          </Route>
        </Switch>
      </div>
    // </BrowserRouter>
  );
}

export default App;
