import React from 'react';
import { BsCheckCircleFill, BsCheckCircle, BsCheck2 } from 'react-icons/bs';
import './PersonalInfo.scss';

const AGREEMENT_INFO = [
  {
    id: 1,
    icon: <BsCheck2 className="agreementCheckBtn" />,
    title: '(필수) 개인정보 수집∙이용 및 처리 동의',
  },
  {
    id: 2,
    icon: <BsCheck2 className="agreementCheckBtn" />,
    title: '(필수) 개인정보 제3자 제공 동의',
  },
  {
    id: 3,
    icon: <BsCheck2 className="agreementCheckBtn" />,
    title: '(필수) 전자지급 결제대행 서비스 이용약관 동의',
  },
];

const personalInfo = () => {
  return (
    <div className="personalInfo">
      <h2 className="titleSection">개인정보 수집/제공</h2>
      <div className="personalInfoCheckSection">
        <div className="agreementSection">
          <BsCheckCircleFill className="checkAllBtn" />
          <p className="checkAll">결제 진행 필수 전체 동의</p>
        </div>
        {AGREEMENT_INFO.map((item) => {
          return (
            <div key={item.id} className="agreementSection">
              {item.icon}
              <span className="agreementCheckContent">{item.title}</span>
            </div>
          );
        })}
      </div>
      <p className="noticeSection">
        ※ 컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는
        마켓플레이스(오픈마켓) 상품이 포함되어 있습니다
      </p>
      <p className="noticeSection">
        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의
        당사자가 아닙니다. 컬리는 해당 상품의 주문, 품즐, 교환/환불 등 의무와
        책임을 부담하지 않습니다.
      </p>
    </div>
  );
};

export default personalInfo;
