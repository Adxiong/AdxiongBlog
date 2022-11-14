/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:51:15
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-11-14 23:53:12
 */

import TalkItem, { TalkItemProps } from './talkItem/talkItem';
import './index.css';
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
    </div>
  );
};

export default Talks;
