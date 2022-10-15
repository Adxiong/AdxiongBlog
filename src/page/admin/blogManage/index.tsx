/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-15 16:18:51
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-15 17:01:30
 */

import { Button, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const AdminBlogManage = () => {
  const Navigate = useNavigate();

  const handleClickWriteArticle = () => {
    Navigate('/admin/blog/edit');
  };
  return (
    <div>
      <div>
        <Space>
          <Input.Search placeholder="文章搜索"></Input.Search>
          <Button type="primary" onClick={handleClickWriteArticle}>
            写文章
          </Button>
        </Space>
      </div>
      <div>sd</div>
    </div>
  );
};

export default AdminBlogManage;
