/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-10-25 22:52:44
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-29 00:25:40
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

const Request  = {
  RequestGet,
  RequestPost,
  User,
  Article
}


export default Request
