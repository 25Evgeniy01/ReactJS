import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ServerPage from './serverPage';
import MainPage from './mainPage';
import CVPage from './myCV';

const history = createBrowserHistory();

class Navigation extends React.Component {
    render() {

        return(
            <Router history={history}>
                <div>
                    <br/>
                    <div className={'row'}>
                        <div className={'col-md-4 text-center'} style={{fontWeight: 'bold', fontSize: 'x-large'}}>
                            <Link to='/'>MainPage</Link>
                        </div>
                        <div className={'col-md-4 text-center'} style={{fontWeight: 'bold', fontSize: 'x-large'}}>
                            <Link to='/serverInfo'>ServerInfo</Link>
                        </div>
                        <div className={'col-md-4 text-center'} style={{fontWeight: 'bold', fontSize: 'x-large'}}>
                            <Link to='/cv'>MyCV</Link>
                        </div>
                    </div>
                    <hr/>
                    <div className={'row'}>
                        <div className={'col-md-12 text-center'}>
                            <Route exact path='/' component={MainPage}/>
                            <Route exact path='/serverInfo' component={ServerPage}/>
                            <Route exact path='/cv' component={CVPage}/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Navigation;