# Node.js

1. node install
2. npm -v
3. npm init
4. npm i express
5. .gitignore 파일생성
6. babel env 설치

   ```
   npm install --save-dev @babel/preset-env
   ```

7. .babelrc 파일생성
8. package.json, scripts 수정

   ```
   "scripts":{
   "start": "babel-node index.js"
   }
   ```

9. nodemon 설치
10. package.json 추가
    ```
    "scripts": {
    "start": "nodemon --exec babel-node index.js"
    }
    ```

```

```
