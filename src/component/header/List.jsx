import React from 'react';
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <div className={classes.headerToSortVisibl}></div>;
    return (
        <div className={classes.headerToSortVisibl}>
            {repos.map((repo, index) => {
                return (
                    <Link className={classes.myLink} key={index} to={`/${props.lin}/${String(repo)}`}>{repo}</Link>
                );
            })}
        </div>
    );
};
export default List;