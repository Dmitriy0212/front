import React, { useState, useEffect } from 'react';
import List from './Listpug';
import withListLoading from './WithListLoading';
import { useSelector } from "react-redux";


const Pugin = (props) => {
    const [appState1, setAppState1] = useState('');
    const [appState2, setAppState2] = useState('');
    const cash = useSelector(state => state.cash)
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
        links: null,
    });
    useEffect(() => {
        if (props.url !== undefined && props.url !== null && props.url !== '') {
            setAppState1(props.url + '/')
            setAppState2(props.teg + '/')
        }
        else if (props.url === '' && props.url === undefined) {
            setAppState1('')
            setAppState2('')
        }
    }, [setAppState1, setAppState2, props.url, props.teg])

    useEffect(() => {
        setAppState({ loading: true });
        if (cash || cash !== null) {
            let mas = []
            let mas1 = []
            let pige = 0;
            
            if (cash.mas1 === undefined) {
                for (let i = 0; i < Math.ceil(cash.mas1.length / 2); i++) {
                    mas.push(pige += 1)
                    mas1.push(appState1 + appState2 + 'page/' + Number(i + 1))
                }
            }
            if (cash.mas1 !== null) {
                for (let i = 0; i < Math.ceil(cash.mas1.length / 2); i++) {
                    mas.push(pige += 1)
                    mas1.push(appState1 + appState2 + 'page/' + Number(i + 1))
                }
            }

            const allRepos = mas;
            setAppState({ repos: allRepos, links: mas1 });
        }

    }, [setAppState, cash, appState1, appState2]);
    return (
        <>
            <ListLoading isLoading={appState.loading} repos={appState.repos} url={props} />
        </>
    );
};
export default Pugin;