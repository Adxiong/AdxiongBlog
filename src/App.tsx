/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:14:56
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-09 23:11:07
 */
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Routes from './routes/routes';
import './app.css';
import { useEffect, useState } from 'react';

function App() {
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
    <div id="app" className={theme == 'dark' ? 'dark' : 'light'}>
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
      <div className="view">
        <Routes />
      </div>
    </div>
  );
}

export default App;
