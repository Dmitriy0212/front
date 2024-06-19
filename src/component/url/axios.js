import axios from 'axios';
//const Url = "https://jihugy-7507e8053d51.herokuapp.com"


const instans = axios.create({
    baseURL:'http://localhost:8080'
})
/*instans.interceptors.request.use((config)=>{
    console.log(config)
    //config.headers.Authorization = window.localStorage.getItem('token')
})*/

export default instans;
