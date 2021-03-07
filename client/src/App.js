import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './redux/store';

//import style
import './App.scss';






const App =  () => {
    return (
        <div className="container">
            <Provider store={ store }>
                <Router history={ useHistory }>
                    <Switch>

                    </Switch>
                </Router>
            </Provider>
        </div>
    );
};

export default App;