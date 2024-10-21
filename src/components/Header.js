import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { MyContext } from "../context/MyContext";
import Cookies from "js-cookie"
import Session from 'react-session-api'
import axios from "axios";
const logoutHandler = ()=>{
    Cookies.remove("token");
    window.location.assign("/");
    alert("로그아웃 되었습니다.");
    localStorage.removeItem("id");
}

export default function Header(){
    const nav = useNavigate();
    const user = localStorage.getItem("id");
    const [role,setRole] = useState('');
    const token = Cookies.get("token")?"Bearer "+Cookies.get("token"):null;
    const [data,setData] = useState('');
    const mypageHandler=()=>{
        if(role==='USER')nav("/mypage")    
        else nav("/managerMypage");    
    }
    useEffect(()=>{
        axios.get("/user",{
            headers:{
                Authorization:token
            }
        })
        .then(res=>{
            console.log(res.data);
            localStorage.setItem("id",res.data.id);
            setRole(res.data.role);
            setData(res.data);
        }).catch(error=>console.log(error));
    },[])
    return(
        <div className="header-container">
            <div className="header-inner">
                <div className="header-img" onClick={()=>nav("/")}>
                </div>
                {data?(
                    <div className="header-btn">
                        <button onClick={logoutHandler}>로그아웃</button>
                        <button onClick={mypageHandler}>마이페이지</button>
                    </div>
                ):(<div className="header-btn">
                    <button onClick={()=>nav("/login")}>로그인</button>
                </div>)}
            </div>
        </div>
    )
}