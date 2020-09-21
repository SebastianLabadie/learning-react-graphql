import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import Navbar from "./components/Navbar";

import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={MessageList} />
          <Route exact path="/new-message" component={MessageForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
