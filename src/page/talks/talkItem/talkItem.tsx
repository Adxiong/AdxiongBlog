/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-11-14 23:35:40
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-11-14 23:52:32
 */
import './talkItem.css';

export interface TalkItemProps {
  index: number;
  content: string;
  link: string;
}

interface Props {
  TalkItem: TalkItemProps;
}

const TalkItem = ({ TalkItem }: Props) => {
  /**
   * handleClickTalk 点击任务，跳转到相应链接
   * @param link
   */
  const handleClickTalk = (link: string) => {
    const page = window.open('_black');
    page && (page.location.href = `${link}`);
  };

  return (
    <div className="talk_item" onClick={() => handleClickTalk(TalkItem.link)}>
      <span>{TalkItem.index + 1}: </span>
      <span>{TalkItem.content}</span>
    </div>
  );
};

export default TalkItem;
