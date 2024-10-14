import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"
import axios from "axios";
export default function UserMypage(){
    const [data,setData] = useState('');
    const token = Cookies.get("token")?"Bearer "+Cookies.get("token"):null;
    console.log(token);
    useEffect(()=>{
        axios.get('/user',{
            headers:{
                Authorization:token
            }
        }).then(res=>{
            console.log(res.data);
    }).catch(error=>console.log(error));
    },[]);
    return (
        <></>
    )
}