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

11. nodemon 두번 로드 해결

    소스코드가 변경되면 nodemon이 바로 서버를 재시작한다.

    재시작 중에 babel이 소스코드를 변경시키면 또한번 재시작 된다.
    이런 문제점을 해결하기위해 delay를 추가시켜 babel이 소스코드를 변경할때 까지 기다린다.

    ```
    "scripts": {
    "start": "nodemon --exec babel-node index.js --delay 2 //2초 뒤에 재실행 "
    }
    ```
