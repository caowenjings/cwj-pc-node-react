/* 
1. 场景一：接口响应值是数字枚举类型，前端页面需要用中文展示对应的枚举
   保持只定义一份和后端同步的枚举值，方便后期维护
*/
// ts 使用手册 https://www.cntofu.com/book/2/doc/handbook/Variable%20Declarations.md
export enum StatusEnum {
  TODO = 10, // 待审核
  DONE = 20, // 已过审
  NONE = 30 //未过审
}
// 定义文中展示需要显示的文字
export const statusCn = {
  [StatusEnum.TODO]: '待审核',
  [StatusEnum.DONE]: '已过审',
  [StatusEnum.NONE]: '未过审'
};
