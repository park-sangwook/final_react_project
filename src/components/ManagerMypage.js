import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/managerMypage.css"
import close from "../images/close.svg"
import axios from "axios";
export default function ManagerMypage(){
    const [data,setData] = useState([]);
    const [visible,setVisible] = useState(false);
    const [menuVisible,setMenuVisible] = useState(false);
    const [menu,setMenu] = useState('');
    const [menuName,setMenuName] = useState('');
    const [menuPrice,setMenuPrice] = useState(0);
    const [price,setPrice] = useState(0);
    const [file,setFile] = useState('');
    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();

    const closeHandler=()=>{
        setVisible(false);
    }
    const menuClick = (idx)=>{
        axios.get("/restaurant/selectByIdx/"+idx)
        .then(res=>{
            setMenu(res.data);
            console.log(res.data);
            setPrice(res.data.price);
            setVisible(true);
        })
    }

    const updateHandler = (idx)=>{
        axios.put("/mypage/updateMenu",{
            idx,
            price
        })
        .then(res=>{
            alert("수정완료");
            setVisible(false);
        })
    }
    const saveImgFile = () => {
        setFile(imgRef.current.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(imgRef.current.files[0]);
        reader.onloadend = () => {
            setImgFile(reader.result);
           };
           
    };
    const formData = new FormData();
    formData.append("name",menuName);
    formData.append("price",menuPrice);
    formData.append("uploadFile",file);
    const menuInsert = ()=>{
        axios.post("/mypage/menu/insert",formData,{
           headers:{
            'Content-Type':'multipart/form-data'
           }
        }).then(res=>{
            alert("메뉴 추가 완료");
            setMenuVisible(false);
        })
    }

    const deleteHandler = (idx)=>{
        axios.delete("/mypage/menu/delete/"+idx)
        .then(()=>{
            alert("삭제완료");
            setVisible(false);
        });
    }
    useEffect(()=>{
        axios.get("/restaurant/selectAll/1")
        .then(res=>{
            console.log(res.data.menuList);
            setData(res.data.menuList);
        }
    )
    },[]);
    return (
        <div>
            <Header />
            <div className="hidden-container" style={{display:visible?'block':'none'}}></div>
            <div className="manager-menu-container"style={{display:visible?'block':'none'}}>
                <div className="menu-header">
                    <div className="menu-title">{menu.name}</div>
                    <div onClick={closeHandler}><img src={close} alt="" /></div>
                </div>
                <div className="menu-item-img"><img src={menu.image} alt="" /></div>
                <div className="menu-price"><input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/></div>
                <div className="menu-btn">
                    <button onClick={()=>updateHandler(menu.idx)}>수정</button>
                    <button onClick={()=>deleteHandler(menu.idx)}>삭제</button>
                </div>

            </div>
            <div className="menu-insert"><button onClick={()=>setMenuVisible(true)}>메뉴 추가</button></div>
            <div className="menu-insert-container" style={{display:menuVisible?'block':'none'}}>
                <div><input type="text" placeholder="메뉴 이름 입력" onChange={(e)=>setMenuName(e.target.value)} /></div>
                <div><input type="file" accept="images/*" ref={imgRef} onChange={saveImgFile}/></div>
                <div className="image-preview"><img src={imgFile ? imgFile :`/images/icon/user.png`} alt="프로필 이미지"/></div>
                <div><input type="text" placeholder="가격 입력" onChange={(e)=>setMenuPrice(e.target.value)}/></div>
                <div className="menu-btn">
                    <button onClick={()=>setMenuVisible(false)}>닫기</button>
                    <button onClick={menuInsert}>추가하기</button>
                </div>
            </div>
            <div className="manager-container">
                {data?data.map(item=>(
                    <div className="manager-item" onClick={()=>menuClick(item.idx)}>
                        <div>{item.name}</div>
                        <div className="manager-item-img"><img src={item.image} alt="" /></div>
                    </div>
                )):<></>}
            </div>
            <Footer />
        </div>
    )
}