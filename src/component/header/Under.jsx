import React, { useState } from 'react';
import classes from "./Header.module.css";
import axios from 'axios';
import List from './List';
import withListLoading from './WithListLoading';

const Under = (props) => {

    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    const [show, setShou] = useState(props.show);

    const fanc = () => {
        if (show === true) {
            setShou(!true)
        }
        else if (show !== true) {
            setShou(true)
            const apiUrl = props.url;
            axios.get(apiUrl).then((repos) => {
                const allRepos = repos.data;
                setAppState({ loading: false, repos: allRepos });
            });
        }
    }
    return (
        <>
            <div  className={show!==true ? classes.myLinkA :classes.myLinkOn} onClick={fanc}>{props.name}
                {show && <ListLoading className={classes.headerToSortVisibl} isLoading={appState.loading} repos={appState.repos} lin={props.lin} />}
            </div>

        </>
    );
};
export default Under;