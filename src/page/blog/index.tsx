/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:51:23
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-16 12:42:36
 */
import { Space, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.css';
function Blog() {
  const [tree, setTree] = useState<any>(['%template%']);

  return (
    <div className="article">
      <div className="article-list">
        {new Array(10).fill(1).map(() => {
          return (
            <div className="article-item">
              <div className="article-title">我是文章</div>
              <div className="article-profile">
                <Space>
                  <div>adxiong</div>
                  <div>{new Date().toString()}</div>
                  <div>
                    <Tag>go</Tag>
                    <Tag>网络</Tag>
                  </div>
                </Space>
              </div>
              <div className="article-content">阿斯顿发生大方阿斯顿发生</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
