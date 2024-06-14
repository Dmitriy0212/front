import React, { useState } from 'react';
import classes from "./Home.module.css";
import UserAuth from '../user/UserAuth.jsx'

const Addpost = () => {
    const [shou, setShou] = useState(false);
    function clickHandlerClick() {
        if (shou === true) {
            setShou(false)
        }
        else {
            setShou(true)
        }
    }
    return (
        <>
            <div className={classes.content}>
                <button onClick={clickHandlerClick}>Войти</button>
                {shou === true ?
                    <UserAuth func={clickHandlerClick} /> :
                    <></>
                }
            </div>
        </>
    );
};
export default Addpost;