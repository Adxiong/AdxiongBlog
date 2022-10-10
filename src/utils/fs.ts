/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-10-10 23:43:11
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-10 23:56:12
 */

import fs from "fs"
import path from "path"

interface ArticleContent {
  Title: string
  Date: string
  Tag: string[]
  content: string
}

function ReadAll ( rootPath: string) {
    const files = fs.readdirSync(rootPath)
    files.map( (item: string) => {
      let tempPath = path.join(rootPath, item)
      let stats = fs.statSync(tempPath)
      
      if (stats.isDirectory()) {
        ReadAll(tempPath)
      }else {
        const content = fs.readFileSync(tempPath,'utf-8')

      }

    })
}

export default {
  ReadAll
}