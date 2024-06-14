import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';
import withListLoading from './WithListLoading';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Pugin from "../pugintegs/Pugin";
import Stor from "./Stor";

const Postssortpage = (props) => {
    const { teg } = useParams();
    const { page } = useParams();
    const { url } = props
    const cash = useSelector(state => state.cash)
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    
    Stor({ teg, url })
    useEffect(() => {
        setAppState({ loading: true });
        let a = Number(page)
        let b = 2
        if (cash || cash !== null) {
            if (a > 2) {
                a = a * 2 - 2

                if (a === cash.mas1.length - 1) {
                    b = 1
                }
            }
            else if (a === cash.mas1.length - 1) {
                b = 1
            }
            let mas = []
            for (let i = a; i < a + b; i++) {
                mas.push(cash.mas1[i])
            }
            const allRepos = mas;
            setAppState({ loading: false, repos: allRepos });
        }
    }, [setAppState, cash,page]);

    return (
        <>
            <div style={{ maxWidth: '800px', minWidth: '375px', marginLeft: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ListLoading isLoading={appState.loading} repos={appState.repos} />
                <Pugin url={url} teg={teg} />
            </div>
        </>
    );
};
export default Postssortpage;