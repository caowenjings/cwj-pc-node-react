/** 404页面 */
import React, { memo } from 'react';
import { useNavigate } from 'react-router';
import { NotFoundWrapper } from './style';

const WJNotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <NotFoundWrapper>
      <h2>404</h2>
      <h5>Oops,it looks like u are lost</h5>
      <div onClick={goHome}>Back to home Page</div>
    </NotFoundWrapper>
  );
};

export default memo(WJNotFound);
