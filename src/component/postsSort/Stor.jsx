import axios from 'axios';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import Url from "../url/Url.js";

const Stor = (props) => {
    const { teg } = props;
    const { url } = props
    const dispatch = useDispatch()
    useEffect(() => {
        const apiUrl = `${Url}/posts/teg/?${url}=${teg}`;
        
        axios.get(apiUrl).then((repos) => {
            dispatch({ type: "ADDDATA", data: repos.data })
        });
    }, [dispatch, teg, url]);
}
export default Stor;