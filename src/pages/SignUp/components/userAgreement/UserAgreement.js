import UserAgreementCheck from './UserAgreementCheck';
import './UserAgreement.scss';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';

const UserAgreement = () => {
  return (
    <div className="userAgreement">
      <div className="userAgreementTitle">
        이용약관동의<span className="star">*</span>
      </div>
      <div className="agreementSection">
        <div className="allAgreement">
          <div className="allAgreementTop">
            <BsCheckCircleFill className="checkedIcon" />
            {/* <BsCheckCircle className="uncheckedIcon"/> */}
            <p className="allAgreementPhrase">전체 동의합니다.</p>
          </div>
          <div className="disagreementPhrase">
            선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할
            수 있습니다.
          </div>
          <UserAgreementCheck />
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;
