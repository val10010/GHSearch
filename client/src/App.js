import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Main from './pages/main';

//import style
import './App.scss';


const App =  () => {
    return (
        <div className="container">
            <Provider store={ store }>
                <Router history={ useHistory }>
                    <Switch>
                        <Route  path='/' component={Main} />
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
};

export default App;