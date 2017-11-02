FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY ./index.html /usr/share/nginx/html/index.html

COPY ./run.sh /usr/share/nginx/
#WORKDIR /usr/share/nginx/html/spec

EXPOSE 8888
CMD ["/usr/share/nginx/run.sh"]




