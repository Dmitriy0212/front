import React, { useState } from 'react';
import axios from 'axios';
import classes from "./Addpost.module.css";
import Url from "../url/Url.js";
import UserAuth from '../user/UserAuth'

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
    const [data, setData] = useState({
        postTitle: '',
        postPhotoUrl: '',
        postDescription: '',
        postTegs: '',
        postyearCreat: '',
        genre: ''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            postTitle: data.postTitle,
            postPhotoUrl: data.postPhotoUrl,
            postDescription: data.postDescription,
            postTegs: data.postTegs,
            postyearCreat: data.postyearCreat,
            genre: data.genre
        };
        axios.post(Url + "/add/post", userData).then((response) => {
            console.log(response.status, response.data);
            setData({
                ...data,
                postTitle: '',
                postPhotoUrl: '',
                postDescription: '',
                postTegs: '',
                postyearCreat: '',
                genre: ''
            })
        });
    };
    return (
        <>
            <div className={classes.content}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <input className={classes.input} type="text" name="postTitle" value={data.postTitle} onChange={handleChange} placeholder='Введите название тайтла' />
                    <input className={classes.input} type="text" name="postPhotoUrl" value={data.postPhotoUrl} onChange={handleChange} placeholder='Ссылка на картинку' />
                    <textarea className={classes.input} type="text" name="postDescription" cols="30" rows="10" value={data.postDescription} onChange={handleChange} placeholder='Описание' ></textarea>
                    <input className={classes.input} type="text" name="postyearCreat" value={data.postyearCreat} onChange={handleChange} placeholder='Год выхода' />
                    <input className={classes.input} type="text" name="postTegs" value={data.postTegs} onChange={handleChange} placeholder='Теги' />
                    <input className={classes.input} type="text" name="genre" value={data.genre} onChange={handleChange} placeholder='Жанр' />
                    <button className={classes.input} type="submit">Добавить пост</button>
                </form>
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