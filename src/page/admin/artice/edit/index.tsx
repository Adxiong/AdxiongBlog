/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-13 22:51:37
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-16 10:36:14
 */
import { Button, Space } from 'antd';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';

const Edit = () => {
  const [content, setContent] = useState<string>();
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const handleClickReturn = () => {
    history.back();
  };
  return (
    <div className="editer">
      <div className="editer-tool">
        <Space>
          <div className="return">
            <Button onClick={handleClickReturn}>返回</Button>
          </div>
          <div>
            <Button type="primary">发布</Button>
          </div>
        </Space>
      </div>
      <div className="editer-body">
        <div className="editer-title">
          <input
            type="text"
            className="editer-title-input"
            placeholder="请输入标题"
          />
        </div>
        <div className="editer-content">
          <div className="editarea">
            <textarea name="" onChange={(e) => handleInputChange(e)}></textarea>
          </div>
          <div className="editshow">
            <ReactMarkdown children={content}></ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
