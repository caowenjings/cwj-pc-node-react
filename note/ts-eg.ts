/* 
1. 场景一：接口响应值是数字枚举类型，前端页面需要用中文展示对应的枚举
   保持只定义一份和后端同步的枚举值，方便后期维护
*/
// ts 使用手册 https://www.cntofu.com/book/2/doc/handbook/Variable%20Declarations.md

// 1.定义常量
export enum StatusEnum {
  TODO = 10, // 待审核
  DONE = 20, // 已过审
  NONE = 30 //未过审
}
export const statusCn = {
  [StatusEnum.TODO]: '待审核', // 定义文中展示需要显示的文字
  [StatusEnum.DONE]: '已过审',
  [StatusEnum.NONE]: '未过审'
};

/** 使用
if (type === STATUS.READY) {
  // TODO
}
*/

// 2.接口对象类型
/**
ClipboardEvent<T = Element> 剪贴板事件对象
DragEvent<T = Element> 拖拽事件对象
ChangeEvent<T = Element> Change 事件对象
KeyboardEvent<T = Element> 键盘事件对象
MouseEvent<T = Element> 鼠标事件对象
TouchEvent<T = Element> 触摸事件对象
WheelEvent<T = Element> 滚轮事件对象
AnimationEvent<T = Element> 动画事件对象
TransitionEvent<T = Element> 过渡事件对象
*/

import { MouseEvent } from 'react';
interface IProps {
  onClick(event: MouseEvent<HTMLDivElement>): void;
}

//3. antd - tabel添加类型
import { ColumnProps } from 'antd/lib/table';
interface IMList {
  id: number;
  name: string;
}

const columns: Array<ColumnProps<IMList>> = [
  {
    title: '名字',
    dataIndex: 'routeKey'
  }
];
const columns1: ColumnProps<IMList>[] = [
  {
    title: '名字',
    dataIndex: 'routeKey'
  }
];
