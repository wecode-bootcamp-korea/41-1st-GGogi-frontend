import './UserAgreement.scss';

const UserAgreement = () => {
  return (
    <div className="userAgreement">
      <div className="userAgreementTitle">
        이용약관동의<span className="star">*</span>
      </div>
      <div className="agreementSection">
        <div className="allAgreement">
          <p className="allAgreementPhrase">전체 동의합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;
