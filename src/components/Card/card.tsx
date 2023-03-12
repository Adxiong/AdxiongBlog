/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2023-03-11 23:25:16
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-03-12 16:36:01
 */
import './card.css';

interface CardProps {
  Title: string;
  SnapShot: string;
  Pic: string;
  Link: string;
  onClick(link: string): void;
}

const Card = (prop: CardProps) => {
  return (
    <div className="card" onClick={() => prop.onClick(prop.Link)}>
      <div className="card-pic">
        <img src={prop.Pic} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h2>{prop.Title}</h2>
        </div>
        <div className="card-snapshot">{prop.SnapShot}</div>
      </div>
    </div>
  );
};

export default Card;
