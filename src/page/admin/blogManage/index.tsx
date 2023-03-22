/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-15 16:18:51
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-03-18 00:37:23
 */

import { Button, Form, Input, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Request from '../../../request/api';
import http from '../../../request/http';

interface ArticleListType {
  id: number;
  aid: number;
  author: string;
  author_id: number;
  create_at: string;
  update_at: string;
  title: string;
}

const AdminBlogManage = () => {
  const Navigate = useNavigate();

  const Columns: ColumnsType<ArticleListType> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'aid',
      dataIndex: 'aid',
      key: 'aid',
    },
    {
      title: '文章',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '作者',
      dataIndex: 'author_id',
      key: 'author_id',
    },
    {
      title: '创建时间',
      dataIndex: 'create_at',
      key: 'create_at',
      render: (value, record, index) => {
        return <span>{new Date(value).toLocaleString()}</span>;
      },
    },
    {
      title: '更新时间',
      dataIndex: 'update_at',
      key: 'update_at',
      render: (value, record, index) => {
        return <span>{new Date(value).toLocaleString()}</span>;
      },
    },
    {
      title: '操作',
      key: 'options',
      render: (value, record, index) => {
        return (
          <Space>
            <Button
              type="primary"
              onClick={() => {
                handleClickViewArticle(record.aid);
              }}
            >
              预览
            </Button>
            <Button
              type="primary"
              onClick={() => {
                handleClickWriteArticle(record.aid);
              }}
            >
              编辑
            </Button>
            <Button
              danger
              onClick={() => {
                handleClickDelArticle(record.aid);
              }}
            >
              删除
            </Button>
          </Space>
        );
      },
    },
  ];

  const [data, setData] = useState<ArticleListType[]>();

  useEffect(() => {
    handleSearchArticle();
  }, []);

  /**
   * handleSearchArticle 搜索文章
   * @param title
   */
  const handleSearchArticle = (title?: string) => {
    http
      .request<ArticleListType[]>({
        url: Request.Article.getArticleList,
        method: Request.RequestGet,
        params: {
          title,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * handleClickViewArticle 预览文章
   * @param aid
   */
  const handleClickViewArticle = (aid: number) => {
    const page = window.open('_black');
    page && (page.location.href = `../blog/detail/${aid}`);
  };

  /**
   * handleClickWriteArticle 编辑文章
   * @param aid [?]
   */
  const handleClickWriteArticle = (aid?: number) => {
    if (aid) {
      Navigate(`/admin/editblog?aid=${aid}`);
    } else {
      Navigate('/admin/editblog');
    }
  };

  /**
   * handleClickDelArticle 删除文章
   * @param aid
   */
  const handleClickDelArticle = (aid: number) => {
    http
      .request({
        url: Request.Article.delArticle,
        method: Request.RequestPost,
        data: {
          aid,
        },
      })
      .then((res) => {
        setData(
          (list?: ArticleListType[]): ArticleListType[] =>
            list?.filter((item) => item.aid != aid) ?? []
        );
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div>
        <Space>
          <Input.Search
            placeholder="文章搜索"
            onChange={(e) => {
              handleSearchArticle(e.target.value);
            }}
          ></Input.Search>
          <Button
            type="primary"
            onClick={() => {
              handleClickWriteArticle();
            }}
          >
            写文章
          </Button>
        </Space>
      </div>
      <div>{data && <Table columns={Columns} dataSource={data}></Table>}</div>
    </div>
  );
};

export default AdminBlogManage;
