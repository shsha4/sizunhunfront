# π§₯ λμμ¬μ΄μ€ν (Front)

### π» νλ‘ νΈ μ€ν
```shell
npm start # νλ‘μ νΈ μ€ν
npm run build # νλ‘μ νΈ λΉλ
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
### nginx λͺλ Ήμ΄
```shell
systemctl start nginx # nginx μλ² μ€ν
systemctl restart nginx # μ¬μ€ν
systemctl status nginx # μν νμΈ
```