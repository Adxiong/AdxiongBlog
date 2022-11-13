/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-11-13 22:25:58
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-11-13 22:45:31
 */

export enum MODE {
  PUBLISH,
  UPDATE,
}

export interface blogtype {
  id: number;
  aid: number;
  title: string;
  content: string;
  author_id: number;
  create_at: string;
  update_at: string;
}


export interface ArticleType {
  id: number;
  aid: number;
  title: string;
  content: string;
  author_id: string;
}