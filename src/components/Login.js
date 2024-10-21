import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/login.css"
import naver from "../images/naver.png"
import axios from "axios";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const nav = useNavigate();
    const loginHandler = ()=>{
        axios.post('/login',{
            id:email,
            password
        })
        .then(res=>{
            const data = res.data.replace("token ","");
            Cookies.set("token",data);
            window.location.assign("/");
        })
        .catch(error=>{
            setPassword('');
            alert("아이디 혹은 비밀번호가 다릅니다.");
        });
    }
    return(
        <>
        <Header />
        <div className="login-wrap">
            <div className="login-title">요기요</div>
            <div className="login-form" ng-show="!check_login()">
                <div className="title" ng-click="$location.url('/')"></div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input type="text" id="loginEmail" name="loginEmail" onChange={e=>setEmail(e.target.value)} placeholder="이메일 주소 입력(필수)" className="ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-pattern" required="required"/>
                    </li>
                    <li className="list-group-item">
                        <input type="password" id="loginPwd" name="loginPwd" onChange={e=>setPassword(e.target.value)} placeholder="비밀번호 입력(필수)" value={password} className="ng-pristine ng-untouched ng-invalid ng-invalid-required" required="required"/>
                    </li>
                </ul>
                <div className="checkbox">
                    <input type="checkbox" id="keep_login" name="keep_login" ng-model="account.is_maintain_login" ng-change="check_maintain_login()" className="ng-pristine ng-untouched ng-valid"/> <label htmlFor="keep_login"><span></span>아이디 저장</label>
                    <span className="inquiry"><a href="#/idinquiry/">아이디 찾기</a> | <a href="#/pwinquiry/">비밀번호 찾기</a> | <a href="/signup">회원가입</a></span>
                </div>
            </div>
            <button type="submit" className="btn ng-binding btn_login" onClick={loginHandler} >로그인</button>
            <div className="btn-group">
                <div className="naver-btn"><div><img src={naver} alt="" /></div><div className="naver-title"><a href="http://localhost:8080/oauth2/authorization/naver">네이버로 로그인</a></div></div>
                <div className="kakao-btn"><div style={{display:'flex',alignItems:'center'}}><img width={30} src="https://www.yogiyo.co.kr/mobile/image/ic_logo_kakao.png?v=9f40842b5baddecae3aa0f8699dbcde6250d5992" alt="" /></div><div className="naver-title">카카오로 로그인</div></div>
            </div>
            <img src="https://www.yogiyo.co.kr/mobile/image/signin_banner.png" style={{marginTop:'20px',width:'830px'}} alt="" />
        </div>
        <Footer />
        </>
    )
}