/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:44:41
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-08 00:19:20
 */
import { Children } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Introduction from '../page/introduction';
import Blog from '../page/blog';
import Project from '../page/project';
import Talks from '../page/talks';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Introduction />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/talks',
    element: <Talks />,
  },
];

const Routes = () => {
  return useRoutes(routes);
};
export default Routes;
