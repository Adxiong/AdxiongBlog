/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:51:15
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-03-12 16:14:42
 */

import TalkItem, { TalkItemProps } from './talkItem/talkItem';
import './index.css';
import Card from 'antd/lib/card';
const Talks = () => {
  const talkList: TalkItemProps[] = [
    {
      index: 0,
      content: 'WebComponents',
      link: 'https://developer.mozilla.org/en-US/docs/Web/Web_Components',
    },
    {
      index: 1,
      content: 'WebAssembly',
      link: 'https://developer.mozilla.org/en-US/docs/WebAssembly',
    },
  ];

  return (
    <div className="talklist">
      {talkList.map((item) => {
        return <TalkItem key={item.index} TalkItem={item}></TalkItem>;
      })}
      <Card></Card>
    </div>
  );
};

export default Talks;
