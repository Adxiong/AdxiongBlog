/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-10-25 22:47:12
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-29 00:36:14
 */
import axios, { AxiosInstance, AxiosResponse, Canceler, CancelToken } from "axios"
import {RequestType, RequestUrl} from "./api"
import { message } from "antd"
const queue:Record<string,any> = {}
let cancel: Canceler
const CancelToken = axios.CancelToken


export interface RequestParams {
  url:RequestUrl
  method: RequestType
  headers?: Record<string,string> 
  params?: Record<string,any>
}

class Http{
  server: AxiosInstance
  constructor(){
    this.server = axios.create({
      timeout: 6000,
      withCredentials: false
    })
    this.registerInterceptors()
  }

  registerInterceptors() {
    this.server.interceptors.request.use( config => {
      if(queue[config.url as string]) {
        queue[config.url as string]()
      }
      queue[config.url as string] = cancel
      return config
    }, err => {
      return Promise.reject(err)
    })

    this.server.interceptors.response.use( response =>{      
      return response.data
    }, error => {
      if (error && error.response) {
        const {data, status} = error.response;
        message.error({
          content: `${status}:${data.message}`,
          duration: 1,
        })
        return Promise.reject(error)
      } else {
        message.error({
          content: `网络异常`,
          duration: 1,
        })
        return Promise.reject(error)
      }
    })
  }

  request<T>({url,method,headers, params}:RequestParams): Promise<T>{
    return new Promise((resolve, reject) => {
      this.server({
        url: "http://127.0.0.1:8080" + url,
        method,
        headers,
        params,
        cancelToken: new CancelToken( c => {
          cancel = c
        } )
      })
      .then( (res: AxiosResponse) => {
        resolve(res.data as T)
      })
      .catch( err => {
        reject(err)
      })
    })
  }

}


export default new Http()