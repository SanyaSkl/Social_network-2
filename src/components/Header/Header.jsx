import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg' alt={1}/>

            <div className={classes.loginBlock}>
                { props.isAuth
                    ? <div>{props.login}  <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;