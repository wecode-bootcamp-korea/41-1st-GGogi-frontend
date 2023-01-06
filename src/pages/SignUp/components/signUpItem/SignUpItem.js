import BirthdayInput from '../birthdayInput/BirthdayInput';
import './SignUpItem.scss';

const SignUpItem = ({
  type,
  title,
  name,
  placeholder,
  handleUserInfo,
  onClickCheckEmail,
}) => {
  return (
    <div className="signUpItem">
      <div className="nameSection">
        <label className="inputTitle">
          {title}
          <span className="star">*</span>
        </label>
      </div>
      {title !== '생년월일' && (
        <input
          className="inputSection"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleUserInfo}
        />
      )}
      {title === '생년월일' && (
        <BirthdayInput handleUserInfo={handleUserInfo} />
      )}
      {title === '이메일' && (
        <button className="comfirmRepetition" onClick={onClickCheckEmail}>
          중복확인
        </button>
      )}
    </div>
  );
};

export default SignUpItem;
