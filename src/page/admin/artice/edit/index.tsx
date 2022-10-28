/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-13 22:51:37
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-29 00:37:38
 */
import { Button, Space } from 'antd';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Request from '../../../../request/api';
import http from '../../../../request/http';
import './index.css';

const Edit = () => {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>();
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const handleClickReturn = () => {
    history.back();
  };

  const handleClickPublish = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    var data = {
      title: title,
      content: content,
    };

    http
      .request({
        url: Request.Article.addArticle,
        method: Request.RequestPost,
        params: data,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  return (
    <div className="editer">
      <div className="editer-tool">
        <Space>
          <div className="return">
            <Button onClick={handleClickReturn}>返回</Button>
          </div>
          <div>
            <Button
              type="primary"
              onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
                handleClickPublish(e)
              }
            >
              发布
            </Button>
          </div>
        </Space>
      </div>
      <div className="editer-body">
        <div className="editer-title">
          <input
            type="text"
            className="editer-title-input"
            placeholder="请输入标题"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeTitle(e)
            }
          />
        </div>
        <div className="editer-content">
          <div className="editarea">
            <textarea
              name=""
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleInputChange(e)
              }
            ></textarea>
          </div>
          <div className="editshow">
            <ReactMarkdown children={content}></ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
