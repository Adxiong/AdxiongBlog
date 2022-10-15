/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-15 15:25:28
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-15 15:33:53
 */
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div id="view" className={theme == 'dark' ? 'dark' : 'light'}>
      <div id="header">
        <div id="site-logo" onClick={handleClickNav} data-value="/">
          logo
        </div>
        <div id="site-nav">
          <ul onClick={handleClickNav}>
            <li data-value="blog">Blog</li>
            <li data-value="project">Project</li>
            <li data-value="talks">Talks</li>
            <li>github</li>
            <li onClick={switchTheme}>{theme === 'dark' ? '白天' : '黑暗'}</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
