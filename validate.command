here="$(dirname "$BASH_SOURCE")"
cd $here

docker run -it --rm -v `pwd`/draft/api:/opt/draft/api my/service-management-api-prism validate --spec /opt/draft/api/swagger/swagger.yaml
