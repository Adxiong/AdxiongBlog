/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:51:23
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-12 23:42:35
 */
import React, { useEffect, useState } from 'react';
import mfs, { ArticleContent } from '../../utils/fs';

function Blog() {
  const [tree, setTree] = useState<ArticleContent[]>();
  useEffect(() => {
    let val = mfs.ReadAll('/Users/adxiong/Documents/github/blog/doc');
    setTree(val);
  });
  return (
    <div>
      {tree?.map((item: ArticleContent) => {
        return (
          <div>
            <div>{item.Title}</div>
            <div>{item.Author}</div>
            <div>{item.Tag}</div>
            <div>{item.Description}</div>
            <div>{item.Date}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
