import { Fragment } from 'react';
import './BirthdayInput.scss';

const BirthdayInput = ({ handleUserInfo }) => {
  const BIRTHDAYINPUT_DATA = [
    { id: 1, name: 'birthYear', placeholder: 'YYYY', maxLength: 4 },
    { id: 2, name: 'birthMonth', placeholder: 'MM', maxLength: 2 },
    { id: 3, name: 'birthDay', placeholder: 'DD', maxLength: 2 },
  ];

  return (
    <div className="birthday">
      <div className="birthWrapper">
        {BIRTHDAYINPUT_DATA.map((item) => {
          const { id, name, placeholder, maxLength } = item;
          return (
            <Fragment key={id}>
              <input
                className="inputBirth"
                name={name}
                type="text"
                placeholder={placeholder}
                onChange={handleUserInfo}
                maxLength={maxLength}
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
