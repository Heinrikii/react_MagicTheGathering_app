import React from 'react';
import './App.css';
import CardsList from "./components/cardsList/cardsList";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import CardDetails from "./components/CardDetails/CardDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={CardsList} />
                    <Route exact path="/card/:id" component={CardDetails} />
                </Switch>
            </div>
        </Router>
    );
}


export default App;
