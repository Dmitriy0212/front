import React from 'react';
import { Link } from "react-router-dom";
import { useParams, useResolvedPath } from 'react-router-dom';
import classes from "./Listpug.module.css";

const Listpug = (props) => {
    const { page } = useParams();
    const { pathname } = useResolvedPath();
    const { repos } = props;
    if (!repos || repos.length === 0) return <div style={{
        widows: "100%", height: "300px", border: "solid 1px #5b47ab",
        borderRadius: "5px",
        margin: "10px",
        boxShadow: "3px 3px 3px #655996, -1em 0 2.4em #655996"
    }}></div>;
    return (
        <div className={classes.contentLinkOn}>
            {repos.map((repo, index) => {
                return (index + 1 === 1 ?
                    <Link className={decodeURI(pathname) === `/${props.url.url}/${props.url.teg}` ? classes.myLink : classes.myLinkOn} key={index} to={`/${props.url.url}/${props.url.teg}`}>{index + 1}</Link> :
                    <Link className={Number(page) === index + 1 ? classes.myLink : classes.myLinkOn} key={index} to={`/${props.url.url}/${props.url.teg}/page/${index + 1}`}>{index + 1}</Link>
                )
            })}
        </div>
    );
};
export default Listpug;