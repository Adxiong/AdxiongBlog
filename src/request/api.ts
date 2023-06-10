/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-10-25 22:52:44
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-04-09 23:27:54
 */
export type RequestType = string
export type RequestUrl = string


const RequestGet:RequestType = "GET"
const RequestPost:RequestType = "POST"


interface UserType {
  registerUser: RequestUrl
  delUser: RequestUrl
  updateUser: RequestUrl
  getUserList: RequestUrl
}

interface ArticleType {
  addArticle: RequestUrl
  updateArticle: RequestUrl
  delArticle: RequestUrl
  getArticleList: RequestUrl
  getArticleDetail: RequestUrl
}

interface LinkType{
  addCategory: RequestUrl
  updateCategory: RequestUrl
  delCategory: RequestUrl
  getCategoryList: RequestUrl
  addLink:RequestUrl
  updateLink:RequestUrl
  delLink:RequestUrl
  getLinkList: RequestUrl
}

const User: UserType = {
  registerUser: "/user/register",
  delUser: "/user/del",
  updateUser: "/user/update",
  getUserList: "/user/list",
}

const Article: ArticleType = {
  addArticle: "/article/add",
  updateArticle: "/article/update",
  delArticle: "/article/del",
  getArticleList: "/article/list",
  getArticleDetail: "/article/detail",
}

const Link: LinkType = {
  addCategory: "/category/add",
  updateCategory: "/category/update",
  delCategory: "/category/del",
  getCategoryList: "/category/list",
  addLink: "/link/add",
  updateLink: "/link/update",
  delLink: "/link/del",
  getLinkList: "/link/list",
}

const Request  = {
  RequestGet,
  RequestPost,
  User,
  Article,
  Link
}


export default Request
