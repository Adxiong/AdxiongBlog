/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-13 22:51:37
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-11-13 22:41:21
 */
import { Button, Space } from 'antd';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSearchQuery } from '../../../../hooks/useSearchQuery';
import Request from '../../../../request/api';
import http, { RequestParams } from '../../../../request/http';
import { ArticleType, MODE } from '../../../../request/instant';
import './index.css';

const Edit = () => {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>();
  const { aid } = useSearchQuery();
  const [mode, setMode] = useState<MODE>(MODE.PUBLISH);

  useEffect(() => {
    aid &&
      http
        .request<ArticleType>({
          url: Request.Article.getArticleDetail,
          method: Request.RequestGet,
          params: {
            aid: String(aid),
          },
        } as RequestParams)
        .then((res: ArticleType) => {
          setContent(res.content);
          setTitle(res.title);
          setMode(MODE.UPDATE);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  /**
   * onChangeTitle 输入标题
   * @param e
   */
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  /**
   * handleInputChange 输入内容
   * @param event
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  /**
   * handleClickReturn 后退
   */
  const handleClickReturn = () => {
    history.back();
  };

  /**
   * handleClickPublish 发布或者更新
   * @param e
   */
  const handleClickPublishOrUpdate = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
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
                handleClickPublishOrUpdate(e)
              }
            >
              {mode == MODE.PUBLISH ? '发布' : '更新'}
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
            defaultValue={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeTitle(e)
            }
          />
        </div>
        <div className="editer-content">
          <div className="editarea">
            <textarea
              name=""
              defaultValue={content}
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
