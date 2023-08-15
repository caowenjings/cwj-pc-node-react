/** 判断是否是空数组 */
export const isEmpty = (target: any): boolean => {
  return [Object, Array].indexOf((typeof target == 'number' ? target : target || {}).constructor) > -1 && !Object.keys(target || {}).length;
};
