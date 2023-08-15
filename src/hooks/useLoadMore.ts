/** 加载更多函数 */
import React, { useEffect, useRef, useCallback } from 'react';
import useAsync from './useAsync';
import { isEmpty } from '@/utils/index';

/** 分页的初始值 */
const defaultOption = {
  initPage: 1,
  initPageSize: 10
};

interface Option extends Partial<typeof defaultOption> {
  defaultResult?: { list: Array<any> };
  formatResult?<T>(result: any): { list: Array<T> }; // 处理返回结果的函数
  isNoMore?(result: any): boolean; //函数：是否更多
  [propname: string]: any;
}

/**
 * 思路： 1.传入函数,依赖值,对象（其中包括，处理返回数函数，是否最后一次请求，等）
 *        2. 根据依赖值来判断是否执行操作
 *        3. 发起请求，逻辑处理
 * @param {Function} action
 * @param {Array} deps 依赖值
 */

const useLoadMore = (action: (res: any) => Promise<any>, option: Option = defaultOption, deps: React.DependencyList = []) => {
  option = { ...defaultOption, ...(option || {}) };
  const defaultList = option.defaultResult?.list || [];

  const infoRef = useRef({
    completed: false,
    page: 1,
    list: [] as any[]
  });

  // 初始处理请求
  const actionHandler = useCallback(() => {
    return action({ page: infoRef.current.page, pageSize: option.initPageSize });
  }, [action]);

  // 请求处理
  const { loading, run } = useAsync(actionHandler, {
    mannual: true, // false 自动触发第一次请求，true不触发
    onSuccess: (res: any) => {
      const preList = infoRef.current.list;
      const prePage = infoRef.current.page;

      // 如果有处理返回结果的函数就先调用
      const resultList = option.formatResult ? option.formatResult({ response: res, page: prePage }).list : res.list;

      infoRef.current.list = prePage === 1 ? resultList : [...preList, ...resultList];

      // 根据函数来判断，是否还有下一次请求
      infoRef.current.completed = option.isNoMore ? option.isNoMore(res) : false;
    }
  });

  // 发起请求 :依赖值变化重新开始，否则执行分页请求
  useEffect(() => {
    infoRef.current = {
      page: 1,
      list: defaultList || [],
      completed: false
    };

    isEmpty(defaultList) && run();
  }, [...deps]);

  // 发起下一页请求
  const loadMore = useCallback(() => {
    infoRef.current = {
      ...infoRef.current,
      page: infoRef.current.page + 1
    };
    run();
  }, []);

  return { loading, loadMore, ...infoRef.current };
};

export default useLoadMore;
