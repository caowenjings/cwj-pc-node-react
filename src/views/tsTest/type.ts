// -------------------------------1.type 联合类型简化------------------------------------------

import { type } from 'os';

// 蔬菜类型
const vegetable = {
  apple: 1,
  orange: 2,
  banana: 3
};

// 1. 定义单类目
// type + | 实现了一个不为空{}，任意key组合的对象
type vegetable_Type = { apple: number } | { orange: number } | { banana: number };

const s = typeof vegetable;
// interface + ？ 实现 vegetable_Type 会出现{}或者固定key
interface vegetable_interfacee {
  apple?: number;
  orange?: number;
  banana?: number;
}

const vegetable1: vegetable_Type = { apple: 1, orange: 2 };
