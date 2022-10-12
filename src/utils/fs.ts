/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-10-10 23:43:11
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-12 23:42:02
 */

import fs from "fs"
import path  from "path"

export interface ArticleContent {
  Title: string
  Date: string
  Author: string
  Description:string
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
          const notesReg = new RegExp(/<!--([\r\n]|.)*?-->/)
          var notesMap: {[key:string]:string} = {}

          if (notesReg.test(content)) {
            var val = notesReg.exec(content)
            var group = new RegExp(/.*\*\s*@\s*.*:\s*.*\n/g)
            val![0].match(group)?.forEach( item => {
              let content = (/@[\w\d]*:/).exec(item)
              if (content) {
                let key:string = content[0].slice(1,-1)
                let val:string = item.match(/:.*/)![0].slice(1)
                notesMap[key] = val  
              }              
            })
          }
          if (Object.values(notesMap).length > 0) {
            const articleData:ArticleContent ={
              Title: notesMap['Title']??"未知" ,
              Author: notesMap['Author']??"未知",
              Description:notesMap['Description']??"未知",
              Date: notesMap['Date']??"未知",
              Tag: notesMap['Tag'] ? notesMap['Tag'].split(",") : [],
              Link:"",
            }
            result.push(articleData)
          }
          
        }

      })
    }
    read(rootPath)
    return result
}

const mfs = {
  ReadAll
}

export default mfs