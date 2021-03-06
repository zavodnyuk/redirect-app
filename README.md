# Redirect app
<a href="https://github.com/zavodnyuk/redirect-app">
  <img src="https://img.shields.io/github/languages/code-size/zavodnyuk/redirect-app?style=flat&amp;color=blue" alt="Code Size">
</a> 
<a href="https://github.com/zavodnyuk/redirect-app">
  <img src="https://img.shields.io/github/repo-size/zavodnyuk/redirect-app?style=flat&color=blue" alt="Code Size">
</a>


Faced with issue when I (or someone from familly) get used to local urls. And it's annoying for them to learn new urls every time I change configs / use new domain name / port. So as a workaround I decided to redirect them.

Eventually it must be replaced with static domain name and use local dns resolved that handle all of it.

# How it works:

Simple node aaplication with only one listener function that redicts to predirefined static url. Wrapped into docker container

# Build
- cd into project directory

- `docker build -t redirect_app .`

# Run in docker
<a href="https://hub.docker.com/r/zavodniuk/redirect-app"><img src="https://img.shields.io/docker/pulls/zavodniuk/redirect-app?style=flat&amp;color=blue" alt="Docker Pulls"></a>
<a href="https://hub.docker.com/r/zavodniuk/redirect-app"><img src="https://img.shields.io/docker/image-size/zavodniuk/redirect-app/latest" alt="Docker Size"></a>


```
docker run \
-p 8666:80 \
--name redirect_test \
--restart=unless-stopped \
-e TARGET_URL=https://google.com \
-d zavodniuk/redirect_app
```

# Run in docker-compose
```
version: "3"

services:
  deluge:
  image: zavodniuk/redirect_app
    container_name: redirect_deluge_app
    restart: unless-stopped
    ports:
      - ${DELUGE_PORT}:80
    environment:
      - TARGET_URL=${DELUGE_TARGET_URL}
```
