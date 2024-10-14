export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-menu"><ul><li className="mb" ng-show="!is_mobile_device"><a href="#/policy/">이용약관</a></li><li className="mb privacy-txt" ng-show="!is_mobile_device"><a href="#/privacy/">개인정보처리방침</a></li><li className="mb cscenter" ng-show="!is_mobile_device"><a href="#/point_policy/">포인트정책</a></li><li className="mb ng-hide" ng-show="is_mobile_device"><a ng-bind="check_login() ? '로그아웃' : '로그인'" ng-click="login()" className="ng-binding">로그인</a></li><li className="mb cscenter ng-hide" ng-show="is_mobile_device"><a href="#/contact/">고객만족센터</a></li><li className="mb"><a href="https://www.wesang.com/" rel="noopener noreferrer" target="_blank">회사소개</a></li><li><a href="https://www.yogiyo.co.kr/owner/login/" target="_blank">요기요사장님</a></li><li className="mb lst"><a href="https://owner.yogiyo.co.kr/owner/join/request/">입점문의</a></li><li className="mb down_app ng-hide" ng-show="is_mobile_device"><a href="" ng-click="download_app('footer')" className="app">APP설치</a></li><li className="mb notice"><a href="#/notice/">공지사항</a></li><li className="mb faq"><a href="#/faq/">FAQ</a></li><li className="sns-link"><a href="https://www.facebook.com/Yogiyokorea/" className="facebook" rel="noopener noreferrer" target="_blank"><span></span>페이스북</a><a href="https://blog.naver.com/rgpkorea" className="blog" rel="noopener noreferrer" target="_blank"><span></span>블로그</a></li></ul></div>
            <div className="company-wrap">
                <div className="company-logo"><a href="" ng-click="click_home()">요기요</a></div>
                <div className="company-container">
                    <div className="company-info"><p><strong>주식회사 위대한상상</strong><br/>서울시 서초구 서초대로38길 12 마제스타시티 타워2 17층<span className="bar">|</span>대표이사 : 전준희<span className="bar">|</span>사업자등록번호:211-88-68802<a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2118868802" rel="noopener noreferrer" target="_blank" className="biz-info" ng-show="!is_mobile_device">사업자정보확인</a> 통신판매업신고:제 2018-서울서초-2635호<span className="bar">|</span>개인정보담당자 :<a href="mailto:privacy@yogiyo.co.kr">privacy@yogiyo.co.kr</a><span className="bar">|</span>제휴문의 : <a href="mailto:partnership@yogiyo.co.kr">partnership@yogiyo.co.kr</a><span className="bar">|</span>고객만족센터 :<span ng-show="is_mobile_width" className="pnum ng-hide">1661-5270(유료) 24시간, 연중무휴</span> <a href="mailto:support@yogiyo.co.kr">support@yogiyo.co.kr</a><span className="bar">|</span>호스팅 제공자: 카페24 주식회사</p><div className="footer-terms ng-hide" ng-show="is_mobile_device"></div></div>
                    <div className="service-info"><div className="bpg"><a href="#/trust/"><span className="img"></span><span className="text">요기요<br />안심센터</span></a></div><div className="cleanreview"><a href="#/cleanreview/"><span className="img"></span><span className="text">요기요 100%<br />클린리뷰</span></a></div><div className="csc"><em>고객만족센터</em> <strong>1661-5270</strong><em>(유료)</em> <span>24시간, 연중무휴</span></div></div>
                    <div className="guide"><p>주식회사 위대한상상은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품/ 거래정보 및 거래와 관련하여 요기요에 등록된 판매자의 고의 또는 과실로 소비자에게 발생하는 손해에 대해 주식회사 위대한상상은 책임을 지지 않습니다. 상품 및 거래에 관하여 보다 정확한 정보는 해당판매자에게 직접 확인하여 주시기 바랍니다. 단, 주식회사 위대한상상이 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다. Copyright YOGIYO. All Rights Reserved.</p></div>
                </div>
            </div>
        </div>
    )
}