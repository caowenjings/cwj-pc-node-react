/** tag */
import React, { memo } from 'react';
import { DICT } from './content';

import { TagWrapper } from './style';

/**@param type:类型 */
interface IProps {
  type: string;
}

const Tag: React.FC<IProps> = (props) => {
  const { type = 'default' } = props;

  return <TagWrapper color={DICT[type].color}>{DICT[type].text}</TagWrapper>;
};

export default memo(Tag);
