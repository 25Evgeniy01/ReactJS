import React from 'react';

import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import {connect} from 'react-redux';

import {store} from "./mainApp";

const history = createBrowserHistory();

function mapStateToProps(state) {
    return {
        user: state.userInfo.user
    }
}

const page0 = () => {
    return (
        <div>
            <ol>
                {
                    store.getState().userInfo.user.map ((item, i) => {
                        if (i > 4) return;
                            return (
                                <li>
                                    <ul>
                                        <li>id - {store.getState().userInfo.user[i].id.toString()}</li>
                                        <li>name - {store.getState().userInfo.user[i].name.toString()}</li>
                                        <li>surname - {store.getState().userInfo.user[i].surname.toString()}</li>
                                        <li>desc - {store.getState().userInfo.user[i].desc.toString()}</li><br/>
                                    </ul>
                                </li>



                            );

                    })
                }

            </ol>
        </div>)
};

const page1 = () => {
    return (
        <div>
            <ol>
                {
                    store.getState().userInfo.user.map ((item, i) => {
                        if (i < 5 || i > 9) return;
                        return (
                            <li>
                                <ul>
                                    <li>id - {store.getState().userInfo.user[i].id.toString()}</li>
                                    <li>name - {store.getState().userInfo.user[i].name.toString()}</li>
                                    <li>surname - {store.getState().userInfo.user[i].surname.toString()}</li>
                                    <li>desc - {store.getState().userInfo.user[i].desc.toString()}</li>
                                </ul>
                                <br/>
                            </li>



                        );

                    })
                }
            </ol>
        </div>)
};
const page2 = () => {
    return (
        <div>
            <ol>
                {
                    store.getState().userInfo.user.map ((item, i) => {
                        if (i < 10 || i > 14) return;
                        return (
                            <li>
                                <ul>
                                    <li>id - {store.getState().userInfo.user[i].id.toString()}</li>

                                    <li>name - {store.getState().userInfo.user[i].name.toString()}</li>
                                    <li>surname - {store.getState().userInfo.user[i].surname.toString()}</li>
                                    <li>desc - {store.getState().userInfo.user[i].desc.toString()}</li><br/>
                                </ul>
                            </li>



                        );

                    })
                }
            </ol>
        </div>)
};

const page3 = () => {
    return (
        <div>
            <ol>
                {
                    store.getState().userInfo.user.map ((item, i) => {
                        if (i < 15 || i > 19) return;
                        return (

                            <li>
                                <ul>
                                    <li>id - {store.getState().userInfo.user[i].id.toString()}</li>
                                    <li>name - {store.getState().userInfo.user[i].name.toString()}</li>
                                    <li>surname - {store.getState().userInfo.user[i].surname.toString()}</li>
                                    <li>desc - {store.getState().userInfo.user[i].desc.toString()}</li><br/>
                                </ul>
                            </li>


                        );

                    })
                }
            </ol>
        </div>)
};

class Navigation extends React.Component {
    render() {

        return(
            <Router history={history}>
                <div>
                    <ul>
                        <li><Link to='/'> page0</Link></li>
                        <li><Link to='/page1'>page1</Link></li>
                        <li><Link to='/page2'>page2</Link></li>
                        <li><Link to='/page3'>page3</Link></li><br/>
                    </ul>

                    <hr/>

                    <Route exact path='/' component={page0}/>
                    <Route path='/page1' component={page1}/>
                    <Route path='/page2' component={page2}/>
                    <Route path='/page3' component={page3}/>

                </div>
            </Router>
        )
    }
}

export default connect(mapStateToProps)(Navigation);