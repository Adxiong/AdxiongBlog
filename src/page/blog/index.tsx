/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:51:23
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-25 23:53:28
 */
import { Space, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import Request from '../../request/api';
import http from '../../request/http';
import './index.css';

interface blogtype {
  id: number;
  aid: number;
  title: string;
  content: string;
  author_id: number;
  create_at: string;
  update_at: string;
}

function Blog() {
  const [data, setData] = useState<blogtype[]>();

  useEffect(() => {
    http
      .request<blogtype[]>(
        Request.Article.getArticleList,
        Request.RequestGet,
        {}
      )
      .then((res: blogtype[]) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="article">
      <div className="article-list">
        {data?.map((item: blogtype) => {
          return (
            <div className="article-item">
              <div className="article-title">{item.title}</div>
              <div className="article-profile">
                <Space>
                  <div>{item.author_id}</div>
                  <div>{new Date(item.create_at).toLocaleString()}</div>
                  <div>
                    <Tag>go</Tag>
                    <Tag>网络</Tag>
                  </div>
                </Space>
              </div>
              <div className="article-content">{item.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
