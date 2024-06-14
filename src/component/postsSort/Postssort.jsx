import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';
import withListLoading from './WithListLoading';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Pugin from "../pugintegs/Pugin";
import Stor from "./Stor";

const Postssort = (props) => {
    const { teg } = useParams();
    const { url } = props
    const cash = useSelector(state => state.cash)
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    Stor({ teg, url })
    useEffect(() => {
        if (cash || cash !== null) {
            setAppState({ loading: true });
            let mas = []
            let a = ''

            switch (url) {

                case "teg":
                    a = 'tegs'
                    for (let i = 0; i < 2; i++) {
                        if (cash.mas1[i] === undefined) {
                            break
                        }
                        else {
                            for (let j = 0; j < cash.mas1[i][a].length; j++) {
                                if (cash.mas1[i][a][j].toLowerCase() === teg.toLowerCase()) {
                                    mas.push(cash.mas1[i])
                                }
                            }
                        }

                    }
                    break;
                case "year":
                    a = 'yearCreat'
                    for (let i = 0; i < 2; i++) {
                        
                        if (cash.mas1[i] === undefined) {
                            break
                        }
                        else if (cash.mas1[i][a] === teg) {
                            mas.push(cash.mas1[i])
                        }
                    }
                    setAppState({ repos: mas });
                    break;
                case "genre":
                    a = 'genre'
                    for (let i = 0; i < 2; i++) {
                        if (cash.mas1[i] === undefined) {
                            break
                        }
                        else {
                            for (let j = 0; j < cash.mas1[i][a].length; j++) {
                                if (cash.mas1[i][a][j].toLowerCase() === teg.toLowerCase()) {
                                    mas.push(cash.mas1[i])
                                }
                            }
                        }
                    }
                    setAppState({ repos: mas });
                    break;
                default:
                    console.log("Sorry");
            }
            const allRepos = mas;
            setAppState({ repos: allRepos });
        }
    }, [setAppState, cash, url, teg]);

    return (
        <>
            <div style={{ maxWidth: '800px', minWidth: '375px', marginLeft: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ListLoading isLoading={appState.loading} repos={appState.repos} />
                <Pugin url={url} teg={teg} mas15={appState} />
            </div>
        </>
    );
};
export default Postssort;