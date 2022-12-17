# Personal Website

I run this website with Docker

```shell
sudo docker build -t personal-website -f Docker/Dockerfile .
```

```shell
sudo docker run -it -v ${PWD}:/app/ -p 8000:8000 personal-website bash
```
