/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-13 23:34:11
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-15 16:37:03
 */
import { useNavigate } from 'react-router-dom';
import './index.css';
interface Tab {
  Label: string;
  Icon: '';
  Link: string;
}

interface PropType {
  height?: number;
  width?: number;
  lineHeight?: number;
}

const LeftMenu = (props: PropType) => {
  const Navigate = useNavigate();

  const { height = '100%', width = 200, lineHeight = 40 } = props;
  const Tabs: Tab[] = [
    {
      Label: '首页',
      Icon: '',
      Link: '/',
    },
    {
      Label: '博客管理',
      Icon: '',
      Link: '/admin/blog/manage',
    },
  ];

  const handleClickMenuItem = (tab: Tab) => {
    Navigate(tab.Link);
  };
  return (
    <div className="menu" style={{ height, width }}>
      {Tabs.map((tab: Tab) => {
        return (
          <div
            className="menu-item"
            style={{ height: lineHeight }}
            onClick={() => handleClickMenuItem(tab)}
          >
            <div>{tab.Icon}</div>
            <div>{tab.Label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LeftMenu;
