import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/signup.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    const [pwCheck,setPwCheck] = useState('');
    const nav = useNavigate();
    const signupHandler = ()=>{
        if(password !== pwCheck){
            alert("비밀번호가 일치하지 않습니다.");
            setPwCheck('');
            return false;
        }
        axios.post("/signupOk",{
            id,
            password
        }).then(res=>{
            alert("회원가입이 완료되었습니다.");
            nav("/");
        })
    }
    return(
        <div>
            <Header />
                <div className="signup-container">
                    <div>
                        <input type="text" placeholder="아이디 입력" onChange={(e)=>setId(e.target.value)} />
                        <button>중복확인</button>
                    </div>
                    <div><input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)} placeholder="패스워드 입력"/></div>
                    <div><input type="password" name="" id="" onChange={(e)=>setPwCheck(e.target.value)} value={pwCheck} placeholder="패스워드 확인"/></div>
                    <div><button onClick={signupHandler}>회원가입</button></div>
                </div>
            <Footer />
        </div>
    )
}