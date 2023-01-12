import React from 'react';
import { Navigate } from 'react-router-dom';

const Test = () => {
  return <Navigate to="/main?offset=0&limit=4" />;
};
export default Test;
