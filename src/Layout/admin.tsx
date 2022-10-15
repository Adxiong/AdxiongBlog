/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-13 23:36:45
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-15 16:57:52
 */
import { Outlet, Route, Routes } from 'react-router-dom';
import LeftMenu from '../components/Menu';
import './base.css';
const AdminLayout = () => {
  return (
    <div className="layout">
      <LeftMenu width={150}></LeftMenu>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
