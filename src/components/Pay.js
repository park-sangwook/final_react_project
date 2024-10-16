import { useLocation, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import "../css/pay.css"
import Footer from "./Footer"
import axios from "axios"
import { useContext } from "react"
import { MyContext } from "../context/MyContext"
import Cookies from "js-cookie"
export default function Pay(){
    const location = useLocation();
    const user = localStorage.getItem("id");
    const order = location.state.type;
    const sum = order.reduce((acc,curr)=>acc+(curr.price*curr.count),0);
    const token = Cookies.get("token")?"Bearer "+Cookies.get("token"):null;
    console.log("로그인 ",user);
    const nav = useNavigate();
    const orderClick = ()=>{
        if(user.trim().length==0){
            alert("로그인후 이용가능합니다.");
            nav("/login");
        }
        axios.post('/payOk',order,{
            headers:{
                Authorization:token
            }
        })
        .then(res=>{
            console.log(res.data);
            alert("주문이 성공적으로 완료되었습니다.");
            nav("/");
        }).catch(error=>console.log(error));
    }
    return(
        <div>
            <Header />
            <div className="pay-container">
                <div className="pay-info">
                    <div className="sub-title">결제하기</div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a bs-collapse-toggle="" className="clearfix" ng-click="delivery_collapse = !delivery_collapse" data-toggle="collapse">
                                <span className="menu-name pull-left">배달정보</span>
                                <i className="pull-right icon-arr-up" ></i>
                            </a>
                            </h4>
                        </div>
                        <div className="panel-collapse collapse am-collapse in" bs-collapse-target="">
                            <div className="panel-body">
                                <div className="form-horizontal">
                                    <div className="form-group">
                                        <label htmlFor="address" className="col-sm-2 control-label">주소</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control address1" placeholder="배달 주소" name="address" ng-value="session_storage.checkout_input.address" value="경기도 수원시 팔달구 인계동 949 미래빌라" readOnly="readOnly" disabled="disabled" /> <br />
                                            <input type="text" className="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" placeholder="(필수)상세주소 입력" name="address_detail" ng-model="session_storage.checkout_input.address_detail" required="required" />                                            
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="col-sm-2 control-label">휴대전화번호</label>

                                        <div className="ol-sm-offset-2 col-sm-10">
                                            <div className="">
                                            <input type="tel" className="form-control input-type1 ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-pattern" placeholder="(필수)휴대전화 번호 입력" name="phone" ng-pattern="/^[0-9]+$/" required="required" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                            <a bs-collapse-toggle="" className="clearfix" ng-click="delivery_collapse = !delivery_collapse" data-toggle="collapse">
                                <span className="menu-name pull-left">주문시 요청사항</span>
                                <i className="pull-right icon-arr-up" ></i>
                            </a>
                            </h4>
                        </div>
                        <div className="panel-collapse collapse am-collapse in" bs-collapse-target="">
                            <div className="panel-body">
                                <textarea name="" id="" placeholder="코로나 19 예방을 위해 비대면 배달 권장드립니다."></textarea>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="pay-order-sheet">
                    <div className="panel-heading">
                        <h3 className="panel-title">주문내역</h3>
                    </div>
                    <div className="panel-body checkout-order-list">
                        <div className="list-group-item restaurant_name ng-binding" ng-bind="cart.get().restaurant_name">하오차이나-세류점</div>
                        <ul className="list-group order-list">
                            <li className="pay-list-item ng-scope">
                                {order?order.map(item=>(
                                    <div className="order-item clearfix">
                                        <div className="order-name">
                                            <span className="ng-binding">{item.name}</span>
                                            &nbsp; x&nbsp;
                                            <span className="ng-binding">{item.count}</span>개
                                        </div>
                                        <div className="order-price ng-binding"><span>{item.price.toLocaleString()}</span> 원</div>
                                    </div>

                                )):<></>}
                            </li>
                        </ul>
                        <div className="list-group1">
                            <div className="order-name">총 결제 금액</div>
                            <div className="order-price">
                                <span ng-bind="total_price|krw" className="ng-binding"><span>{sum.toLocaleString()}</span>원</span>
                            </div>
                        </div>
                        <button className="btn btn-lg btn-block btn-ygy1 ng-binding" onClick={orderClick}>결제하기</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}