import { useEffect, useState } from "react";
import axios from "axios";
export default function Restaurant_Review({onSendReview,idx}){
    const [data,setData] = useState([]);
    useEffect(()=>{       
        axios.get("/selectByCompany_idx/"+idx)
        .then(res=>{
            console.log(res.data);
            setData(res.data);
            onSendReview({'name':'review','size': res.data.length*300}); 
        }).catch(error=>console.log(error));
    },[]);
    return(
        <div>
            {data?data.map(item=>(
                <div className="restaurant-review">
                    <div className="review-title">{item.login_id}</div>
                    <div className="review-img"><img src={`http://localhost:8080/images/${item.image}`} alt="" /></div>
                    <div className="review-content">{item.content}</div>
                </div>
    
            )):<></>}
        </div>
    )
}