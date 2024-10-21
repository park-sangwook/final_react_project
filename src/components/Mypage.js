import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/mypage.css"
import axios from "axios";
import Cookies from "js-cookie"
export default function Mypage(){
    const token = Cookies.get("token")?"Bearer "+Cookies.get("token"):null;
    const textReview = useRef('');
    const [visible,setVisible] = useState(false);
    const [name,setName] = useState('');
    const [data,setData] = useState('');
    const [idx,setIdx] = useState(0);
    const [selectedImage,setSelectedImage] = useState(null);
    const imageHandler = (e)=>{
        setSelectedImage(e.target.files[0]);
    }
    const itemHandler=(obj)=>{
        setVisible(true);
        setName(obj.menuList.name);
        setIdx(obj.menuList.company_idx);
    }
    const formData = new FormData();
    formData.append("uploadFile",selectedImage);
    formData.append("content",textReview.current.value);
    formData.append("company_idx",idx);
    const reviewInsert = ()=>{
        
        axios.post('/mypage/review',formData,{
            headers:{
                'Content-Type':'multipart/form-data',
                Authorization:token
            }
        })
        .then(res=>{
            console.log(res.data);
            setVisible(false);
        }).catch(error=>console.log(error));
    }
    useEffect(()=>{
        axios.get('/mypage/orderList',{
            headers:{
                Authorization:token
            }
        })
        .then(res=>{
            console.log(res.data);
            setData(res.data);
        }).catch(error=>console.log(error));
    },[])
    return (
        <div>
            <Header />
            <div className="hidden-container" style={{display:visible?'block':'none'}}></div>
            <div className="review-container" style={{display:visible?'block':'none'}}>
                <div className="mypage-review-title">{name}</div>
                <textarea name="" id="" ref={textReview}></textarea> <br />
                <input type="file" name="" id="" accept="image/*" onChange={imageHandler} />
                <button type="button" onClick={reviewInsert} class="btn btn-outline-success">저장</button>
            </div>
            <div className="mypage-controller">
                <div className="mypage-left">
                    <ul>
                        <li><a href="/mypage" style={{color:'black',textDecoration:'none'}}>주문내역</a></li>
                        <li><a href="" style={{color:'black',textDecoration:'none'}}>결제내역</a></li>
                    </ul>
                </div>
                <div className="mypage-right">
                    {data?data.map(item=>(
                        <div className="right-item" onClick={()=>itemHandler(item)}>
                            <div><img src={item.menuList.image} alt="" /></div>
                            <div>
                                <div className="right-item-title">{item.menuList.name}</div>
                                <div>{item.menuList.price.toLocaleString()}</div>
                            </div>

                        </div>
                    )):<></>}
                </div>
            </div>
            <Footer />
        </div>
    )
}