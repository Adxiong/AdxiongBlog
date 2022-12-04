/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-10-25 22:47:12
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-12-04 16:50:20
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
  data?: Record<string,any>
}

interface Response<T =any> {
  errno: number
  errmsg: string
  data: T
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
    }, error => {
      message.error({
        content: `${error.code} - ${error.message}`,
        duration: 2,
      })
      return Promise.reject(error)
    })

    this.server.interceptors.response.use( response =>{
      return response
    }, error => {
      console.log(error)
      if (error.name == "CancelError") {

      }
      message.error({
        content: `${error.code} - ${error.message}`,
        duration: 2,
      })
      return Promise.reject(error)
    })
  }

  request<T>({url,method,headers, params,data}:RequestParams): Promise<T>{
    return new Promise((resolve, reject) => {
      this.server({
        url: "http://127.0.0.1:8080" + url,
        method,
        headers,
        params,
        data,
        cancelToken: new CancelToken( c => {
          cancel = c
        } )
      })
      .then( (res: AxiosResponse<Response<T>>) => {
        let body = res.data
        if(body.errno != 0) {
          message.error({
            content: `${body.errno}-${body.errmsg}`,
            duration: 1,
          })
        }
        resolve(body.data)
      })
      .catch( err => {
        reject(err)
      })
    })
  }

}


export default new Http()