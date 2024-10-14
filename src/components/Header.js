import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { MyContext } from "../context/MyContext";
import Cookies from "js-cookie"
const logoutHandler = ()=>{
    Cookies.remove("token");
    window.location.assign("/");
    alert("로그아웃 되었습니다.");
}
export default function Header(){
    const nav = useNavigate();
    const {user} = useContext(MyContext);
    return(
        <div className="header-container">
            <div className="header-inner">
                <div className="header-img" onClick={()=>nav("/")}>
                </div>
                {user?(
                    <div className="header-btn">
                        <button onClick={logoutHandler}>로그아웃</button>
                    </div>
                ):(<div className="header-btn">
                    <button onClick={()=>nav("/login")}>로그인</button>
                </div>)}
            </div>
        </div>
    )
}