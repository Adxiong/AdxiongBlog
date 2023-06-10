/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:51:10
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-06-10 12:14:42
 */
import React, { useState } from 'react';
import QrCode from '../../components/QrCode/qrcode';
import './project.modules.less';

function Project() {
  const menuMap = { qrcode: 'qrcode' };
  const [showEle, setshowEle] = useState('');
  const menuClick = (val: string) => {
    setshowEle(val);
  };
  return (
    <div id="project">
      <div className="p-menu">
        <span onClick={() => menuClick(menuMap.qrcode)}>二维码生成</span>
      </div>
      <div className="p-content">{showEle == menuMap.qrcode && <QrCode />}</div>
    </div>
  );
}

export default Project;
