here="$(dirname "$BASH_SOURCE")"
cd $here
docker run -it --rm -p 8888:80 -v `pwd`/../draft/api/swagger/swagger.yaml:/usr/share/nginx/html/spec/swagger.yaml my/service-management-api-redoc
