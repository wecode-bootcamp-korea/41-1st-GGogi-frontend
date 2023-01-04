import React from 'react';
import './AlertModal.scss';

const AlertModal = () => {
  return (
    <div className="alertModal">
      <p className="alertModalMessage">알람으로 보여줄 메세지 보내기</p>
      <button className="alertBtn">완료</button>
    </div>
  );
};

export default AlertModal;
