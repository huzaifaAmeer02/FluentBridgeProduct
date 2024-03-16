import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from '../user/Profile';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    {/* Add more routes as needed */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;