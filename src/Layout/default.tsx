/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-15 15:25:28
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-16 10:56:58
 */
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './base.css';
const DefaultLayout = () => {
  const Navigate = useNavigate();
  const [theme, setTheme] = useState<string>('light');
  useEffect(() => {});

  const handleClickNav = (
    e: React.MouseEvent<HTMLUListElement | HTMLDivElement, MouseEvent>
  ) => {
    Navigate(e.target.dataset.value);
  };

  const switchTheme = () => {
    setTheme((theme) => {
      return theme === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <div className={theme == 'dark' ? 'dark layout' : 'light layout'}>
      <div className="header">
        <div className="site-logo" onClick={handleClickNav} data-value="/">
          logo
        </div>
        <div className="site-nav">
          <ul onClick={handleClickNav}>
            <li data-value="blog">Blog</li>
            <li data-value="project">Project</li>
            <li data-value="talks">Talks</li>
            <li>github</li>
            <li onClick={switchTheme}>{theme === 'dark' ? '白天' : '黑暗'}</li>
          </ul>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
