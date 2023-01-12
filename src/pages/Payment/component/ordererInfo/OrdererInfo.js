import './OrdererInfo.scss';

const OrdererInfo = ({ userName, userPhone, userEmail }) => {
  const userInfo = [
    {
      id: 1,
      title: '보내는 분',
      content: userName,
    },
    {
      id: 2,
      title: '휴대폰',
      content: userPhone,
    },
    {
      id: 3,
      title: '이메일',
      content: userEmail,
    },
  ];

  return (
    <div className="ordererInfo">
      <h2 className="ordererInfoTitle">주문자 정보</h2>
      <div className="ordererInfoSection">
        {userInfo.map((item) => {
          const { id, title, content } = item;
          return (
            <div key={id} className="ordererInfoRow">
              <span className="infoTitle">{title}</span>
              <span className="infoContent">{content}</span>
            </div>
          );
        })}
        <p className="additionalInfo">
          이메일을 통해 주문처리 과정을 보내드립니다.
        </p>
        <p className="additionalInfo">
          정보 변경은 마이컬리 - 개인정보 수정에서 가능합니다.
        </p>
      </div>
    </div>
  );
};

export default OrdererInfo;
