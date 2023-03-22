/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-13 23:36:45
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-03-18 00:32:02
 */
import { Outlet, useNavigate } from 'react-router-dom';
import LeftMenu from '../page/admin/menu';
import './base.css';
interface Tab {
  Label: string;
  Icon: '';
  Link: string;
}

const AdminLayout = () => {
  const Navigate = useNavigate();

  const Tabs: Tab[] = [
    {
      Label: '首页',
      Icon: '',
      Link: '/',
    },
    {
      Label: '博客管理',
      Icon: '',
      Link: '/admin/blog',
    },
    {
      Label: 'link管理',
      Icon: '',
      Link: '/admin/link',
    },
  ];

  const handleClickMenuItem = (tab: Tab) => {
    Navigate(tab.Link);
  };

  return (
    <div className="layout admin">
      <div className="menu">
        {Tabs.map((tab: Tab) => {
          return (
            <div className="menu-item" onClick={() => handleClickMenuItem(tab)}>
              <div>{tab.Icon}</div>
              <div>{tab.Label}</div>
            </div>
          );
        })}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
