/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-13 22:51:37
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-15 21:59:58
 */
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';

const Edit = () => {
  const [content, setContent] = useState<string>();
  const HadleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  return (
    <div className="editer">
      <div className="editer-title">
        <input
          type="text"
          className="editer-title-input"
          placeholder="请输入标题"
        />
      </div>
      <div className="editer-content">
        <div className="editarea">
          <textarea name="" onChange={(e) => HadleInputChange(e)}></textarea>
        </div>
        <div className="editshow">
          <ReactMarkdown children={content}></ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Edit;
