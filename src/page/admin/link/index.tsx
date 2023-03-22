import { Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';

const Link = () => {
  const TabItems = [
    {
      label: '类别管理',
      key: 'catgory',
      children: 'Tab 1',
    },
    {
      label: '收藏管理',
      key: 'link',
      children: 'Tab 2',
    },
  ];

  return (
    <div>
      <Tabs type="card" items={TabItems} defaultActiveKey="category"></Tabs>
    </div>
  );
};

export default Link;
