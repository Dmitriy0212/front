import React, { useEffect, useState } from 'react';
import classes from "./Home.module.css";
import UserAuth from '../user/UserAuth.jsx'

const Home = () => {
    const [shou, setShou] = useState(false);
    const [auth, setAuth] = useState(true);
    function clickHandlerClick() {
        setAuth(false)
        if (shou === true) {
            setShou(false)
        }
        else {
            setShou(true)
        }
    }

    function clickHandlerClick1() {
        setAuth(true)
        window.localStorage.clear()
    }
    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            setAuth(false)
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
                {shou === true ?
                    <UserAuth func={clickHandlerClick} /> :
                    <></>
                }
            </div>
        </>
    );
};
export default Home;