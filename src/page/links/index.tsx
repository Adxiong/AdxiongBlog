/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2023-03-02 00:22:17
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-04-09 23:20:50
 */
import { Link } from 'react-router-dom';
import Card from '../../components/Card/card';
import './index.css';

const Links = () => {
  const onClickCard = (link: string) => {
    window.open(link, '_blank');
  };
  return (
    <div className="project">
      <div className="project-session">
        <h1>技术专栏</h1>
        <div className="project-list">
          {new Array(23).fill(0).map((item) => {
            return (
              <Link to="" target="_blank">
                <Card
                  Title="掘金"
                  SnapShot="掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。"
                  Pic="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                  Link="https://juejin.cn/"
                  onClick={onClickCard}
                ></Card>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="project-session">
        <h1>旅游专栏</h1>
        <div className="project-list">
          {new Array(23).fill(0).map((item) => {
            return (
              <Card
                Title="掘金"
                SnapShot="掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。"
                Pic="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                Link="https://juejin.cn/"
                onClick={onClickCard}
              ></Card>
            );
          })}
        </div>
      </div>
      <div className="project-session">
        <h1>美食专栏</h1>
        <div className="project-list">
          {new Array(23).fill(0).map((item) => {
            return (
              <Card
                Title="掘金"
                SnapShot="掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。"
                Pic="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                Link="https://juejin.cn/"
                onClick={onClickCard}
              ></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Links;
