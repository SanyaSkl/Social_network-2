import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy( () => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy( () => import("./components/Profile/ProfileContainer"))
const Login = React.lazy( () => import("./components/Login/Login"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <Suspense fallback={<div>Loading...</div>}>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer pageTitle={"Самурай"}/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/news' render={News}/>
                    <Route path='/settings' render={Settings}/>
                </div>
                </Suspense>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJsApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJsApp
