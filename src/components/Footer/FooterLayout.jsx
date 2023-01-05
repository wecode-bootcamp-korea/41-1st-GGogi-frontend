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
            {KAKAOTIMELIST.map((item) => (
              <span className="footerTimeInfo" key={item.id}>
                {item.text}
              </span>
            ))}
            <br />
            <button className="leftFooterButton">1:1 문의</button>
            <span className="footerTimeInfo">365일</span>
            <span className="footerTimeInfo">
              고객센터 운영시간에 순차적으로 답변드리겠습니다.
            </span>
            <br />
            <button className="leftFooterButton">대량주문 문의</button>
            {BULKORDERTIMELIST.map((item) => (
              <span className="footerTimeInfo" key={item.id}>
                {item.text}
              </span>
            ))}
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
              {COMPANYINFOTEXT.map((item) => (
                <span className="companyInfoText" key={item.id}>
                  {item.text}
                </span>
              ))}
            </div>
            <div className="snsLogos">
              {SNSLOGOSIMG.map((item) => (
                <img key={item.id} src={item.img} alt={item.alt} />
              ))}
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
  { id: 1, text: '컬리소개 ' },
  { id: 2, text: '컬리소개영상 ' },
  { id: 3, text: '인재채용 ' },
  { id: 4, text: '이용약관 ' },
  { id: 5, text: '개인정보처리방침 ' },
  { id: 6, text: '이용안내 ' },
];

const INFOLIST = [
  {
    id: 7,
    className: 'partnersImgWidth',
    src: './images/partners1.png',
    alt: 'partners logo',
    text: '인증범위 컬리 쇼핑몰 서비스 개발 운영 심사받지 않는 물리적 인프라 제외 유효기간 2022.01.19 ~ 2025.01.18',
  },
  {
    id: 8,
    className: 'partnersImgWidth',
    src: './images/partners2.png',
    alt: 'partners logo',
    text: '개인정보보호 우수 웹사이트 개인정보처리시스템 인증.ePREVAS Plus',
  },
  {
    id: 9,
    className: 'partnersImgWidth',
    src: './images/partners3.png',
    alt: 'partners logo',
    text: '토스페이먼츠 구매안전 에스트코 서비스를 이용할 수 있습니다.',
  },
  {
    id: 10,
    className: 'partnersImgWidth',
    src: './images/partners4.png',
    alt: 'partners logo',
    text: '고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.',
  },
];

const KAKAOTIMELIST = [
  { id: 11, text: '월~금요일' },
  { id: 12, text: '오전 9시 ~ 오후 6시' },
  { id: 13, text: '점심시간' },
  { id: 14, text: '낮 12시 ~ 오후 1시' },
];

const BULKORDERTIMELIST = [
  { id: 15, text: '월~토요일' },
  { id: 16, text: '오전 7시 ~ 오후 6시' },
  { id: 17, text: '일/공휴일' },
  { id: 18, text: '오전 7시 ~ 오후 1시' },
];

const SNSLOGOSIMG = [
  { id: 19, img: './images/instagram.png', alt: 'instagram logo' },
  { id: 20, img: './images/facebook.png', alt: 'facebook logo' },
  { id: 21, img: './images/blogger.png', alt: 'blogger logo' },
  { id: 22, img: './images/cloud.png', alt: 'cloud logo' },
  { id: 23, img: './images/youtube.png', alt: 'youtube logo' },
];

const COMPANYINFOTEXT = [
  { id: 24, text: '법인명 상호 : 주식회사 컬리' },
  { id: 25, text: '사업자등록번호 : 000-00-00000' },
  { id: 26, text: '사업자정보 확인' },
  { id: 27, text: '통신판매업 : 제 2023-서울강남-00000호' },
  { id: 28, text: '개인정보보호책임자 : 홍길동' },
  { id: 29, text: '주소 : 서울특별시 강남구 테헤란로 427 10층' },
  { id: 30, text: '대표이사 : 홍길동' },
  { id: 31, text: '입점문의 : ' },
  { id: 32, text: '입점문의하기' },
  { id: 33, text: '제휴문의 : ' },
  { id: 34, text: 'wecode1234@wecode.com' },
  { id: 35, text: '채용문의 :' },
  { id: 36, text: '법wecode1234@wecode.com' },
  { id: 37, text: '팩스 : 000-0000-0000' },
];
