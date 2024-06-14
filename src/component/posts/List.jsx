import React from 'react';
import classes from "./Posts.module.css";
import { Link } from "react-router-dom";

const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <div style={{
        widows: "100%", height: "300px", border: "solid 1px #5b47ab",
        borderRadius: "5px",
        margin: "10px",
        boxShadow: "3px 3px 3px #655996, -1em 0 2.4em #655996"
    }}></div>;
    
    return (
        <>
            {repos.map((repo) => {
                
                return (
                    <div key={repo.id} className={classes.postsContent}>
                        <div className={classes.postsPrevu}>
                            <h3>
                                <Link className={classes.postsLink} to={`/get/post/${repo.id}`}>{repo.postTitle}</Link>
                            </h3>
                            <img style={{ margin: "5px", minHeight: "280px", borderRadius: "10px" }} src={repo.postPhotoUrl} alt="Ошибка загрузки постера" />
                        </div>
                        <div className={classes.postsPrevu}>
                            <div className={classes.postsDescription}>{repo.postDescription}</div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
export default List;