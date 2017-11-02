here="$(dirname "$BASH_SOURCE")"
cd $here

docker run -it --rm -p 8080:8080 -e "SWAGGER_JSON=/opt/swagger.yaml" -v `pwd`/draft/api/swagger:/opt swaggerapi/swagger-ui

