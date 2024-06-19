import axios from 'axios';
//const Url = "https://jihugy-7507e8053d51.herokuapp.com"
//const Url = "http://localhost:8080/"


const instans = axios.create({
    baseURL:'https://jihugy-7507e8053d51.herokuapp.com'
})
/*instans.interceptors.request.use((config)=>{
    console.log(config)
    //config.headers.Authorization = window.localStorage.getItem('token')
})*/

export default instans;
