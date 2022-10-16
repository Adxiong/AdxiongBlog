
/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-10-07 23:14:56
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-15 16:52:37
 */
import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      "@":path.resolve(__dirname,"src"),
      "~":path.resolve(__dirname,"node_modules")
    }
  }
})
