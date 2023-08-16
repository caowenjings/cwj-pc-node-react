/** 骨架图 */
import React, { useState, memo } from 'react';

import { ImageWrapper } from './style';

const defaultProps = { alt: '', width: 50, height: 50, radius: 8, onClick: (e: React.MouseEvent) => {} };

interface IImageProps extends Partial<typeof defaultProps> {
  src: string;
  style?: React.CSSProperties;
}

const WJImage: React.FC<IImageProps> = (props) => {
  const data = { ...defaultProps, ...props };
  const { width, height, radius, onClick } = data;
  const { src, style } = props;
  const [status, setStatus] = useState('loading');

  return (
    <ImageWrapper className={`image-${status}`} onClick={onClick} width={width} height={height} radius={radius} style={{ ...style }}>
      <img src={src} alt="" onLoad={() => setStatus('complete')} onError={() => setStatus('error')} />
    </ImageWrapper>
  );
};

export default memo(WJImage);
