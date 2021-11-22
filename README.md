# 🧥 너의사이준훈 (Front)

### 💻 프론트 실행
```shell
npm start # 프로젝트 실행
npm run build # 프로젝트 빌드
```

### Server Projects Directory
```shell
home/opc/projects/build
```

### nginx proxy setting
```shell
server {
        listen 3000;
        location / {
                root    /home/opc/projects/build;
                index   index.html index.htm;
                try_files $uri /index.html;
        }
        location /apis {
                proxy_pass http://localhost:8080;
        }
        # just test
        location /test {
                proxy_pass http://localhost:8080;
        }
}
```
### nginx 명령어
```shell
systemctl start nginx # nginx 서버 실행
systemctl restart nginx # 재실행
systemctl status nginx # 상태 확인
```