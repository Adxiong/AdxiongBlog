/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:44:41
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-03-18 00:36:30
 */
import { Children } from 'react';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import Introduction from '../page/introduction';
import Blog from '../page/blog';
import Project from '../page/project';
import Links from '../page/links';
import Talks from '../page/talks';
import Edit from '../page/admin/artice/edit';
import AdminLayout from '../Layout/admin';
import DefaultLayout from '../Layout/default';
import AdminBlogManage from '../page/admin/blogManage';
import ArticleDetail from '../page/blog/detail';
import Link from '../page/admin/link';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Introduction />,
      },
      {
        path: 'blog',
        children: [
          {
            path: 'list',
            element: <Blog />,
          },
          {
            path: 'detail/:aid',
            element: <ArticleDetail />,
          },
        ],
      },
      {
        path: 'links',
        element: <Links />,
      },
      {
        path: 'project',
        element: <Project />,
      },
      {
        path: 'talks',
        element: <Talks />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'blog',
        element: <AdminBlogManage />,
      },
      {
        path: 'editblog',
        element: <Edit />,
      },
      {
        path: 'link',
        element: <Link />,
      },
    ],
  },
];

const Routes = () => {
  return useRoutes(routes);
};
export default Routes;
