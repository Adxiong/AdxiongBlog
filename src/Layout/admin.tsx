/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-13 23:36:45
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-16 11:00:24
 */
import { Outlet } from 'react-router-dom';
import LeftMenu from '../components/Menu';
import './base.css';
const AdminLayout = () => {
  return (
    <div className="layout admin">
      <LeftMenu width={150}></LeftMenu>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
