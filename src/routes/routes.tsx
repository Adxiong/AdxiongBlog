/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:44:41
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-15 23:52:47
 */
import { Children } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Introduction from '../page/introduction';
import Blog from '../page/blog';
import Project from '../page/project';
import Talks from '../page/talks';
import Edit from '../page/admin/artice/edit';
import AdminLayout from '../Layout/admin';
import DefaultLayout from '../Layout/default';
import AdminBlogManage from '../page/admin/blogManage';

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
        element: <Blog />,
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
        path: 'blog/edit',
        element: <Edit />,
      },
    ],
  },
];

const Routes = () => {
  return useRoutes(routes);
};
export default Routes;
