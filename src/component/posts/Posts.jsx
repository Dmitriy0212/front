import React from 'react';
import { useEffect, useState } from 'react';
import List from './List';
import withListLoading from './WithListLoading';
import { useSelector } from "react-redux";
import Pugin from "../pugin/Pugin";
import Storfirft from "./Storfirft";
import { useParams } from 'react-router-dom';


const Posts = (props) => {
    
    const cash = useSelector(state => state.cash)
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    Storfirft()
    const { teg } = useParams();
    const { page } = useParams();
    const { url } = props
    const [appState1, setAppState1] = useState('');
    const [appState2, setAppState2] = useState('');
    const [appState3, setAppState3] = useState('');
    useEffect(() => {
        if (cash || cash !== null) {
            setAppState({ loading: true });
            let mas = []
            if (url !== undefined) {
                setAppState1(url)
            }
            if (teg !== undefined) {
                setAppState2(teg)
            }
            if (page !== undefined) {
                setAppState3(page)
            }
            for (let i = 0; i < 2; i++) {
                if (cash.mas1[i] === undefined) {
                    break
                }
                mas.push(cash.mas1[i])
            }
            const allRepos = mas;
            setAppState({ loading: false, repos: allRepos });
        }
    }, [setAppState, cash, page, teg, url, appState1, appState2, appState3, setAppState1, setAppState2, setAppState3]);
    return (
        <>
            <div style={{ maxWidth: '800px', minWidth: '375px', marginLeft: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ListLoading isLoading={appState.loading} repos={appState.repos} />
                <Pugin url={appState1} teg={appState2} page={appState3} />
            </div>
        </>
    );
};
export default Posts;