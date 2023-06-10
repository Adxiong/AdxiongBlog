/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-11-13 22:25:58
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-04-09 23:37:30
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


// link类别
export interface LinkCategory {
  id: number;
  cid: number;
  name: string;
  create_at: number;
  update_at: number;
}


// link
export interface LinkCategoryType {
  cid: number;
  cname: string;
  create_at: number;
  update_at: number;
  list: LinkType[];
}
export interface LinkListType{
  list: LinkCategoryType[]
}

export interface LinkType {
  id: number;
  name:string;
  url: string;
  link_id: number;
  category_id: number;
  pic: string;
  brief: string;
  create_at: number;
  update_at: number;
}