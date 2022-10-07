/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:14:56
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-08 00:20:13
 */
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Routes from './routes/routes';
import './app.css';
import { useEffect } from 'react';

function App() {
  const Navigate = useNavigate();

  useEffect(() => {});

  const handleClickNav = (
    e: React.MouseEvent<HTMLUListElement | HTMLDivElement, MouseEvent>
  ) => {
    Navigate(e.target.dataset.value);
  };

  return (
    <div id="app">
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
            <li>黑暗</li>
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
