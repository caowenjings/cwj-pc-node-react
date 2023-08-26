/** 用户界面-info */
import React, { memo } from 'react';
import { Button } from 'antd';
import { format } from 'timeago.js';
import { useNavigate } from 'react-router';

import createSkeleton from './listSkeleton';
import { ArticleLink } from '@/types/index';

import { ListPanel, ListItem } from '../style';

interface IProps {
  title: string;
  value: ArticleLink[];
}

const WJList: React.FC<IProps> = (props) => {
  const { value, title } = props;
  const Skeleton = createSkeleton(5);
  const navigate = useNavigate();

  const handelJump = (url: string) => {
    navigate(`/article/${url}`);
  };

  return (
    <>
      {value ? (
        <ListPanel>
          <h3>{title}</h3>
          {value.map((link) => {
            return (
              <ListItem key={link.id}>
                <Button
                  type="text"
                  onClick={() => {
                    handelJump(link.id);
                  }}
                >
                  {link.title}
                </Button>
                <span className="create-at">{format(link.last_reply_at, 'zh_CN')}</span>
              </ListItem>
            );
          })}
        </ListPanel>
      ) : (
        Skeleton
      )}
    </>
  );
};

export default memo(WJList);
