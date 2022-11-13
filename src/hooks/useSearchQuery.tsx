/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-11-13 22:20:06
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-11-13 22:21:41
 */
export const useSearchQuery = () => {
  let queries: {
    [propKey: string]: any;
  } = {};

  const searchParams = window.location.search;
  const URLSearch = new URLSearchParams(searchParams);

  const iterator = URLSearch.keys();

  for (const key of iterator) {
    queries[key] = URLSearch.get(key);
  }

  return queries;
};
