import React, { useEffect, useState } from 'react';
import classes from "./Home.module.css";
import UserAuth from '../userauth/UserAuth.jsx'
import UserRegistr from '../registration/UserRegistr.jsx'

const Home = () => {
    const [shouAuth, setshouAuth] = useState(false);
    const [auth, setAuth] = useState(true);
    const [shouRegistr, setShouRegistr] = useState(false);
    function clickHandlerClick() {
        if (shouAuth === true) {
            setshouAuth(false)
        }
        else {
            setshouAuth(true)
        }
    }

    function clickHandlerClick4() {
        if (shouRegistr === true) {
            setShouRegistr(false)
        }
        else {
            setShouRegistr(true)
        }
    }

    function clickHandlerClick1() {
        window.localStorage.clear()
        if (window.localStorage.getItem('token')) {
            setAuth(false)
        }
        else{
            setAuth(true)
        }
    }

    function clickHandlerClick2() {
        if (window.localStorage.getItem('token')) {
            setAuth(false)
        }
        else{
            setAuth(true)
        }
    }

    function clickHandlerClick3() {
        setshouAuth(false)
        setShouRegistr(true)
    }

    function clickHandlerClick5() {
        setshouAuth(true)
        setShouRegistr(false)
    }
    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            setAuth(false)
        }
        else{
            setAuth(true)
        }
    }, [setAuth]);
    return (
        <>
            <div className={classes.content}>
                {auth === true ?
                    <button onClick={clickHandlerClick}>Войти</button> :
                    <button onClick={clickHandlerClick1}>Выйти</button>
                }
                {auth === true ?
                    <></> :
                    <p>Вы авторизованы</p>
                }
                {shouAuth === true ?
                    <UserAuth auth={clickHandlerClick} authTrue={clickHandlerClick2} toRegistr={clickHandlerClick3} /> :
                    <></>
                }
                {shouRegistr === true ?
                    <UserRegistr auth={clickHandlerClick4} authTrue={clickHandlerClick2} toRegistr={clickHandlerClick5}  /> :
                    <></>
                }
            </div>
        </>
    );
};
export default Home;