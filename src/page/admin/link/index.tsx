/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2023-03-18 00:26:24
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-05-02 16:09:58
 */
import { Input, Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import Search from 'antd/lib/transfer/search';
import { useEffect } from 'react';
import Request from '../../../request/api';
import http, { RequestParams } from '../../../request/http';
import { LinkCategoryType, LinkListType } from '../../../request/instant';
import Category from './category';

const Link = () => {
  const TabItems = [
    {
      label: '类别管理',
      key: 'category',
      children: <Category></Category>,
    },
    {
      label: '连接管理',
      key: 'link',
      children: 'Tab 2',
    },
  ];

  useEffect(() => {
    http
      .request<LinkListType>({
        url: Request.Link.getLinkList,
        method: Request.RequestGet,
        params: {
          time: new Date().getTime(),
        },
      } as RequestParams)
      .then((res) => {
        console.log(res);
        // setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);

  return (
    <div>
      <div>
        <Search></Search>
      </div>
      {/* <Tabs type="card" items={TabItems} defaultActiveKey="category"></Tabs> */}
    </div>
  );
};

export default Link;
