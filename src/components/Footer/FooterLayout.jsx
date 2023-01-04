import React from 'react';
import '../../styles/common.scss';
import '../../styles/variables.scss';
import './FooterLayout.scss';

const FooterLayout = () => {
  return (
    <div className="mainFooter">
      <div className="footerLayout">
        <div className="higtFooterBox">
          <div className="leftFooter">
            <div className="infoHead">
              <h2 className="happyCall">고객행복센터</h2>
              <span className="happyCallNumber">1234-5678</span>
              <span className="footerHappyCallTimeInfo">
                월~토요일 오전 7시 - 오후 6시
              </span>
            </div>
            <button className="leftFooterButton">카카오톡 문의</button>
            <span className="footerTimeInfo">월~토요일</span>
            <span className="footerTimeInfo">오전 7시 ~ 오후 6시</span>
            <span className="footerTimeInfo">일/공휴일</span>
            <span className="footerTimeInfo">오전 7시 ~ 오후 1시</span>
            <br />
            <button className="leftFooterButton">1:1 문의</button>
            <span className="footerTimeInfo">365일</span>
            <span className="footerTimeInfo">
              고객센터 운영시간에 순차적으로 답변드리겠습니다.
            </span>
            <br />
            <button className="leftFooterButton">대량주문 문의</button>
            <span className="footerTimeInfo">월~금요일</span>
            <span className="footerTimeInfo">오전 9시 ~ 오후 6시</span>
            <span className="footerTimeInfo">점심시간</span>
            <span className="footerTimeInfo">낮 12시 ~ 오후 1시</span>
            <br />
            <span className="emailInfo">비회원 문의 : help@wecode.com</span>
            <br />
            <span className="emailInfo">
              비회원 대량주문 문의 : clonekurly@wecode.com
            </span>
          </div>
          <div className="rightFooter">
            <div>
              <ul className="information">
                {INFORMATION.map((item) => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className="companyInfo">
              <span className="companyInfoText detailBorder">
                법인명 상호 : 주식회사 컬리
              </span>
              <span className="companyInfoText detailBorder">
                사업자등록번호 : 000-00-00000
              </span>
              <span className="companyInfoPurpleText detailBorder">
                사업자정보 확인
              </span>
              <span className="companyInfoText detailBorder">
                통신판매업 : 제 2023-서울강남-00000호
              </span>
              <span className="companyInfoText detailBorder">
                개인정보보호책임자 : 홍길동
              </span>
              <span className="companyInfoText detailBorder">
                주소 : 서울특별시 강남구 테헤란로 427 10층
              </span>
              <span className="companyInfoText detailBorder">
                대표이사 : 홍길동
              </span>
              <span className="companyInfoText">입점문의 : </span>
              <span className="companyInfoPurpleText">입점문의하기</span>
              <br />
              <span className="companyInfoText">제휴문의 : </span>
              <span className="companyInfoPurpleText detailBorder">
                wecode1234@wecode.com
              </span>
              <span className="companyInfoText">채용문의 :</span>
              <span className="companyInfoPurpleText">
                wecode1234@wecode.com
              </span>
              <br />
              <span className="companyInfoText">팩스 : 000-0000-0000</span>
            </div>
            <div className="snsLogos">
              <img src="./images/instagram.png" alt="instagram logo" />
              <img src="./images/facebook.png" alt="facebook logo" />
              <img src="./images/blogger.png" alt="blogger logo" />
              <img src="./images/cloud.png" alt="cloud logo" />
              <img src="./images/youtube.png" alt="youtube logo" />
            </div>
          </div>
        </div>

        <div className="partners">
          {INFOLIST.map((item) => (
            <div className="partnersLogos" key={item.id}>
              <img className={item.className} src={item.src} alt={item.alt} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="caution">
          <p className="cautiontext">
            컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는
            마켓플레이스 오픈마켓 상품이 포함되어있습니다.
          </p>
          <p className="cautiontext">
            마켓 플레이스 상품의 경우 컬리는 통신판매중계자로서 통신판매의
            당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등
            의무와 책음을 부담하지 않습니다.
          </p>
          <p className="cautiontext">© KURLY CORP. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;

const INFORMATION = [
  { id: '1', text: '컬리소개 ' },
  { id: '2', text: '컬리소개영상 ' },
  { id: '3', text: '인재채용 ' },
  { id: '4', text: '이용약관 ' },
  { id: '5', text: '개인정보처리방침 ' },
  { id: '6', text: '이용안내 ' },
];

const INFOLIST = [
  {
    id: 1,
    className: 'partnersImgWidth',
    src: './images/partners1.png',
    alt: 'partners logo',
    text: '인증범위 컬리 쇼핑몰 서비스 개발 운영 심사받지 않는 물리적 인프라 제외 유효기간 2022.01.19 ~ 2025.01.18',
  },
  {
    id: 2,
    className: 'partnersImgWidth',
    src: './images/partners2.png',
    alt: 'partners logo',
    text: '개인정보보호 우수 웹사이트 개인정보처리시스템 인증.ePREVAS Plus',
  },
  {
    id: 3,
    className: 'partnersImgWidth',
    src: './images/partners3.png',
    alt: 'partners logo',
    text: '토스페이먼츠 구매안전 에스트코 서비스를 이용할 수 있습니다.',
  },
  {
    id: 4,
    className: 'partnersImgWidth',
    src: './images/partners4.png',
    alt: 'partners logo',
    text: '고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.',
  },
];
