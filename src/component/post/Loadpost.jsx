import React, { useState } from 'react';
import classes from "./Post.module.css";
import axios from 'axios';
import Url from "../url/Url.js";
import dataImg from "./pngwing.png";




const Loadpost = (props) => {
    const [appState1, setAppState1] = useState(props.repos);
    const [data, setData] = useState(props.repos);
    const dataIm = dataImg;
    const [dataButton, setDataButton] = useState(classes.imgButton);
    const [shouDescription1, setShouDescription1] = useState(classes.postsDescription1);
    const [shou, setShou] = useState(true);
    const [buttonTitle, setbuttonTitle] = useState("Развернуть описание");
    function clickHandler() {
        setShou(false)
    }

    function clickHandler1() {
        if (shouDescription1 === classes.postsDescription) {
            setShouDescription1(classes.postsDescription1)
            setDataButton(classes.imgButton)
            setbuttonTitle("Развернуть описание")
            return
        }
        else if (shouDescription1 === classes.postsDescription1) {
            setShouDescription1(classes.postsDescription)
            setDataButton(classes.imgButtonOn)
            setbuttonTitle("Свернуть описание")
            return
        }
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        setShou(true)
        setAppState1({
            ...data,
            postTitle: data.postTitle,
            postPhotoUrl: data.postPhotoUrl,
            postDescription: data.postDescription,
            tegs: typeof (data.tegs) === String('string') ? data.tegs = data.tegs.split(',') : data.tegs,
            yearCreat: data.yearCreat,
            genre: typeof (data.genre) === String('string') ? data.genre = data.genre.split(',') : data.genre,
        })

        e.preventDefault();
        const userData = {
            postTitle: data.postTitle,
            postPhotoUrl: data.postPhotoUrl,
            postDescription: data.postDescription,
            tegs: data.tegs,
            yearCreat: data.yearCreat,
            genre: data.genre,
            id: props.repos.id
        };
        axios.post(Url + "/edit/post", userData).then((response) => {
            console.log(response.status, response.data);
        });
    }

    if (!appState1 || appState1.length === 0) return
    <div style={{
        widows: "100%", height: "300px", border: "solid 1px #5b47ab",
        borderRadius: "5px",
        margin: "10px",
        boxShadow: "3px 3px 3px #655996, -1em 0 2.4em #655996"
    }}>
    </div>;
    return (
        <>
            <form className={classes.postsContent} onSubmit={handleSubmit}>
                <div>
                    <div className={classes.postHeder}>
                        {shou === true ?
                            <h3 style={{ margin: "5px", color: "aqua" }}>{appState1.postTitle}</h3> :
                            <input type="text" name="postTitle" value={data.postTitle} onChange={handleChange} placeholder='Введите название тайтла' />
                        }
                        {shou === true ?

                            <img style={{ minWidth: "200px", minHeight: "300px", borderRadius: "10px", margin: "5px" }} src={appState1.postPhotoUrl} alt="Ошибка загрузки постера" /> :
                            <input type="text" name="postPhotoUrl" value={data.postPhotoUrl} onChange={handleChange} placeholder='Ссылка на картинку' />
                        }
                    </div>
                    <div className={classes.postsPrevu}>
                        {shou === true ?
                            <div className={shouDescription1}>{appState1.postDescription}</div> :
                            <textarea type="text" name="postDescription" cols="30" rows="10" value={data.postDescription} onChange={handleChange} placeholder='Описание' ></textarea>
                        }
                        <button title={buttonTitle} className={classes.postsDescriptionOn} onClick={clickHandler1}><img className={dataButton} src={dataIm} alt="Ошибка загрузки постера" /></button>
                        {shou === true ?
                            <div className={classes.postsDescription}>Анонсирован в <span className={classes.postLine}>{appState1.yearCreat}</span>г.</div> :
                            <input type="text" name="yearCreat" value={data.yearCreat} onChange={handleChange} placeholder='Год выхода' />
                        }
                        {shou === true ?
                            <div className={classes.postsDescription}>Теги <span className={classes.postLine}>{appState1.tegs === '' || appState1.tegs.length === 0 ? <span></span> : appState1.tegs.map((item, index) => { return (<span key={index} style={{ margin: 3 + 'px' }}>{item}</span>) })}</span></div> :
                            <input type="text" name="tegs" value={data.tegs} onChange={handleChange} placeholder='Теги' />
                        }
                        {shou === true ?
                            <div className={classes.postsDescription}>Жанр <span className={classes.postLine}>{appState1.genre === '' || appState1.genre.length === 0 ? <span></span> : appState1.genre.map((item, index) => { return (<span key={index} style={{ margin: 3 + 'px' }}>{item}</span>) })}</span></div> :
                            <input type="text" name="genre" value={data.genre} onChange={handleChange} placeholder='Жанр' />
                        }
                        {shou === true ?
                            <></> :
                            <button type="submit">Завершить редактирование</button>
                        }
                        {shou === true ?
                            <button style={{ margin: "5px" }} onClick={clickHandler}>Редактировать</button> :
                            <></>
                        }
                    </div>
                </div>
            </form >
        </>
    );
};
export default Loadpost;