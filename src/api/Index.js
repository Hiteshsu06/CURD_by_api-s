import axios from 'axios';
import {header} from '../constants/Index';

export const allApi =(method,dataurl,data)=>{
    if(method === "POST"){
        return axios.post(dataurl, data);
    }
    if(method === "GET"){
        return axios.get(dataurl);
    }
    if(method === "DELETE"){
        return axios.delete(dataurl)
    }
}

// export const allApi =(method,dataurl,data)=>{
//     return(axios(dataurl,(method === "POST" ? data : null),{
//         method: method,
//         headers: (data ? {header} : null) 
//     }))
// }

// export const userGetApi = () => {
//     return axios.get(`https://reqres.in/api/users`)
// }

// export const resourceGetApi = () => {
//     return axios.get(`https://reqres.in/api/{resource}`)
// }

// export const viewResourceGetApi = (id) => {
//     return axios.get(`https://reqres.in/api/{resource}/${id}`)
// }
// export const viewUserGetApi = (id) => {
//     return axios.get(`https://reqres.in/api/users/${id}`)
// }
// export const loginApi = (loginInput) => {
//     return (axios(`https://reqres.in/api/login`, loginInput, {
//         method: "POST",
//         headers: header,
//     }))
// }
// export const registerApi =(registerInput)=>{
//     return ( axios(`https://reqres.in/api/register`, registerInput, {
//         method: "POST",
//         headers: header,
//       }))
// }

// export const logoutApi =()=>{
//     return( axios(`https://reqres.in/api/logout`, {
//         method: "POST",
//         headers: header,
//       }))
// }
// export const resourceDeleteApi =(id)=>{
//     return(axios.delete(`https://reqres.in/api/{resource}/${id}`))
// }
// export const userDeleteApi =(id)=>{
//     return(axios.delete(`https://reqres.in/api/users/${id}`))
// }