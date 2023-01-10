import { Fragment } from 'react';
import './BirthdayInput.scss';

const BirthdayInput = ({ handleUserInfo }) => {
  const BIRTHDAYINPUT_DATA = [
    { id: 1, name: 'birthYear', placeholder: 'YYYY', maxlength: 4 },
    { id: 2, name: 'birthMonth', placeholder: 'MM', maxlength: 2 },
    { id: 3, name: 'birthDay', placeholder: 'DD', maxlength: 2 },
  ];

  return (
    <div className="birthday">
      <div className="birthWrapper">
        {BIRTHDAYINPUT_DATA.map((item) => {
          const { id, name, placeholder, maxlength } = item;
          return (
            <Fragment key={id}>
              <input
                className="inputBirth"
                name={name}
                type="text"
                placeholder={placeholder}
                onChange={handleUserInfo}
                maxlength={maxlength}
              />
              {item.id !== 3 && <p className="slash">/</p>}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default BirthdayInput;
