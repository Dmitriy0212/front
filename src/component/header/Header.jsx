import React from 'react';
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Under from "./Under.jsx";
import Url from "../url/Url.js";

const Header = (props) => {

    return (
        <div className={classes.myconteiner}>
            <header className={classes.header}>
                <Link className={classes.myLinkA} to="/">Основная страница</Link>
                <Link className={classes.myLinkA} to="/addpost">Добавить пост</Link>
                <Under name={'Выбор тайтла по тегам'} url={Url+'/tegs/post'} lin={'teg'} />
                <Under name={'Выбор тайтла по годам'} url={Url+'/year/post'} lin={'year'} />
                <Under name={'Выбор тайтла по жанру'} url={Url+'/genr/post'} lin={'genre'} />
            </header>
        </div>
    );
}

export default Header;
