# MiniVite
一个迷你版的玩具Vite(用于研究原理用)

## 如何运行
### Step 1. 创建项目+所需依赖
		vue vue create yourproject // 创建一个Vue项目
		vue add vue-next // 增加Vue3依赖
		npm i koa -d // 安装koa
Tips: 需要Vue-cli 3(或者更高版本)已经安装。

### Step 2. 放置到相关位置
将文件放置到vue项目的src目录下(与assets/router等同级)，并且添加一个index.html文件。
文件内容如下:

		<!DOCTYPE html>
		<html lang="en">
		<head>
    		<meta charset="UTF-8">
    		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    		<title>Document</title>
		</head>
		<body>
    			<div id='app'>
    			</div>
    			<script type='module'  src='./main.js'> </script>
		</body>
		</html>
		
更改一下main.js相关内容:

		import { createApp } from "vue";
		import App from "./App.vue";
		createApp(App).mount("#app");		

### Step 3. 运行相关脚本

		node ./Minivite/lib/server.js

Tips: 需要确保node已经安装。
### Todo
后期会考虑将其发布为一个npm包







