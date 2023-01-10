import { Fragment } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { USERAGREEMENT_LIST } from './UserAgreementList';
import './UserAgreementCheck.scss';

const UserAgreementCheck = () => {
  return (
    <Fragment>
      {USERAGREEMENT_LIST.map((item) => {
        return (
          <div key={item.id} className="UserAgreementCheck">
            <div className="agreementCheckSection">
              <BsCheckCircleFill className="checkedIcon" />
              {/* [Todo] 아이콘 클릭하면 다른 아이콘으로 변경되게 하기 */}
              {/* <BsCheckCircle className="uncheckedIcon"/> */}
              <span className="agreementContent">{item.content}</span>
              <span className="mustOrChoice">({item.option})</span>
            </div>
            {item.button && (
              <button className="termsAndConditionsBtn">약관보기 〉</button>
            )}
          </div>
        );
      })}
    </Fragment>
  );
};

export default UserAgreementCheck;
