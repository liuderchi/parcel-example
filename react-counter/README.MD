# Parcel Example - React Counter

使用 [Parcel](https://parceljs.org/) 打包的 React Counter 应用。

## 0. 新建目录

    mkdir react-counter
    cd react-counter

## 1. 初始化 npm

    yarn init -y

或

    npm init -y

此时会创建要给 package.json 文件，文件内容：

```json
{
  "name": "parcel-example-react-counter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## 2. 添加 React

yarn：

    yarn add react react-dom

npm:

    npm install react react-dom --save

package.json 文件内容：

```diff
 {
   "name": "parcel-example-react-counter",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
-  "license": "ISC"
+  "license": "ISC",
+  "dependencies": {
+    "react": "^16.2.0",
+    "react-dom": "^16.2.0"
+  }
 }
```

## 3. 添加 Babel

新建 .babelrc 文件

    touch .babelrc

输入内容：

```json
{
  "presets": ["react"]
}
```

添加 babel-preset-react：

yarn：

    yarn add babel-preset-react -D

npm:

    npm install babel-preset-react --D

此时 package.json 文件内容：

```diff
 {
   "name": "parcel-example-react-counter",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "dependencies": {
     "react": "^16.2.0",
     "react-dom": "^16.2.0"
-   }
+   },
+   "devDependencies": {
+     "babel-preset-react": "^6.24.1"
+   }
 }
```

## 5. 添加 Parcel

yarn：

    yarn add parcel-bundler -D

npm:

    npm install parcel-bundler --D

此时 package.json 文件内容：

```diff
 {
   "name": "parcel-example-react-counter",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "dependencies": {
     "react": "^16.2.0",
     "react-dom": "^16.2.0"
    },
    "devDependencies": {
-      "babel-preset-react": "^6.24.1"
+      "babel-preset-react": "^6.24.1",
+      "parcel-bundler": "^1.0.3"    
    }
 }
```

## 6. 新建 index.html 文件

内容

```html
<html>

<body>
    <div id="root"></div>
    <script src="./index.js"></script>
</body>

</html>
```

## 7. 新建 js 文件

创建 

- index.js
- app.jsx

## 8. 添加打包命令

```diff
 {
   "name": "parcel-example-react-counter",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "start": "parcel index.html"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "dependencies": {
     "react": "^16.2.0",
     "react-dom": "^16.2.0"
    },
    "devDependencies": {
       "babel-preset-react": "^6.24.1"
       "babel-preset-react": "^6.24.1",
       "parcel-bundler": "^1.0.3"    
    }
 }
```

## 9. 完成

运行

    yarn start

或

    npm start

在浏览器中打开 <http://localhost:1234>

打包过程会生产 .cache 和 dist 两个目录，如果是 git 工程，可以新建 .gitignore 文件忽略这两个目录：

```
.cache
dist
node_modules
```
