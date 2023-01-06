import { Fragment } from 'react';
import { USERAGREEMENT_LIST } from './UserAgreementList';
import './UserAgreementCheck.scss';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';

const UserAgreementCheck = () => {
  return (
    <Fragment>
      {USERAGREEMENT_LIST.map((item) => {
        return (
          <div key={item.id} className="UserAgreementCheck">
            <div className="agreementCheckSection">
              <BsCheckCircleFill className="checkedIcon" />
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
