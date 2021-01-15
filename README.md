# Redirect app

Faced with issue when I (or someone from familly) get used to local urls. And it's annoying for them to learn new urls every time I change configs / use new domain name / port. So as a workaround I decided to redirect them.

Eventually it must be replaced with static domain name and use local dns resolved that handle all of it.

# How it works:

Simple node aaplication with only one listener function that redicts to predirefined static url. Wrapped into docker container

# Build first 
- cd into project directory

- ```docker build -t redirect_app .`

# Run in docker

```````````````````
docker run \
-p 8666:80 \
--name redirect_test \
--restart=unless-stopped \
-e TARGET_URL=https://google.com \
-d redirect_app:latest
```

# Run in docker-compose


