/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-10-10 23:43:11
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-11 01:15:03
 */

import fs from "fs"
import path  from "path"

interface ArticleContent {
  Title: string
  Date: string
  Tag: string[]
  Link: string
}


function ReadAll ( rootPath: string): (ArticleContent|undefined)[] {
    const result:ArticleContent[] = []
    function read (rootPath: string){
      const files = fs.readdirSync(rootPath)
      files.map( (item: string) => {
        let tempPath = path.join(rootPath, item)
        let stats = fs.statSync(tempPath)
        
        if (stats.isDirectory()) {
          read(tempPath)
        }else {
          const content = fs.readFileSync(tempPath,'utf-8')
          const re = new RegExp("<!--(\n.*)*-->")
          if (re.test(content)) {
            var val = content.match(re)?.input
            val =  val?.replaceAll("\n","")
            
            console.log(val?.match("<!--(.*)-->")![1].match('\*\s*@(\w)*:\s*"(.)*"'))
          }
          const articleData:ArticleContent ={
            Title:"",
            Date:"",
            Tag:[""],
            Link:"",
          }
          result.push(articleData)
        }

      })
    }
    read(rootPath)
    return result
}

export default {
  ReadAll
}

console.log( ReadAll("/Users/adxiong/Documents/github/blog/doc") )