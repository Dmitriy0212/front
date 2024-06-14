import React from 'react';
import { useEffect, useState } from 'react';
import List from './List';
import withListLoading from './WithListLoading';
import { useSelector } from "react-redux";
import Pugin from "../pugin/Pugin";
import { useParams } from 'react-router-dom';
import Storfirft from "./Storfirft";

const Posts = (props) => {
    Storfirft()
    const cash = useSelector(state => state.cash)
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    const { teg } = useParams();
    const { page } = useParams();
    const { url } = props
    const [appState1, setAppState1] = useState('');
    const [appState2, setAppState2] = useState('');
    const [appState3, setAppState3] = useState('');
    useEffect(() => {
        setAppState3(page)
        if (teg !== undefined && url !== undefined) {
            setAppState1(url)
            setAppState2(teg)
        }
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
            else if (Number(page) === 1) {
            }
            let mas = []
            for (let i = a; i < a + b; i++) {
                mas.push(cash.mas1[i])
            }
            const allRepos = mas;
            setAppState({ loading: false, repos: allRepos });
        }
    }, [setAppState, setAppState1, setAppState2, setAppState3, cash, page, teg, url]);
    return (
        <>
            <div style={{ maxWidth: '800px', minWidth: '375px', marginLeft: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ListLoading isLoading={appState.loading} repos={appState.repos} links={appState.links} />
                <Pugin url={appState1} teg={appState2} page={appState3} />
            </div>
        </>
    );
};
export default Posts;