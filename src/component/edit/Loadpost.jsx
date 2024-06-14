import React, { useState } from 'react';
import axios from 'axios';
import classes from "./Post.module.css";
import classes1 from "./Addpost.module.css";
import { Link } from "react-router-dom";

const Loadpost = (props) => {
    const { repos } = props;
    const [data, setData] = useState({
        postTitle: repos.postTitle,
        postPhotoUrl: repos.postPhotoUrl,
        postDescription: repos.postDescription,
        postTegs: repos.tegs,
        postyearCreat: repos.yearCreat,
        genre: repos.genre
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
            genre: data.genre,
            id: repos.id
        };
        axios.post("https://powerful-tor-29400-3b2373853766.herokuapp.com/edit/post", userData).then((response) => {
            console.log(response.status, response.data);
        });

    }
    if (!repos || repos.length === 0) return <div style={{
        widows: "100%", height: "300px", border: "solid 1px #5b47ab",
        borderRadius: "5px",
        margin: "10px",
        boxShadow: "3px 3px 3px #655996, -1em 0 2.4em #655996"
    }}></div>;
    return (
        <>
            <div>
                <form className={classes.postsContent} onSubmit={handleSubmit}>
                    <input className={classes1.input} type="text" name="postTitle" value={data.postTitle} onChange={handleChange} placeholder='Введите название тайтла' />
                    <input className={classes1.input} type="text" name="postPhotoUrl" value={data.postPhotoUrl} onChange={handleChange} placeholder='Ссылка на картинку' />
                    <Link style={{ textAlign: "center" }} to={`/post/${repos.id}`}><button className={classes1.input} type="submit">Добавить пост</button></Link>
                    <textarea className={classes1.input} type="text" name="postDescription" cols="30" rows="10" value={data.postDescription} onChange={handleChange} placeholder='Описание' ></textarea>
                    <input className={classes1.input} type="text" name="postyearCreat" value={data.postyearCreat} onChange={handleChange} placeholder='Год выхода' />
                    <input className={classes1.input} type="text" name="postTegs" value={data.postTegs} onChange={handleChange} placeholder='Теги' />
                    <input className={classes1.input} type="text" name="genre" value={data.genre} onChange={handleChange} placeholder='Жанр' />
                </form>
            </div>
        </>
    );
};
export default Loadpost;