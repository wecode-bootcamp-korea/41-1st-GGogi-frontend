import { Fragment } from 'react';
import './BirthdayInput.scss';

const BirthdayInput = ({ handleUserInfo }) => {
  const BIRTHDAYINPUT_DATA = [
    { id: 1, name: 'birthYear', placeholder: 'YYYY' },
    { id: 2, name: 'birthMonth', placeholder: 'MM' },
    { id: 3, name: 'birthDay', placeholder: 'DD' },
  ];

  return (
    <div className="birthday">
      <div className="birthWrapper">
        {BIRTHDAYINPUT_DATA.map((item) => {
          return (
            <Fragment key={item.id}>
              <input
                className="inputBirth"
                name={item.name}
                type="text"
                placeholder={item.placeholder}
                onChange={handleUserInfo}
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
