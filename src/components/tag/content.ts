import { COLOR_RED, COLOR_ORANGE_DEEP, COLOR_BLUE_PRIMARY, COLOR_GREEN_TEAL, COLOR_GREEN_OLIVE, COLOR_GREY_INFO } from '@/content/style';

interface cate {
  text: string;
  color: string;
}

interface TagDict {
  [index: string]: cate;
}

export const DICT: TagDict = {
  top: { text: '置顶', color: COLOR_RED },
  good: { text: '精华', color: COLOR_ORANGE_DEEP },
  share: { text: '分享', color: COLOR_GREEN_TEAL },
  ask: { text: '问答', color: COLOR_BLUE_PRIMARY },
  job: { text: '招聘', color: COLOR_GREEN_OLIVE },
  default: { text: '话题', color: COLOR_GREY_INFO }
};
