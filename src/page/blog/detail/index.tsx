import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import Request from '../../../request/api';
import http, { RequestParams } from '../../../request/http';
import { ArticleType } from '../../../request/instant';
import './index.css';
/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-28 22:50:44
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-11-13 22:27:17
 */

const Detail = () => {
  const { aid } = useParams();

  const [data, setData] = useState<ArticleType>();
  useEffect(() => {
    http
      .request<ArticleType>({
        url: Request.Article.getArticleDetail,
        method: Request.RequestGet,
        params: {
          aid: String(aid),
        },
      } as RequestParams)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="article_page">
      <div className="article_body">
        <div className="article_title">{data?.title}</div>
        <div className="article_content">
          {data && <ReactMarkdown children={data.content}></ReactMarkdown>}
        </div>
      </div>
    </div>
  );
};

export default Detail;
